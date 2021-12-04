import Prismic from '@prismicio/client'
import SliceZone from "next-slicezone";
import { RichText } from 'prismic-reactjs'
import resolver from "../../sm-resolver";
import { Client } from "../../prismic-configuration";

import Layout from '../../components/Layout'

const InfoPage = ({infoData, slices, menu, footer}) => {
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
					<SliceZone slices={slices} resolver={resolver} />
				</div>
      </section>
    </Layout>
  )
}

// Fetch content from prismic
export async function getStaticProps() {

  const infoData = await Client().getSingle("info") || {}

  return {
    props: {
      infoData: infoData,
			slices: infoData.data.slices,
    }
  }
}

export default InfoPage;
