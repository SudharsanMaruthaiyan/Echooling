import { ArrowRight,Zap,ArrowUpRight, Star, User, CalendarRange } from "lucide-react"
import { home_img, home_img2, home_img3, suganth } from "../../assets/Api/Image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Counter from "../Counter/Counter";
const Homepage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
        <div className=" max-w-[100%] mx-auto"> 
            <div className=" w-[90%] lg:w-[90%] mx-auto my-10 lg:mt-28 lg:mb-32">
                <div className=" grid grid-cols-1 md:grid-cols-4 w-full items-center">
                    <div className=" col-span-4 xl:col-span-3  order-2 md:order-1 lg:pt-0">
                        <div className="flex items-center gap-2 border-2 w-fit p-1 rounded-full pr-5 group">
                            <Zap className=" w-8 h-8 bg-[#FDEEE9] group-hover:bg-[#E27447] group-hover:stroke-white p-2 rounded-full transition-colors"/>
                            <p className=" font-[poppins] text-sm">The Leader in Online Learning</p>
                        </div>
                        <div className=" py-6">
                            <p className=" text-[26px] font-[hindu] lg:text-[60px] font-bold text-[#221859] md:leading-tight lg:leading-none md:text-[54px]">Get <span className=" text-[#E27447]">2500+</span> Best Online</p>
                            <p className=" font-[hindu] lg:text-[60px] text-[26px] font-bold text-[#221859] md:leading-tight lg:leading-normal md:text-[54px]">Courses From UpSkilll </p>
                            <p className=" font-[poppins] text-[#131836] py-5 text-wrap lg:pr-72">Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className=" flex items-center gap-5 flex-wrap ">
                            <div className=" flex-wrap flex  gap-2">
                                <button className=" flex items-center gap-2 py-4 bg-[#131836] px-8 text-white font-medium font-[poppins] rounded-md hover:bg-[#E27447] border transition text-nowrap">Get Started <ArrowUpRight /> </button>
                                <button className=" flex items-center gap-2 py-4 bg-white hover:bg-[#131836] px-8 hover:text-white font-medium font-[poppins] rounded-md text-[#131836] border border-[#131836]  transition text-nowrap">View All Course <ArrowUpRight /> </button>
                            </div>
                            <div className=" flex items-center gap-5 md:space-x-[70px] space-x-[70px]">
                                <div className=" flex items-center relative">
                                    <div className=" bg-[#E27447] w-fit rounded-full p-[1.2px]">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full p-1 hover:scale-105 transition bg-white" alt="student" />
                                    </div>
                                    <div className=" bg-[#E27447] w-fit rounded-full p-[1.2px] absolute top-0 -right-10 md:-right-10">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full bg-white p-1  hover:scale-105 transition" alt="student" />
                                    </div>
                                    <div className=" bg-[#E27447] w-fit rounded-full p-[1.2px] absolute top-0 md:-right-20 -right-20">
                                        <img src={suganth} className=" md:w-12 w-11 rounded-full hover:scale-105 transition bg-[#fff] p-1 " alt="student" />
                                    </div>
                                </div>
                                <div className="">
                                    <p className=" text-[24px] font-[hindu] text-[#221859] font-bold leading-6 flex items-center gap-2"> 
                                    <Star className=" w-4 fill-[#E27447] stroke-none"/>
                                    <Star className=" w-4 fill-[#E27447] stroke-none"/>
                                    <Star className=" w-4 fill-[#E27447] stroke-none"/>
                                    <Star className=" w-4 fill-[#E27447] stroke-none"/>
                                    <Star className=" w-4 fill-[#E27447] stroke-none"/>
                                    </p>
                                    <p className=" text-[#232844] font-[poppins] font-bold  text-sm text-nowrap">35k+ happy students</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" md:order-2 order-1 bg-[#EFE9CD] py-6 px-5 rounded-xl xl:block hidden">
                        <Slider {...settings}>
                            <div>
                                <div className=" p- relative overflow-hidden group transition">
                                <div className="">
                                    <img src={home_img} alt="Home_image" className=" rounded-t-xl"/>
                                </div>
                                <div className="p-4 bg-white">
                                    <div className=" flex items-center justify-between ">
                                        <div className=" flex items-center gap-1">
                                            <User className=" stroke-green-600 w-4 "/>
                                            <p className=" text-[#E27447] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                        </div>
                                        <h2 className=" font-bold text-green-600 text-xl font-[poppins]">$22</h2>
                                    </div>
                                    <p className=" font-bold font-[poppins] text-black text-lg py-3">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                </div>
                                <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                                    <div className=" flex items-center gap-1">
                                        <CalendarRange className=" w-5 stroke-stone-600"/>
                                        <p>15/07/2024</p>
                                    </div>
                                    <div className=" flex items-center gap-1">
                                        <User className=" w-5 stroke-stone-600"/>
                                        <p>1Students</p>
                                    </div>
                                </div>

                                <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                                    <div>
                                        <div className=" flex items-center gap-1 pt-20 ">
                                            <User className=" stroke-green-600 w-4 "/>
                                            <p className=" text-[#E27447] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                        </div>
                                        <p className=" font-bold font-[poppins] text-black text-lg py-6">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                    </div>

                                    <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                                        <div className=" flex items-center gap-1">
                                            <CalendarRange className=" w-5 stroke-stone-600"/>
                                            <p>15/07/2024</p>
                                        </div>
                                        <div className=" flex items-center gap-1">
                                            <User className=" w-5 stroke-stone-600"/>
                                            <p>1Students</p>
                                        </div>
                                    </div>
                                    <div className=' w-full'>
                                        <button className='py-5 font-bold text-white my-5 w-full' id='H-btn'>Get Newsletter</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className=" p- relative overflow-hidden group transition">
                                    <div className="">
                                        <img src={home_img2} alt="Home_image" className=" rounded-t-xl"/>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center gap-1">
                                                <User className=" stroke-green-600 w-4 "/>
                                                <p className=" text-[#E27447] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <h2 className=" font-bold text-green-600 text-xl font-[poppins]">$22</h2>
                                        </div>
                                        <p className=" font-bold font-[poppins] text-black text-lg py-3">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                    </div>
                                    <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                                        <div className=" flex items-center gap-1">
                                            <CalendarRange className=" w-5 stroke-stone-600"/>
                                            <p>15/07/2024</p>
                                        </div>
                                        <div className=" flex items-center gap-1">
                                            <User className=" w-5 stroke-stone-600"/>
                                            <p>1Students</p>
                                        </div>
                                    </div>

                                    <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                                        <div>
                                            <div className=" flex items-center gap-1 pt-20 ">
                                                <User className=" stroke-green-600 w-4 "/>
                                                <p className=" text-[#E27447] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <p className=" font-bold font-[poppins] text-black text-lg py-6">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                        </div>

                                        <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                                            <div className=" flex items-center gap-1">
                                                <CalendarRange className=" w-5 stroke-stone-600"/>
                                                <p>15/07/2024</p>
                                            </div>
                                            <div className=" flex items-center gap-1">
                                                <User className=" w-5 stroke-stone-600"/>
                                                <p>1Students</p>
                                            </div>
                                        </div>
                                        <div className=' w-full'>
                                            <button className='py-5 font-bold text-white my-5 w-full' id='H-btn'>Get Newsletter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=" p- relative overflow-hidden group transition">
                                    <div className="">
                                        <img src={home_img3} alt="Home_image" className=" rounded-t-xl"/>
                                    </div>
                                    <div className="p-4 bg-white">
                                        <div className=" flex items-center justify-between ">
                                            <div className=" flex items-center gap-1">
                                                <User className=" stroke-green-600 w-4 "/>
                                                <p className=" text-[#E27447] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <h2 className=" font-bold text-green-600 text-xl font-[poppins]">$22</h2>
                                        </div>
                                        <p className=" font-bold font-[poppins] text-black text-lg py-3">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                    </div>
                                    <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                                        <div className=" flex items-center gap-1">
                                            <CalendarRange className=" w-5 stroke-stone-600"/>
                                            <p>15/07/2024</p>
                                        </div>
                                        <div className=" flex items-center gap-1">
                                            <User className=" w-5 stroke-stone-600"/>
                                            <p>1Students</p>
                                        </div>
                                    </div>

                                    <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                                        <div>
                                            <div className=" flex items-center gap-1 pt-20 ">
                                                <User className=" stroke-green-600 w-4 "/>
                                                <p className=" text-[#E27447] font-[poppins] font-bold text-sm ">Smit Samus</p>
                                            </div>
                                            <p className=" font-bold font-[poppins] text-black text-lg py-6">Innovative Leadership in <br /> Digital Age:Navigating <br /> Change & Driving Growth</p>
                                        </div>

                                        <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                                            <div className=" flex items-center gap-1">
                                                <CalendarRange className=" w-5 stroke-stone-600"/>
                                                <p>15/07/2024</p>
                                            </div>
                                            <div className=" flex items-center gap-1">
                                                <User className=" w-5 stroke-stone-600"/>
                                                <p>1Students</p>
                                            </div>
                                        </div>
                                        <div className=' w-full'>
                                            <button className='py-5 font-bold text-white my-5 w-full' id='H-btn'>Get Newsletter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <Counter/>

            </div>
        </div>
    </>
  )
}

export default Homepage