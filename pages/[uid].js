import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

import { createClient } from "../prismicio";
import Layout from "../components/Layout";

const Page = ({page, menu, footer}) => {
  return (
    <Layout menu={menu} footer={footer}>
      <section className={`page ${page.uid}`}>
        <SliceZone slices={page.data.slices} components={components} />
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);
  const menu = await client.getSingle("menu");
  const footer = await client.getSingle("footer");

  return {
    props: {
      page,
      menu,
      footer
    },
  };
}

export default Page;

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid }
      };
    }),
    fallback: false,
  };
}