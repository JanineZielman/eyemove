import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";

import { createClient } from "../../prismicio";
import Layout from "../../components/Layout";
import { RichText } from "prismic-reactjs";

const InfoPage = ({infoData, menu, footer}) => {
  return (
    <Layout menu={menu} footer={footer}>
      <section className="page">
				<div className="text-block container">
					<RichText render={infoData.data.text}/>
					<table>
						<tbody>
							{infoData.data.tableRow.map((row, index) => (
								<tr key={`row`+index}>
									<td key={`item1-`+index}>{RichText.asText(row.field1)}</td>
									<td key={`item2-`+index}>{RichText.asText(row.field2)}</td>
									<td key={`item3-`+index}>{RichText.asText(row.field3)}</td>
								</tr>
							))}
						</tbody>
					</table>
					<SliceZone slices={infoData.data.slices} components={components} />
				</div>
      </section>
    </Layout>
  )
}

export default InfoPage;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
	const footer = await client.getSingle("footer");
  const infoData = await client.getSingle("info");


  return {
    props: {
      menu,
      footer,
      infoData
    },
  };
}