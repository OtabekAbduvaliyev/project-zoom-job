import { CalendarOutlined, DingdingOutlined, DotChartOutlined, FundProjectionScreenOutlined, HeartOutlined, PhoneOutlined, PullRequestOutlined, ScheduleOutlined, VideoCameraOutlined, WechatOutlined, } from '@ant-design/icons'
import React, { useState } from 'react'
import { ZoomAI, ZoomWorkplace, BusinessService, DeveloperEcoSystem } from '../Components/ZoomTypesSort/TypeSort'
const Products = () => {
    const [compos, setCompos] = useState(<ZoomWorkplace />)
    const [activeIndex, setActiveIndex] = useState(null);
    const items = [
        {
            text: 'Zoom Workplace',
            func: () => setCompos(<ZoomWorkplace />)
        },
        {
            text: 'Zoom AI',
            func: () => setCompos(<ZoomAI />)
        },
        {
            text: 'Business Service',
            func: () => setCompos(<BusinessService />)
        }
        , {
            text: 'Developer Eco System',
            func: () => setCompos(<DeveloperEcoSystem />)
        },
    ]
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
                        {items.map((item, index) => {
                            return (
                                <div key={index}
                                    onClick={() => {
                                        try {
                                            item.func();
                                            setActiveIndex(index);
                                        } catch (error) {
                                            console.error('An error occurred:', error);
                                        }
                                    }}
                                    >
                                    <div>
                            <button className='border rounded-3xl py-[5px] px-[20px] text-[20px] font-[500]'>{item.text}</button>
                        </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
            <div className="secondRow">
                {compos}
            </div>
        </div>
    )
}

export default Products