import React from 'react';
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import {ClientGalleryData} from '../../constants/data';

import './ClientGallery.css';



const ClientGallery = () => {
  
  return (
    <>
  <section className="AppClientGallerry__section">
      <div className="AppClientGallerry__wrapper">
      <div className="AppClientGallery__sectionBox">
           <SectionTitle title="我们的承诺" />
        </div>

          <div className="AppClientGallerry__ContentBox">
          {ClientGalleryData.map(({imgUrl})=>(
    <div className="AppClientGallery_ImagItems"><img src={imgUrl} alt="clientImg" /></div>

               ))}
          </div>
      </div>
  </section>
  </>
  )
}

export default ClientGallery;