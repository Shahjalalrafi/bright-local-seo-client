import Head from 'next/head'
import Image from 'next/image'
import Header from '../Component/Header'
import Trusted from '../Component/Trusted'
import DoubleSection from '../Component/DoubleSection'
import Free from '../Component/Free'
import Ratings from '../Component/Ratings'
import Teams from '../Component/Teams'
import Tools from '../Component/Tools'
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

export default function Home({posts}) {
  return (
    <div>
      <Header />
      <Trusted />
      <Tools />
      <DoubleSection />
      <CostSection />
      <Free />
      <Teams posts={posts} />
      <Ratings />
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