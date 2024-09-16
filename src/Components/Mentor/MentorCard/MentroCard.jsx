import { Star,UsersRound,Share2, Linkedin, Twitter, FacebookIcon } from "lucide-react"

const MentroCard = ({mentor,domain , name, student, rating }) => {
  return (
    <>
      <div className=" bg-white rounded-lg pt-10 border-2 hover:shadow-2xl hover:scale-105 transition-all ">
        <div className=" flex flex-col items-center justify-center pb-4">
          <div className=" relative w-fit ">
            <img src={mentor} alt="Mentor-image" className=" " />
            <div className=" group ">
              <Share2 className=" absolute -right-4 top-[40%] bg-[#1363DF] p-2 rounded-full stroke-white w-10 h-10 "/>
              <Linkedin className=" absolute top-[40%] group-hover:right-[25px] -right-4 transition-all bg-[#1363DF] p-2 rounded-full stroke-white w-10 h-10 hover:bg-white hover:fill-[#1363DF]"/>
              <Twitter className=" absolute top-[40%] group-hover:right-[66px] -right-4 transition-all bg-[#1363DF] p-2 rounded-full stroke-white w-10 h-10 hover:bg-white hover:fill-[#1363DF]"/>
              <FacebookIcon className=" absolute top-[40%] group-hover:right-[110px] -right-4 transition-all bg-[#1363DF] p-2 rounded-full stroke-white w-10 h-10 hover:bg-white hover:fill-[#1363DF]"/>
            </div>
          </div>
          <h1 className=" text-[#082a5e] font-bold text-xl pt-3 font-[poppins]">{name}</h1>
          <p className=" text-slate-600 font-[poppins] text-sm">{domain}</p>
        </div>
        <div className=" flex justify-between py-4 px-5 border-t-2 rounded-b-lg">
          <div className=" flex gap-1">
            <UsersRound className=" w-5 stroke-slate-600"/>
            <p className=" font-medium text-slate-600 font-[poppins]">{student}</p>
          </div>
          <div className=" flex gap-1">
            <Star className=" w-5 fill-[#F8BC24] stroke-[#F8BC24]"/>
            <p className=" font-[poppins]">{rating}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MentroCard