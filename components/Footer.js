import { PrismicRichText } from "@prismicio/react";
import React from "react";

const Footer = ({ footerData, menuLinks }) => {
  return(
		<footer>
			<div className="columns">
				{footerData.map((data, index) => (
					<div className="column" key={`column-` + index}>
						<PrismicRichText field={data.column}/>
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
              <a href={menuLink.link.uid}>
                <PrismicRichText field={menuLink.label}/>
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