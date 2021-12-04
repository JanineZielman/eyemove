import React from "react";
import { RichText, Link } from "prismic-reactjs";

const Header = ({ menuLinks }) => {
  return(
    <header>
      <a href="/" className="logo"><img src="/images/logo.svg"/></a>
      <Links menuLinks={menuLinks} />
    </header>
  )
}

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <a href={menuLink.link.uid}>
                {RichText.asText(menuLink.label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  return null;
};

export default Header;