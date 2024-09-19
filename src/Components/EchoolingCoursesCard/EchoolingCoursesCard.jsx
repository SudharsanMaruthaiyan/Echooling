import { ArrowRight } from "lucide-react"


const EchoolingCoursesCard = ({icon,title, desc, learnmore}) => {
  return (
    <>
        <div className=" w-[90%] mx-auto py-5">
          <div className=" px-6 py-10 bg-[#FFFFFF] shadow-lg rounded-xl hover:scale-105 transition">
            <div>
                <img src={icon} alt="Icon1" />
            </div>
            <h1 className=" font-bold text-xl pt-10  font-[poppins]">{title}</h1>
            <p className=" text-slate-600 py-3 text-sm font-[poppins]">{desc}</p>
            <div className=" flex items-center gap-2 group">
                <button className=" font-bold hover:text-[#3270FC] transition-colors  font-[poppins]">{learnmore}</button>
                <ArrowRight className=" w-5 group-hover:text-[#3270FC] transition-colors mt-1"/>
            </div>
          </div>
        </div>
    </>
  )
}

export default EchoolingCoursesCard