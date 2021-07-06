import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';;
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from '../../Component/Navbar'
import Footer from '../../Component/Footer'
import {
    sanityClient,
    urlFor,
} from '../../sanity'


const personQuery = `*[ _type == 'post' && slug.current == $slug][0] {
    _id,
  name,
  slug,
  positions,
  mainImage,
  body
}`

export default function singlePerson({ person }) {
    return (
        <main>
            <Navbar />
            <Container>
                <Typography variant='h3'>
                    {person.name}
                </Typography>
                <img src={urlFor(person.mainImage).url()} alt={person.name} width={370} height={300} />
                <Typography variant="h5">
                    {person.body[0].children[0].text}
                </Typography>
                <Link href="/"><Typography variant="h6" style={{ color: 'red', cursor: "pointer" }}>Back to home page</Typography></Link>
            </Container>
            <Footer/>
        </main>
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

export async function getStaticProps({ params }) {
    const { slug } = params
    const person = await sanityClient.fetch(personQuery, { slug })
    return {
        props: {
            person
        }
    }
}