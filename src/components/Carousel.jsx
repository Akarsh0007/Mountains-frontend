import React from 'react'
import Slider from'react-slick'
import "slick-carousel/slick/slick.css";    
import "slick-carousel/slick/slick-theme.css";
import cr1 from './Images/CT_SkillTest_v3-27.png'
import cr2 from './Images/CT_SkillTest_v3-29.png'
function Carousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='carousel'>
        <div className='backdrop'/>
        <Slider {...settings} className='slider'>
          <div className="eachslide">
           <img src={cr1} alt="" className="cr1" />
          </div>
          <div className="eachslide">
            <img src={cr2} alt="" className="cr2" />
          </div>
          <div className="eachslide">
          <img src={cr1} alt="" className="cr1" />
          </div>
          <div className="eachslide">
            <img src={cr2} alt="" className="cr2" />
          </div>
          <div className="eachslide">
          <img src={cr1} alt="" className="cr1" />
          </div>
          <div className="eachslide">
            <img src={cr2} alt="" className="cr2" />
          </div>
           <div className="eachslide">
           <img src={cr1} alt="" className="cr1" />
          </div> 
          <div className="eachslide">
            <img src={cr2} alt="" className="cr2" />
          </div> 
          <div className="eachslide">
          <img src={cr1} alt="" className="cr1" />
          </div>
           <div className="eachslide">
            <img src={cr2} alt="" className="cr2" />
          </div> 
        </Slider>
    </div>
  )
}

export default Carousel