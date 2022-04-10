import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = () => {

const data = useStaticQuery(graphql`

query ServicedetailsQuery {
  allServiceDetailsJson {
    edges {
      node {
        ImgShape {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ImgUrl {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        buttonText
        desc
        id
        title
      }
    }
  }
}


`)

function getserviceDetaildata(data){
  const servicedetailArray = []
  data.allServiceDetailsJson.edges.forEach((item, index) => {
    
    servicedetailArray.push(


      <div className="AppServiceDetails__CardItems" key={index}>
      <div className="AppServiceDetails__Card">
    
     <div className="ServiceDetail__ShapeRight">
        <img src={item.node.ImgShape.childImageSharp.fluid.src} 
        alt={item.node.alt}
        fluid={item.node.ImgShape.childImageSharp.fluid}
         />
        </div>
        <div className="AppServiceDetails__ModelImgBox">
        <img src={item.node.ImgUrl.childImageSharp.fluid.src} 
        alt={item.node.alt}
        fluid={item.node.ImgUrl.childImageSharp.fluid}
         />

          </div>
            <div className="AppServiceDetails__TextBox">
                <h3 className="servicDetails__title">{item.node.title}</h3>
                <p className="servicDetails__Desc">
                {item.node.desc}
                </p>
                <button className="serviceDetails__Btn" type='button'>{item.node.buttonText}]</button>
            </div>
        </div>
        </div>



    )

  });

  return servicedetailArray
}


  return (
    <>
       
<section className="AppServiceDetails__section">
    <div className="AppServiceDetails__wrapper">
    <div className="servicedetaisCardWraper">

         {getserviceDetaildata(data)}

    </div>
    </div>
</section>

  </>
  )
}

export default ServiceDetails;
