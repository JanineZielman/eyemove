import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, menu, footer }) => {
  const menuLinks = menu.data.menu_links;
	const footerData = footer.data.columns;
  return (
    <div>
      <Head>
        <title> Eyemove EMDR</title>
      </Head>
      <Header menuLinks={menuLinks} />
      <main>{children}</main>
			<Footer footerData={footerData} menuLinks={menuLinks}/>
    </div>
  );
};

export default Layout;