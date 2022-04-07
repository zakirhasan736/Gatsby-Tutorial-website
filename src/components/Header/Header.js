import React from 'react';
import { images} from '../../constants';
import DynamicBenner from '../BennerDynamic/DynamicBenner'
import './Header.css';

const Header = () => {
  return (
    <>
      <section className="app__BennerSection" id="home">
      <div className="ShapeBottom"><img src={images.bennerShape} alt="" /></div>
      <div className="bennerBgShape"><img src={images.bennerBgShape} alt="" /></div>
      <div className="TreeShape"><img src={images.TreeShape} alt="" /></div>
      <div className="BennerShapeRight"><img src={images.BennerShapeRight} alt="" /></div>
      <div className="benner__animetedRound">
        <span></span>
        <span></span>
      </div>
       <DynamicBenner/>
  </section>
    </>
  )
}

export default Header;
