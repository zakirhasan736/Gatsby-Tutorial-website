import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {Footernavdata } from '../../constants/data';
import './Footer.css';

  const Footer = () => {

const data = useStaticQuery(graphql`
query FooterdataQuery {
  allFooterdataJson {
    edges {
      node {
        NavName
        Navpath
        id
        path
        text
      }
    }
  }
}

`)


function getFooterData(data){
  const footerDatasArray = []
  data.allFooterdataJson.edges.forEach((item, index) => {
    footerDatasArray.push(
      <p key={index} className="copyrightText">
      {item.node.text}
     </p>
    )

  });

return footerDatasArray

}

    return (
    <>
  <div className="app__footer">
     
    <div className="AppFooter__Wrapper">

        <div className="AppFooter__LinkBox">
            <ul className="Footer__Navlink">
                {Footernavdata.map(({id,name,path})=>(
                  <li key={id} className="Footer_NavItems">
                      <a  href={path}>{name}</a>
                  </li>
                  ))}
            </ul>
        </div>

        <div className="AppFooter__CopyrightBox">
            {getFooterData(data)}
        </div>
        
    </div>
     
  </div>
  </>
  )
}

export default Footer;
