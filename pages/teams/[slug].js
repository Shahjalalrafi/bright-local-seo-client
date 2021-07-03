import {
    sanityClient,
    usePreviewSubscription,
    urlFor,
    PortableText
} from '../../sanity'


const personQuery = `*[ _type == 'post' && slug.current == $slug][0] {
    _id,
  name,
  slug,
  positions,
  mainImage,
  body
}`

export default function singlePerson({person}) {
    return (
        <div>
            <h2>{person.name}</h2>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[ _type == 'post' && defined(slug.current)]{
            "params": {
                "slug": slug.current
            }
        }`
    )

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    const {slug} = params
    const person = await sanityClient.fetch(personQuery,{ slug })
    return {
        props: {
            person
        }
    }
}