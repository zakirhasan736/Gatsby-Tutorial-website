import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { images} from '../../constants';
import {ServicesTitleDyData,ServiceItemsBoxData,ServicesItemBoxBtn} from '../../constants/data';
import './Services.css';



const Services = () => {
 

const data = useStaticQuery(graphql`
  query servicecardQuery {
    allServiceCardJson {
      edges {
        node {
          alt
          id
          title
          img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imgOverly {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`)

function getserviceCard(data){
  const  servicecardArray = []
  data.allServiceCardJson.edges.forEach((item, index) => {
    servicecardArray.push(

      <div className="AppServicess__cardWrapperBox" key={index}>
      <div className="AppServices__CardItems">
        <div className="AppServicess__itemsImage">
          <img className="cardImg__overlyn"
           src={item.node.imgOverly.childImageSharp.fluid.src}
            alt={item.node.alt} 
          fluid={item.node.imgOverly.childImageSharp.fluid}
          />
          <img className='cardModelImg' 
          src={item.node.img.childImageSharp.fluid.src}
           alt={item.node.alt} 
          fluid={item.node.img.childImageSharp.fluid} 
          />
          </div>
        <h3 className='AppService__Title'>{item.node.title}</h3>
      </div>
      </div>

    )



  });
  return servicecardArray
}










  return (
    <>
  <div className="AppServices__Section" id="about">
  <div className="ShapeBottom colorShapeBottom"><img src={images.bottomShapeColor} alt="bottomShapeColor" /></div>
    <div className="AppServices__sectionWrapper">

    {ServicesTitleDyData.map(({opTitle, descSt1,descSt2, title,id,})=>(
<div className="AppServices__SectionBox" key={id}>
<div className="AppServices__TitleBox">
<h5 className="AppServices__TitleOverly">{opTitle}</h5>
  <h2 className="AppServices__SecTitle">{title}</h2>
</div>
<p className="AppServices__Desc">
 <span>{descSt1}</span>
 <span>{descSt2}</span>
</p>
</div>

))}

    <div className="AppServices__ServiceItemsBox">
    {ServiceItemsBoxData.map(({number, textTitle,})=>(
         <h3 className='ServicesTitle'><span>{number}+</span>{textTitle}</h3>
    ))}

     <div className="AppServices__ItemsBox">{getserviceCard(data)}</div>

     {ServicesItemBoxBtn.map(({ title,id,})=>(
     <button type="button" className="custom__button AppServicesBTN" key={id}>{title}</button>
     ))} 
    </div>

    </div>

  </div>
  </>
  )
}

export default Services;
