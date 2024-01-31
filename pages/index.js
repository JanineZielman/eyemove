import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

import { createClient } from "../prismicio";
import Layout from "../components/Layout";


const Page = ({page, menu, footer}) => {
  return(
    <Layout menu={menu} footer={footer}>
      <section className="home">
        <SliceZone slices={page.data.slices} components={components}/>
      </section>
    </Layout>
  );
}

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });


  const menu = await client.getSingle("menu");
  const footer = await client.getSingle("footer");
  const page = await client.getByUID("page", "home");


  return {
    props: {
      menu,
      page,
      footer
    },
  };
}