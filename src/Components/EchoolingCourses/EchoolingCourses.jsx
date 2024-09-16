import {EchoolingCourseCardApi } from "../../assets/Api/EchoolingCourseCard"
import EchoolingCoursesCard from "../EchoolingCoursesCard/EchoolingCoursesCard"
import LiveClasses from "../LiveClasses/LiveClasses"
import Mentor from "../Mentor/Mentor"
import SearchNav from "../SearchNav/SearchNav"
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent"

const EchoolingCourses = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className="w-[90%] mx-auto">
                <SearchNav/>
                <div className=" relative">
                    <div className=" text-center bg-[#F2F4F9] pt-20 pb-60 my-20 rounded-xl">
                        <h5 className=" text-center font-bold text-red-600 py-2">Echooling available courses</h5>
                        <h1 className=" font-bold text-[35px] md:text-[44px] md:leading-tight leading-normal text-wrap px-12">Online Coaching Lessons For <br className=" md:block hidden"/>
                        Remote Learning</h1>
                    </div>
                    <div className=" px-5 lg:px-[100px] absolute top-[320px] md:top-[270px]">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                EchoolingCourseCardApi.map((e,index)=>{
                                    return(
                                        <>
                                            <div key={index}>
                                                <EchoolingCoursesCard icon={e.icon} title={e.title} desc={e.desc} learnmore={e.learnmore} />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
                <div className=" mt-[900px] md:mt-[600px] lg:mt-52">
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