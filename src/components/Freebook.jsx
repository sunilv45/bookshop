import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Coursecards from './Coursecards';

export default function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    const freeBookList = list.filter((data) => data.category === 'Free');
    //console.log(settings);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
            <h2 className="font-semibold text-2xl pb-2">Free Courses</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam minima at error debitis. Perspiciatis, ipsum.</p>
        </div>
        <div>
            <Slider {...settings}>
                {freeBookList.map((item)=>(
                    <Coursecards item={item} key={item.id} />
                ))}
            </Slider>
        </div>
      </div>
    </>
  )
}
