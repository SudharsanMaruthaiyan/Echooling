import { UpcomingCardApi } from "../../assets/Api/UpcomingCardApi"
import UpcomingEventCard from "./UpcomingEventCard/UpcomingEventCard"


const UpcomingEvent = () => {
  return (
    <>
        <div>
            <h3 className=" font-medium text-[#1363DF] bg-[#E7EFFC] px-3 py-2 rounded-md w-fit font-[poppins]">Featured Events</h3>
            <div className=" flex justify-between items-center flex-wrap">
                <div><h1 className=" font-bold text-[#082A5E] md:text-[36px] text-nowrap text-[29px] mt-3 font-[poppins]">Upcoming <span className="text-[#1363DF] font-[poppins]">Events</span></h1></div>
                <div><h1 className=" font-bold text-[#1363DF] py-3 px-5 border-2 border-[#1363DF] hover:bg-[#1363DF] hover:text-white transition-colors rounded-md md:mt-0 mt-5 font-[poppins]">OUR ALL EVENTS</h1></div>
            </div> 

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                {
                    UpcomingCardApi.map((e,index)=>{
                        return(
                            <>
                                <div key={index}>
                                    <UpcomingEventCard image={e.image} date={e.date} desc={e.desc} location={e.location}/>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    </>
  )
}

export default UpcomingEvent