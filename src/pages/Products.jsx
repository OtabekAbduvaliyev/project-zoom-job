import { CalendarOutlined, DingdingOutlined, DotChartOutlined, FundProjectionScreenOutlined, HeartOutlined, PhoneOutlined, PullRequestOutlined, ScheduleOutlined, VideoCameraOutlined, WechatOutlined, } from '@ant-design/icons'
import React from 'react'

const Products = () => {
    return (
        <div className='flex bg'>
            <div className="first-row">
                <div className="zoomLogo">
                    <img className="w-[320px]" src="https://seeklogo.com/images/Z/zoom-white-logo-D870259EEF-seeklogo.com.png" alt="" />
                </div>
                <div className="sliderLinks bg-[#00031f] w-[320px]">
                    <div className="heading p-[40px]">
                        <h2 className='text-white text-[28px] font-[700]'>One platform for limitless human connection</h2>
                    </div>
                    <div className="buttons flex flex-col text-white pl-[40px] gap-y-[20px] pb-[90px]">
                        <div>
                            <button className='border rounded-3xl py-[5px] px-[20px] text-[20px] font-[500]'>Zoom Workplace</button>
                        </div>
                        <div>
                            <button className='border rounded-3xl py-[5px] px-[20px] text-[20px] font-[500]'>Zoom AI</button>
                        </div>
                        <div>
                            <button className='border rounded-3xl py-[5px] px-[20px] text-[20px] font-[500]'>Business Service</button>
                        </div>
                        <div>
                            <button className='border rounded-3xl py-[5px] px-[20px] text-[20px] font-[500]'>Developer eco sysytem</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondRow">
                <section class="text-gray-600 body-font">
                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div class="lg:max-w-lg md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded" alt="hero" src="https://st3.zoom.us/static/6.3.21666/image/home2/core_communication.png" />
                        </div>
                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 class="title-font font-medium text-black text-[42px]"><span className='text-[52px] font-[700] text-[#007aff]'>Zoom</span> Workplace
                            </h1>
                            <p class="mb-8 leading-relaxed text-[18px] font-[500]">Make teamwork more meaningful across hybrid teams with modern collaboration solutions.</p>
                            <div className="prsections flex gap-[40px]">
                                <div className="firstSec flex flex-col gap-y-[8px]">
                                    <div className="mettings flex items-center gap-[10px]">
                                        <VideoCameraOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Meetings</p></a>
                                    </div>
                                    <div className="teamChat flex items-center gap-[10px]">
                                        <WechatOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Team Chat</p></a>
                                    </div>
                                    <div className="phone flex items-center gap-[10px]">
                                        <PhoneOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Phone</p></a>
                                    </div>
                                    <div className="mailAndCalnedar flex items-center gap-[10px]">
                                        <CalendarOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Mail & Calendar</p></a>
                                    </div>
                                    <div className="schedular flex items-center gap-[10px]">
                                        <ScheduleOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Schedular</p></a>
                                    </div>
                                </div>
                                <div className="firstSec flex flex-col gap-y-[8px]">
                                    <div className="mettings flex items-center gap-[10px]">
                                        <DingdingOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Productivity</p></a>
                                    </div>
                                    <div className="teamChat flex items-center gap-[10px]">
                                    <HeartOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Employee Engagement</p></a>
                                    </div>
                                    <div className="phone flex items-center gap-[10px]">
                                    <FundProjectionScreenOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Flexible Workspaces</p></a>
                                    </div>
                                    <div className="mailAndCalnedar flex items-center gap-[10px]">
                                    <DotChartOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>Workvivo</p></a>
                                    </div>
                                    <div className="schedular flex items-center gap-[10px]">
                                    <PullRequestOutlined className='text-[20px] bg-[#007aff] p-[8px] rounded-xl text-[white]' />
                                        <a href="https://zoom.us/"><p className='text-[17px] text-[#007aff] font-[500]'>App Marketplace</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Products