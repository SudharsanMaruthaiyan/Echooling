import { MentorCardApi } from "../../assets/Api/MentorCardApi"
import MentroCard from "./MentorCard/MentroCard"


const Mentor = () => {
  return (
    <>
        <div>
            <h3 className=" font-medium text-[#1363DF] bg-[#E7EFFC] uppercase px-3 py-2 rounded-md w-fit">Our Qualified People Matter</h3>
            <div className=" flex justify-between items-center flex-wrap">
                <div><h1 className=" font-bold text-[#082A5E] md:text-[36px] text-nowrap text-[29px] font-[poppins] uppercase mt-3">Top <span className="text-[#1363DF]">Class</span> Mentors</h1></div>
                <div><h1 className=" font-bold text-[#1363DF] py-3 px-5 border-2 border-[#1363DF] font-[poppins] hover:bg-[#1363DF] hover:text-white transition-colors rounded-md md:mt-0 mt-5">ALL INSTRUCTOR</h1></div>
            </div> 

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
                {
                    MentorCardApi.map((e,index)=>{
                        return(
                            <>
                                <div key={index}>
                                    <MentroCard mentor={e.mentor} domain={e.domain} name={e.name} student={e.student} rating={e.rating}/>
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

export default Mentor