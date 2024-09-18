import CounterCard from "./CounterCard/CounterCard"
const data = [
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/user.png?updatedAt=1726678314884",
      count: 120,
      label: "Our Happy Students",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/graduation-cap.png?updatedAt=1726678314723",
      count: 17,
      label: "Enrolled Learners",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/speech.png?updatedAt=1726678314767",
      count: 70,
      label: "Expert Instructor",
    },
    {
      imageUrl:
        "https://ik.imagekit.io/jjyo3gsee/Echooling/thumbs-up.png?updatedAt=1726678314880",
      count: 98 ,
      label: "Satisfaction Rate",
    },
  ];
const Counter = () => {
  return (
    <>
        <div>
            <div className=" flex justify-center items-center gap-12 my-20">
                <span className=" w-20 h-[3px] bg-blue-600 lg:block hidden"></span>
                <h1 className=" font-[poppins] text-2xl font-bold text-center">Trusted by <span className=" text-[#0D5FF9]">Companies</span> Achievements</h1>
                <span className=" w-20 h-[3px] bg-blue-600 lg:block hidden"></span>
            </div>
            <div>
                <CounterCard data={data}/>
            </div>
        </div>
    </>
  )
}

export default Counter