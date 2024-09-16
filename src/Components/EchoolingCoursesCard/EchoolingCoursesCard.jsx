import { ArrowRight } from "lucide-react"


const EchoolingCoursesCard = ({icon,title, desc, learnmore}) => {
  return (
    <>
        <div className=" px-6 py-10 bg-[#FFFFFF] shadow-lg rounded-xl">
            <div>
                <img src={icon} alt="Icon1" />
            </div>
            <h1 className=" font-bold text-xl pt-10">{title}</h1>
            <p className=" text-slate-600 py-3">{desc}</p>
            <div className=" flex items-center gap-2 group">
                <button className=" font-bold hover:text-[#3270FC] transition-colors">{learnmore}</button>
                <ArrowRight className=" w-5 group-hover:text-[#3270FC] transition-colors mt-1"/>
            </div>
        </div>
    </>
  )
}

export default EchoolingCoursesCard