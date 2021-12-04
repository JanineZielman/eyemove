import Prismic from '@prismicio/client'
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import resolver from "../sm-resolver.js";
import { Client } from "../prismic-configuration";

import Layout from '../components/Layout'

const Page = ({slices, menu, footer}) => {
  return(
    <Layout menu={menu} footer={footer}>
      <section class="home">
        <SliceZone slices={slices} resolver={resolver} />
      </section>
    </Layout>
  );
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'page',
  queryType: 'repeat',
  apiParams: {
    uid: 'home'
  }
});

export default Page;