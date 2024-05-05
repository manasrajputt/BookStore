import React from 'react'
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");
  filterData.map((item) => {
    console.log(filterData.length)
  })
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

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mb-10'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offeres Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam qui sapiente alias velit neque sit dignissimos eos iure ut ipsum commodi quis error laudantium tenetur, nobis consectetur corporis nesciunt dolorum?</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FreeBook