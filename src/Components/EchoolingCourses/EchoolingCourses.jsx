import {EchoolingCourseCardApi } from "../../assets/Api/EchoolingCourseCard"
import EchoolingCoursesCard from "../EchoolingCoursesCard/EchoolingCoursesCard"
import LiveClasses from "../LiveClasses/LiveClasses"
import Mentor from "../Mentor/Mentor"
import SearchNav from "../SearchNav/SearchNav"
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EchoolingCourses = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className="w-[90%] mx-auto">
                <SearchNav/>
                <div className=" relative">
                    <div className=" text-center bg-[#F2F4F9] pt-20 pb-60 my-20 rounded-xl">
                        <h5 className=" text-center font-bold text-[#014bae] py-2 uppercase font-[poppins]">Echooling available courses</h5>
                        <h1 className=" font-bold text-[35px] md:text-[40px] md:leading-tight leading-normal text-wrap px-12  font-[poppins] uppercase">Online Coaching Lessons For <br className=" md:block hidden"/>
                        Remote Learning</h1>
                    </div>
                        {/* lg:px-[100px] */}
                    <div className="container absolute top-[320px] md:top-[270px]">
                        <Slider {...settings}>
                            {EchoolingCourseCardApi.map((e,index) => (
                                <EchoolingCoursesCard icon={e.icon} title={e.title} desc={e.desc} learnmore={e.learnmore} />
                            ))}
                        </Slider>
                    </div>
                </div>

                <div className="lg:mt-52 md:mt-[200px] mt-0">
                    <LiveClasses/>
                </div>
                
                <div>
                    <Mentor/>
                </div>
                
                <div>
                    <UpcomingEvent/>
                </div>
            </div>
        </div>
    </>
  )
}

export default EchoolingCourses