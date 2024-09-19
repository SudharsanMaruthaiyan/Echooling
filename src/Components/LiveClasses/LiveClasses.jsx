import LiveVideo from "./LiveVideo/LiveVideo"

const LiveClasses = () => {
  return (
    <>
        <div>
            <div className=" text-center bg-[#F2F4F9] pt-20 my-20 rounded-xl">
                <h5 className=" text-center font-bold text-[#014bae] py-2 font-[poppins]">Live Class</h5>
                <h1 className=" font-bold text-[35px] md:text-[40px] md:leading-tight leading-normal text-wrap px-12 font-[poppins] uppercase">High quality video,audio <br className=" md:block hidden"/>
                & live class</h1>
                <div className=" py-10">
                    <LiveVideo/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LiveClasses