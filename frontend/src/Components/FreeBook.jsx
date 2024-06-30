import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../Components/Cards'

function FreeBook() {
  const filterData = list.filter((data) => data.category === "free");
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




      <div className='max-w-screen-2xl container mx-auto md:px-15 px-4'>

        <div className='font-semibold text-xl pb-2 '>Free Book Courses Available</div>
        <p>This is the book i.e free available and this course content is premuim. We are serving the online and offline book , we are also provive paid and premuim book.
        </p>


        <div>

          <Slider {...settings}>
           {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
           ))}
          </Slider>

        </div>
      </div>


    </>
  )
}

export default FreeBook