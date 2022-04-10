import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import InViewMonitor from 'react-inview-monitor'
const DynamicBenner = () => {


 const data = useStaticQuery(graphql`
 query BennerQuery {
  allBennerDataJson {
    edges {
      node {
        id
        title
        styleTitle
        subTitle
        buttonText
      }
    }
  }
}
 `)
  
 function getDynamicBenner(data){
   const BennerArray = []
   data.allBennerDataJson.edges.forEach((item, index) => {
     
    BennerArray.push(
      <div className="appBenner__wrapper_infowrap" key={index}>
          <div className="headingTitleBox">
   <InViewMonitor
   classNameNotInView='vis-hidden'
   classNameInView='slideDrwUp'  >
   <h1 className="BennerTitle"><span className='strockedText'>{item.node.styleTitle}</span>  {item.node.title}</h1>
   </InViewMonitor>
   <InViewMonitor
   classNameNotInView='vis-hidden'
   classNameInView='slideDrwUp'  >
   <h1 className="BennerTitle tiTwo">{item.node.subTitle}</h1>
   </InViewMonitor>
   
   </div>
   <InViewMonitor
   classNameNotInView='vis-hidden'
   classNameInView='slideDrwUp'  >
   <button type="button" className="custom__button bennerBTN">{item.node.buttonText}</button>
   </InViewMonitor>

      </div>

    )

   });

   return BennerArray
 }

  return (
    <>
   <div className="appBenner__wrapper_info">
     {getDynamicBenner(data)}
   </div>
   
    </>
  )
}

export default DynamicBenner