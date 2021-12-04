import Prismic from "@prismicio/client";
import Link from "next/link";

// -- Prismic Repo Name
export const repoName = 'eyemove'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5ZYW8wV0JNQUFDQUF6d3ls.77-9Tmnvv70GDO-_ve-_vX4P77-977-977-9TO-_vWfvv71V77-9R--_vT3vv70W77-977-9LHFPBe-_ve-_vQ'


// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  if (doc.type === 'info') {
    return `/praktische-informatie`
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'info') {
    return '/praktische-informatie'
  }
  return '/'
}

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
);

export const Router = {
  routes: [{"type":"page","path":"/:uid"}],
  href: (type) => {
    const route = Router.routes.find(r => r.type === type);
    return route && route.href;
  }
};

export const Client = (req = null, options = {}) => (
  Prismic.client(apiEndpoint, Object.assign({ routes: Router.routes }, options))
);
