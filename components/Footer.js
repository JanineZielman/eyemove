import React from "react";
import { RichText, Link } from "prismic-reactjs";

const Footer = ({ footerData, menuLinks }) => {
  return(
		<footer>
			<div className="columns">
				{footerData.map((data, index) => (
					<div className="column" key={`column-` + index}>
						<RichText render={data.column} key={index} />
					</div>
				))}
			</div>
			<Links menuLinks={menuLinks} />
	 	</footer>
  )
}

const Links = ({ menuLinks }) => {
  if (menuLinks) {
    return (
      <nav>
        <ul>
          {menuLinks.map((menuLink, index) => (
            <li key={`menulink-${index}`}>
              <a href={Link.url(menuLink.link.url)}>
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


export default Footer;