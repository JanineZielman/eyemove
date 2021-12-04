import Prismic from '@prismicio/client'
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import { RichText } from 'prismic-reactjs'
import resolver from "../sm-resolver.js";
import { Client } from "../prismic-configuration";

import Layout from '../components/Layout'

const Page = ({slices, menu, footer}) => {
  return (
    <Layout menu={menu} footer={footer}>
      <section className="page">
        <SliceZone slices={slices} resolver={resolver} />
      </section>
    </Layout>
  )
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: 'repeat',
  type: 'page',
  apiParams({ params }) {
    return {
      uid: params.uid
    }
  }
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid
      }
    }
  }
});

export default Page;
