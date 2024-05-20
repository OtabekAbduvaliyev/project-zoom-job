import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWordpressSimple, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='w-[100%]  bg-[#39394d] p-[40px] text-[#fff] '>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='w-[20%] flex flex-col'>
            <span>
              <Link
                className="text-[20px] font-semibold hover:underline text-[#fff] mb-[10px]"
                to={"https://explore.zoom.us/en/about/"}
              >
                About
              </Link>
            </span>
            <span>
              <Link
                to={"https://blog.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Zoom Blog</Link>
            </span>
            <span>
              <Link
                to={"https://explore.zoom.us/en/customer/all/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Customers</Link>
            </span>
            <span>
              <Link
                to={"https://explore.zoom.us/en/team/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Our Team</Link>
            </span>
            <span>
              <Link
                to={"https://careers.zoom.us/home"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Careers</Link>
            </span>
            <span>
              <Link
                to={"https://marketplace.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Integrations</Link>
            </span>
            <span>
              <Link
                to={"https://partner.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Partners</Link>
            </span>
            <span>
              <Link
                to={"https://investors.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Investors</Link>
            </span>
            <span>
              <Link
                to={"https://news.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Press</Link>
            </span>
            <span>
              <Link
                to={"https://explore.zoom.us/en/zoom-esg/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Sustainability & ESG</Link>
            </span>
            <span>
              <Link
                to={"https://zoomcares.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Zoom Cares</Link>
            </span>
            <span>
              <Link
                to={"https://explore.zoom.us/en/media-kit/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Media Kit</Link>
            </span>
            <span>
              <Link
                to={"https://learn-zoom.us/show-me"}
                className='text-[16px] font-medium hover:underline my-[2px]'>How to Videos</Link>
            </span>
            <span>
              <Link
                to={"https://developers.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Developer Platform</Link>
            </span>
            <span>
              <Link
                to={"https://explore.zoom.us/en/zoom-ventures/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Zoom Ventures</Link>
            </span>
            <span>
              <Link
                to={"https://shophappy.zoom.us/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Zoom Merchandise Store</Link>
            </span>
          </div>


          <div className='flex flex-col'>
            <span>
              <Link
                to={"https://zoom.us/download"}
                className="text-[20px] font-semibold hover:underline text-[#fff] mb-[10px]"
              >
                Download
              </Link>
            </span>
            <span>
              <Link
                to={"https://zoom.us/download#client_4meeting"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Zoom app</Link>
            </span>
            <span>
              <Link
                to={"https://zoom.us/download#chrome_ext"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Browser Extension</Link>
            </span>
            <span>
              <Link
                to={"https://zoom.us/download#client_iphone"}
                className='text-[16px] font-medium hover:underline my-[2px]'>iPhone/iPad App</Link>
            </span>
            <span>
              <Link
                to={"https://zoom.us/download#mobile_app"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Android App</Link>
            </span>
            <span>
              <Link
                to={"https://explore.zoom.us/en/virtual-backgrounds/"}
                className='text-[16px] font-medium hover:underline my-[2px]'>Zoom Virtual Backgrounds</Link>
            </span>
          </div>


          <div className='w-[20%] flex flex-col'>
            <span>
              <Link className='text-[20px] font-semibold hover:underline text-[#fff] mb-[10px]' to={"https://explore.zoom.us/en/contactsales/"}>Sales</Link>
            </span>
            <span>
              <Link className='text-[16px] font-medium my-[2px]' to={"tel:1.888.799.9666"}>1.888.799.9666</Link>
            </span>
            <span>
              <Link className='text-[16px] font-medium hover:underline my-[2px]' to={"https://explore.zoom.us/en/contactsales/"}>Contact Sales</Link>
            </span>
            <span>
              <Link className='text-[16px] font-medium hover:underline my-[2px]' to={"https://zoom.us/pricing"}>Plans & Pricing</Link>
            </span>
            <span>
              <Link className='text-[16px] font-medium hover:underline my-[2px]' to={"https://explore.zoom.us/en/livedemo/"}>Request a Demo</Link>
            </span>
            <span>
              <Link className='text-[16px] font-medium hover:underline my-[2px]' to={"https://zoom.us/events"}>Webinars and Events</Link>
            </span>
          </div>


          <div className='w-[20%] flex flex-col'>
            <span>
              <Link to={"https://support.zoom.com/hc/en"} className='text-[20px] font-semibold hover:underline text-[#fff] mb-[10px]'>Support</Link>
            </span>
            <span>
              <Link to={"https://zoom.us/test"} className='text-[16px] font-medium hover:underline my-[2px]'>Test Zoom</Link>
            </span>
            <span>
              <Link to={"https://zoom.us/account"} className='text-[16px] font-medium hover:underline my-[2px]'>Account</Link>
            </span>
            <span>
              <Link to={"https://support.zoom.com/hc/en"} className='text-[16px] font-medium hover:underline my-[2px]'>Support Center</Link>
            </span>
            <span>
              <Link to={"https://learning.zoom.us/learn"} className='text-[16px] font-medium hover:underline my-[2px]'>Learning Center</Link>
            </span>
            <span>
              <Link to={"https://community.zoom.com/"} className='text-[16px] font-medium hover:underline my-[2px]'>Zoom Community</Link>
            </span>
            <span>
              <Link to={"https://explore.zoom.us/en/contact"} className='text-[16px] font-medium hover:underline my-[2px]'>Contact Us</Link>
            </span>
            <span>
              <Link to={"https://explore.zoom.us/en/accessibility/"} className='text-[16px] font-medium hover:underline my-[2px]'>Accessibility</Link>
            </span>
            <span>
              <Link to={"https://devsupport.zoom.us/hc/en-us"} className='text-[16px] font-medium hover:underline my-[2px]'>Developer support</Link>
            </span>
            <span>
              <Link to={"https://explore.zoom.us/en/trust/legal-compliance/"} className='text-[16px] font-medium hover:underline my-[2px]'>Privacy, Security, Legal Policies, and Modern Slavery Act Transparency Statement</Link>
            </span>
          </div>


          <div className='w-[28%] flex flex-col'>
            <div className='mb-[20px]'>
              <h4 className='text-[20px] font-semibold text-[#fff] mb-[10px]'>Language</h4>
              <select className='bg-[#39394d] border-[1px] border-[rgba(255, 255, 255, .1)] hover:underline hover:cursor-pointer px-[10px] py-[6px] w-[120px] rounded-[6px]'>
                <option value="English">English</option>
                <option value="Español">Español</option>
                <option value="Deutsch">Deutsch</option>
                <option value="简体中文">简体中文</option>
                <option value="繁體中文">繁體中文</option>
                <option value="Français">Français</option>
                <option value="Português">Português</option>
                <option value="日本語">日本語</option>
                <option value="Русский">Русский</option>
                <option value="한국어">한국어</option>
                <option value="Italiano">Italiano</option>
                <option value="Tiếng Việt">Tiếng Việt</option>
                <option value="Polski">Polski</option>
                <option value="Türkçe">Türkçe</option>
                <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                <option value="Nederlands">Nederlands</option>
                <option value="Svenska">Svenska</option>
              </select>
            </div>
            <div className='mt-[20px]'>
              <h4 className='text-[20px] font-semibold text-[#fff] mb-[10px]'>Currency</h4>
              <select className='bg-[#39394d] border-[1px] border-[rgba(255, 255, 255, .1)] hover:underline hover:cursor-pointer px-[10px] py-[6px] w-[120px] rounded-[6px]'>
                <option value="US Dollars $ ">US Dollars $ </option>
              </select>
              <div className='w-[260px] flex justify-evenly my-[16px]'>
                <Link to={"https://blog.zoom.us/"}>
                  <div
                    className='hover:bg-[#028CB0] bg-[#26275A] p-[10px] rounded-full cursor-pointer'>
                    <FaWordpressSimple size={18} color='#fff' />
                  </div>
                </Link>
                <Link to={"https://www.linkedin.com/company/zoom-video-communications/"}>
                  <div
                    className='hover:bg-[#1275B1] bg-[#26275A] p-[10px] rounded-full cursor-pointer'>
                    <FaLinkedinIn size={18} color='#fff' />
                  </div>
                </Link>
                <Link to={"https://twitter.com/zoom"}>
                  <div
                    className='hover:bg-[#00A1F5] bg-[#26275A] p-[10px] rounded-full cursor-pointer'>
                    <FaXTwitter size={18} color='#fff' />
                  </div>
                </Link>
                <Link to={"https://www.youtube.com/zoommeetings"}>
                  <div
                    className='hover:bg-[#FC0D1B] bg-[#26275A] p-[10px] rounded-full cursor-pointer'>
                    <FaYoutube size={18} color='#fff' />
                  </div>
                </Link>
                <Link to={"https://www.facebook.com/zoom"}>
                  <div
                    className='hover:bg-[#3C5A99] bg-[#26275A] p-[10px] rounded-full cursor-pointer'>
                    <FaFacebookF size={18} color='#fff' />
                  </div>
                </Link>
                <Link to={"https://www.instagram.com/zoom/"}>
                  <div
                    className='hover:bg-[#002C53] bg-[#26275A] p-[10px] rounded-full cursor-pointer'>
                    <FaInstagram size={18} color='#fff' />
                  </div>
                </Link>
              </div>
            </div>
          </div>


        </div>


        <div className='text-center mt-[60px]'>
          <p>Copyright ©2024 Zoom Video Communications, Inc. All rights reserved. {" "}
            <Link className='hover:underline' to={"https://explore.zoom.us/en/terms/"}>Terms</Link> {" "} | {" "}
            <Link className='hover:underline' to={"https://explore.zoom.us/en/privacy/"}>
              Privacy
            </Link>{" "} | {" "}
            <Link className='hover:underline' to={"https://explore.zoom.us/en/trust/"}>
              Trust Center
            </Link>{" "} | {" "}
            <Link className='hover:underline' to={"https://explore.zoom.us/en/acceptable-use-guidelines/"}>
              Acceptable Use Guidelines
            </Link>{" "} | {" "}
            <Link className='hover:underline' to={"https://explore.zoom.us/en/trust/legal-compliance/"}>
              Legal & Compliance
            </Link>{" "}
          </p>
        </div>


      </div>
    </div>
  )
}

export default Footer