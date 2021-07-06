import Head from 'next/head'
import Navbar from '../Component/Navbar'
import Header from '../Component/Header'
import Trusted from '../Component/Trusted'
import DoubleSection from '../Component/DoubleSection'
import Free from '../Component/Free'
import Ratings from '../Component/Ratings'
import Teams from '../Component/Teams'
import Tools from '../Component/Tools'
import Footer from '../Component/Footer'
import CostSection from '../Component/CostSection'
import { sanityClient } from '../sanity'

const postQuery = `*[_type == 'post'] {
	_id,
  name,
  slug,
  positions,
  mainImage,
  body
}`

const trustedQuery = `*[_type == 'trusted'] {
	_id,
  mainImage
}`

const doubleQuery = `*[_type == 'doubleSection'] {
  _id,
  mainImage,
  heading,
  title,
  list
}`

const ratingQuery = `*[ _type == 'ratings'] {
  _id,
  mainImage,
  star,
  rating
}`

const headerQuery = `*[ _type == 'header'] {
  _id,
  heading,
  title,
  mainImage,
  description
}`


export default function Home({posts, trusted, doubles, ratings, header}) {

  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="JOb content, application" />
      </Head>

      <Navbar />
      <Header header={header} />
      <Trusted trusted={trusted} />
      <Tools />
      <DoubleSection doubles={doubles} />
      <CostSection />
      <Free />
      <Teams posts={posts} />
      <Ratings ratings={ratings} />
      <Footer />
    </div>
  )
}

export const getStaticProps = async() => {
  const posts = await sanityClient.fetch(postQuery)
  const trusted = await sanityClient.fetch(trustedQuery)
  const doubles = await sanityClient.fetch(doubleQuery)
  const ratings = await sanityClient.fetch(ratingQuery)
  const header = await sanityClient.fetch(headerQuery)

  return {
    props: {
      posts,
      trusted,
      doubles,
      ratings,
      header
    }
  }
}

