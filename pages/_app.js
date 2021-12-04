import React from 'react'
import Prismic from '@prismicio/client'
import NextApp from 'next/app'
import { Client } from "../prismic-configuration";

import "../styles/globals.scss";

export default class MyApp extends NextApp {
  static async getInitialProps(appCtx) {
    const menu = (await Client().getSingle("menu")) || {};
    const footer = (await Client().getSingle("footer")) || {};
    return {
      props: {
        menu: menu,
        footer: footer
      },
    };
  }

  render() {
    const { Component, pageProps, props } = this.props
    return (
      <Component {...pageProps} menu={props.menu} footer={props.footer} />
    )
  }
}
