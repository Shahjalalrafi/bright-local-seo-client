import Head from 'next/head'
import Image from 'next/image'
import Header from '../Component/Header'
import Trusted from '../Component/Trusted'
import DoubleSection from '../Component/DoubleSection'
import { sanityClient, urlFor } from '../sanity'

const postQuery = `*[_type == 'post'] {
	_id,
  title,
  slug,
  mainImage,
  body
}`

export default function Home({posts}) {
// console.log(posts)
  return (
    <div>
      <Header />
      <Trusted />
      <DoubleSection />
    </div>
  )
}

export const getStaticProps = async() => {
  const posts = await sanityClient.fetch(postQuery)

  return {
    props: {
      posts
    }
  }
}