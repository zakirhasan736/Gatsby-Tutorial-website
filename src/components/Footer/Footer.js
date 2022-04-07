import React from 'react';
import {Footernavdata,FooterCopyrightData } from '../../constants/data';
import './Footer.css';

const Footer = () => (
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
        {FooterCopyrightData.map(({id,text})=>(
                <p key={id} className="copyrightText">
               {text}
              </p>
                  ))}
            
        </div>
        
    </div>
     
  </div>
);

export default Footer;
