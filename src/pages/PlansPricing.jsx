import { collection, onSnapshot } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Firebase/firebase'
import { FaQuoteLeft } from "react-icons/fa";
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
const PlansPricing = () => {
  const [pricingItems, setPricingItems] = useState([])
  const dbPricingItems = collection(db, 'pricingzoom')
  onSnapshot(
    dbPricingItems,
    (snapshot) => {
      let defpricingItemsList = []
      snapshot.docs.forEach((doc) => {
        defpricingItemsList.push({ id: doc.id, ...doc.data() })
      })
      setPricingItems(defpricingItemsList)
    }
  ), (err) => {
    console.log(err);
  }
  const toZoom = () => {
    window.location.href = 'https://zoom.us/pricing'
  }
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="m-auto">
          <div class="flex flex-col text-center mb-20 bg-[#00053d] py-[50px]">
            <h1 class="sm:text-[55px] font-[500] text-3xl title-font mb-2 text-white">Plans & Pricing for <span className='text-[#00f0ea]'>Business</span></h1>
            <div class="flex mx-auto mt-[50px] gap-[20px]">
              <button onClick={toZoom} class="py-1 px-4 rounded-[20px] text-[18px] bg-indigo-500 text-white focus:outline-none">Work Place</button>
              <button onClick={toZoom} class="py-1 px-4 rounded-[20px] text-[18px] border border-1 text-white focus:outline-none">Phone</button>
              <button onClick={toZoom} class="py-1 px-4 rounded-[20px] text-[18px] border border-1 text-white focus:outline-none">Events & Webinars</button>
              <button onClick={toZoom} class="py-1 px-4 rounded-[20px] text-[18px] border border-1 text-white focus:outline-none">Rooms</button>
              <button onClick={toZoom} class="py-1 px-4 rounded-[20px] text-[18px] border border-1 text-white focus:outline-none">Contact center</button>
            </div>
          </div>
          <div class="flex flex-wrap -m-4 px-5 ">
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                <h1 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-600 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$38</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-600 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$56</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-600 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 class="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
                <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$72</span>
                  <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p class="flex items-center text-gray-600 mb-6">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font overflow-hidden border-t border-gray-200 shadow-2xl">
        <h1 className='text-center mt-[80px] text-[34px] font-[700]'>Compare all Features</h1>
        <div class="container px-5 py-14 mt-[24px] mx-auto flex flex-wrap shadow-[0_35px_70px_5px_rgba(0,0,0,0.3)] rounded-[20px]">
          <div class="lg:w-1/4 mt-48 hidden lg:block">
            <div class="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
              <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start -mt-px">Fingerstache disrupt</p>
              <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Franzen hashtag</p>
              <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Tilde art party</p>
              <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Banh mi cornhole</p>
              <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Waistcoat squid hexagon</p>
              <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Pinterest occupy authentic</p>
              <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Brooklyn helvetica</p>
              <p class="text-gray-900 h-12 text-center px-4 flex items-center justify-start">Long Feature Two</p>
              <p class="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">Feature One</p>
            </div>
          </div>
          <div class="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
            <div class="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 class="tracking-widest">START</h3>
                <h2 class="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">Free</h2>
                <span class="text-sm text-gray-600">Next 3 months</span>
              </div>
              <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Schlitz single-origin</p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center">Feature</p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div class="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
              <span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
              <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 class="tracking-widest">PRO</h3>
                <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$38
                  <span class="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span class="text-sm text-gray-600">Charging $456 per year</span>
              </div>
              <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Schlitz single-origin</p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">Feature</p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div class="p-6 text-center border-t border-gray-300">
                <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div class="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
              <div class="px-2 text-center h-48 flex flex-col items-center justify-center">
                <h3 class="tracking-widest">BUSINESS</h3>
                <h2 class="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4 mt-2">$54
                  <span class="text-gray-600 text-base ml-1">/mo</span>
                </h2>
                <span class="text-sm text-gray-600">Charging $648 per year</span>
              </div>
              <p class="bg-gray-100 text-gray-600 h-12 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">Schlitz single-origin</p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="h-12 text-gray-600 text-center leading-relaxed flex items-center justify-center">Feature</p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <span class="w-5 h-5 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
              </p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <p class="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12"></path>
                </svg>
              </p>
              <div class="p-6 text-center border-t border-gray-300">
                <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-[1300px] px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-[40px] text-2xl font-[700] title-font text-gray-900">Enhance your Zoom Workplace experience</h1>
          </div>
          <div class="flex flex-wrap -m-4 gap-[10px]">
            {pricingItems.map((item, index) => (
              <div class="-p-4 w-[419px]" key={index}>
                <div class="flex rounded-lg h-full bg-white shadow-2xl p-8 flex-col">
                  <div class="flex items-center mb-3 gap-[20px]">
                    <div >
                      <img src={item.img} alt="" className='w-[50px]' />
                    </div>
                    <div className="divbek">
                      <h1 class="text-gray-900 text-[22px] title-font font-[600]">{item.title}</h1>
                      <p className='text-[16px] font-[500] text-black'>From {item.price}/month</p>
                    </div>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">{item.desc}</p>
                    <div className="buttons flex gap-[10px] items-center float-right mt-[20px]">
                      <button className=' px-[18px] py-[7px] rounded-3xl border-[#0b5cff] text-[18px] text-[#0b5cff] font-[500]'>Learn More</button>
                      <button className='px-[28px] py-[8px] rounded-3xl bg-[#0b5cff] text-[18px] text-[white] font-[500]'>Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-[20px]">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  mb-10 md:mb-0 rounded-3xl">
            <img class="object-cover object-center rounded-2xl h-[425px]" alt="hero" src="https://img.freepik.com/free-photo/remote-meeting-man-working-from-home-during-coronavirus-covid-19-quarantine-remote-office-concept_155003-12356.jpg" />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg-[#00031f] py-[65.5px] rounded-2xl">
            <p class="mb-8 leading-relaxed text-[20px] text-white font-[700]">
              <span className='text-[22px]'><FaQuoteLeft /></span><br />
              I never get asked about how to use Zoom - people <br /> just get accounts and I never hear from them again, <br /> all I see is the usage on the dashboard go up <br /> continuously. <br />
              <span className='text-[12px] font-serif'>GREG MARTIN, DIRECTOR OF NASDAQ</span></p>
            <div class="flex justify-center">
              <button className='px-[28px] py-[8px] rounded-3xl bg-[#0b5cff] text-[18px] text-[white] font-[500]'>See More Stories</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="dealers flex items-center max-w-[900px] m-auto gap-[100px]">
          <img src="https://logos-world.net/wp-content/uploads/2020/10/Dropbox-Logo.png" alt="" className='w-[150px]'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Okta_logo.svg/2560px-Okta_logo.svg.png" alt="" className='w-[150px]'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" alt="" className='w-[150px]'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png" alt="" className='w-[150px]'/>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  )
}

export default PlansPricing