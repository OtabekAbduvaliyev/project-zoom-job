import { RightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'
import PopularUsers from './PoppularUsers'
import Power from '../Components/Power'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'

const Home = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-y-[20px]">
                        <h1 class="sm:leading-[65px] title-font sm:text-[60px] text-3xl font-[600] mb-4 font-medium text-black">Enhance workplace
                            <br class="hidden lg:inline-block" /><span className='text-[#0b5cff]'> communication</span> <br /> with AI
                        </h1>
                        <p class="mb-8 text-[20px] text-black tracking-[1px] font-[500] leading-relaxed">Streamline communication, increase employee <br /> engagement, and improve productivity with Zoom <br /> Workplace; fueled by Zoom AI companion, included <br /> at no additional cost.*</p>
                        <div class="flex justify-center gap-[10px]">
                            <Link to='pricing'>
                                <button class="bg-[#007aff] py-[10px] px-[25px] rounded-[25px] text-white text-[18px] font-[500]">Plans & Pricing</button>
                            </Link>
                            <button class="bg-white py-[8px] px-[20px] hover:border border-1 border-[#007aff] rounded-[25px] text-[#007aff] text-[18px] font-[500] ">Discover Zoom Workplace <RightOutlined className='ml-[10px] text-[20px]' /></button>
                        </div>
                    </div>
                    <div >
                        <div className="imgContainerOne float-right lg:mt-[-300px] flex  gap-[10px]">
                            <div className="imgSecondSt pt-[320px] absolute w-[400px] ml-[-350px] ">
                                <img src="https://file-paa.zoomdev.us/HJC2gkd_QG6LHXyDnt8Kvg/MS4yLkT_u9SemKhQEGVmKe3dSZdChdvHiHLmjC3heKCXvL8Q/3c858ec7-70dd-4e4b-8e7d-688339230f70.png" alt="" />
                            </div>
                            <div className="imgFirstSt max-w-[300px] pt-[220px] w-[100%]">
                                <img src='https://file-paa.zoomdev.us/S2QcYB97S-S8bMxEFUUiJw/MS4yLphjYfJ01VAwdg9VSmc2eLiy8wP-8vFccJ9WZTB17d4-/46156914-144d-44f7-b4f3-57a411e9ed58.jpg' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Products />
            <PopularUsers />
            <Power />
            <Slider />
            <section className='bg-[#007aff] mt-[100px] py-[100px]'>
                <div className="areready">
                    <h1 className='text-center text-[40px] font-[700] text-white'>Ready to get started?</h1>
                    <div class="flex justify-center gap-[20px] mt-[30px]">
                        <Link to='pricing'>
                            <button class="bg-[#00ede7] py-[10px] px-[25px] rounded-[25px] text-white text-[18px] font-[500]">Sign Up. It's Free</button>
                        </Link>
                        <Link to='pricing'>
                            <button class="border py-[8px] px-[20px] hover:border border-1 border-white rounded-[25px] text-white text-[18px] font-[500] ">Pricng & Plans<RightOutlined className='ml-[10px] text-[20px]' /></button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home