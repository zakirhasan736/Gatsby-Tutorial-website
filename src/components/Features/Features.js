import React from 'react';
import SectionTitle from '../../components/sectionTitle/sectionTitle'
import SectionDescription  from '../../components/sectionDescription/sectionDescription'
import {images } from '../../constants';
import './Features.css';
import { graphql, useStaticQuery } from 'gatsby';



const FeaturesDetails = () => {

const data = useStaticQuery(graphql`

query FeatureDetailsQuery {
  allFeaturesDataJson {
    edges {
      node {
        id
        title
        desc
      }
    }
  }
}

`)

function getFetauredetails(data){
  const featuredetailsArray = []
  data.allFeaturesDataJson.edges.forEach((item, index) => {
    featuredetailsArray.push(
      <div className="AppFeaturesDetails__ContentBoxItems" key={index}>
      <h3 className="AppFeatures__title">{item.node.title}</h3> 
      <p className="AppFeatures__Desc">{item.node.desc}</p>
  </div>
    )
  });

 return featuredetailsArray
}








  return (
    <>
       
<section className="AppFeaturesDetails__section">
<div className="ShapeBottom FeatureBottom"><img src={images.bottomShapeColor} alt="" /></div>
<div className="ShapeTop FeaturTop"><img src={images.TopShapeColor} alt="" /></div>
    <div className="AppFeaturesDetails__wrapper">
        <div className="AppFeatures__sectionBox">
           <SectionTitle title="我们的承诺" />
           <SectionDescription secDescription="24小时全天候无时差为你服务" />
        </div>

        <div className="AppFeatures__wrapperBox">
        <div className="FeaturesModdelImg"><img src={images.FeaturesModdelImg} alt="" /></div>
        <div className="FeaturesRoundShapes">
          <span className="RoundShape Round1"></span>
          <span className="RoundShape Round2"></span>
          <span className="RoundShape Round3"></span>
          <span className="RoundShape Round4"></span>
        </div>
            <div className="AppFeaturesDetails__TopWrapper">
             
             {getFetauredetails(data)}

            </div>

            <div className="AppFeaturesDetails__BottomWrapper">
                 <div className="AppFeaturesDetails__ContentBoxItems">    
                 </div>

            </div>

        </div>

    </div>
</section>

  </>
  )
}

export default FeaturesDetails;