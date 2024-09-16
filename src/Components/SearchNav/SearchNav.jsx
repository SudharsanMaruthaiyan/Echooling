import React from 'react'
import { logo } from '../../assets/Api/Image'
import { Facebook, Linkedin, X, Youtube } from 'lucide-react'

const SearchNav = () => {
  return (
    <>
        <div className=' py-10 lg:w-[90%] w-[90%] mx-auto shadow-xl rounded-xl mt-5'>
            <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-11 items-center px-10'>
                <div className=' justify-start lg:justify-start items-center flex lg:pb-0 pb-5 col-span-3'>
                    <img src={logo} alt="Search-Logo" width={200}/> 
                </div>
                <div className=' col-span-8 lg:mt-0 mt-5'>
                    <div className=' grid md:grid-cols-7 grid-cols-1 md:gap-5 lg:gap-0'>
                        <div className=' relative col-span-5 '>
                            <input type="text" placeholder=' Enter Your Mail' className=' pl-3  placeholder:font-normal py-5 rounded-lg focus:outline-[#674CEF]  outline-[#674CEF] shadow-sm shadow-black w-full'/>
                            <div className='md:absolute top-0 right-0'>
                                <button className='py-5 px-7 font-bold text-white  md:my-0 my-5' id='s-btn'>Get Newsletter</button>
                            </div>
                        </div>
                        <div className=' flex items-center lg:justify-end md:justify-end py-5 col-span-2'>
                            <Facebook className=' border-r-2 pr-5 w-10'/>
                            <X className=' border-r-2 px-3 w-11'/>
                            <Linkedin className=' border-r-2 px-3 w-11'/>
                            <Youtube className=' px-3 w-12'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchNav