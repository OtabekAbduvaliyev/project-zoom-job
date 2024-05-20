import React from 'react'

export const DefaultComp = () => {
  return (
    <div className='text-[#00053d] w-[100%] h-[85vh] mx-auto my-[20px] flex flex-col justify-evenly px-[40px] py-[50px]'>
      <h2 className='text-[40px] leading-10'>
        Powering organizations across industries and geographies
      </h2>
      <h4 className='text-[24px] leading-7'>
        Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.
      </h4>
      <button className='w-[256px] py-[10px] px-[14px] bg-[#00ede7] hover:bg-[#00caee] text-[16px] rounded-full'>Explore Industry Solutions</button>
    </div>
  )
}

export const Education = () => {
  return (
    <div className="relative flex bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ width: '812px', height: '490px' }}>
      <div className="w-1/2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fisrt-project-f285e.appspot.com/o/industry1.jpg?alt=media&token=441d8a45-1803-4c06-bf5c-186fb97c6339" // Replace with the actual image URL
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-6 flex flex-col justify-center relative"> {/* Added relative positioning */}
        <h2 className="text-3xl font-bold mb-4 mt-[-100px]">
          Because learning happens everywhere
        </h2>
        <p className="font-[500] text-[18px] mb-4 mt-4">
          Design remote and hybrid learning environments, empower teachers and
          students, and create more equitable educational opportunities.
        </p>
        <a target='_blank' href="https://zoom.us/">

          <button
            className="mt-4 rounded-3xl w-[200px] inline-block bg-white text-[#0b5cff] font-semibold py-2 rounded hover:bg-[#0b5cff] hover:border-white hover:text-white transition-colors duration-300 mb-4 border border-1 border-[#0b5cff]"
          >
            Zoom for Education
          </button>
        </a>
        <div className="absolute bottom-0 right-0 "> {/* Positioned at bottom right corner */}
          <div className="bg-[#00053d] font-bold text-xl p-4 flex items-center"> {/* Changed to rounded-full */}
            <div className="flex items-center justify-center w-[120px] h-[76px] border-2 border-[#b5d0f8] rounded-full mr-4"> {/* Increased size of the circle */}
              <span className='text-[30px] spanText text-[#b5d0f8]'>89</span>
            </div>
            <span className="text-white">of the Top 100 global universities choose Zoom</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Services = () => {
  return (
    <div className="relative flex bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ width: '812px', height: '490px' }}>
      <div className="w-1/2">
        <img
          src="https://st1.zoom.us/static/6.3.21666/image/home2/industry2.jpg" // Replace with the actual image URL
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-6 flex flex-col justify-center relative"> {/* Added relative positioning */}
        <h2 className="text-3xl font-bold mb-4 mt-[-100px]">
          Trusted solutions for the finance sector              </h2>
        <p className="font-[500] text-[18px] mb-4 mt-4">
          Secure communications and collaboration technology designed for a complex regulatory landscape.
        </p>
        <a target='_blank' href="https://zoom.us/">

          <button
            className="mt-4 rounded-3xl w-[200px] inline-block bg-white text-[#0b5cff] font-semibold py-1 rounded hover:bg-[#0b5cff] hover:border-white hover:text-white transition-colors duration-300 mb-4 border border-1 border-[#0b5cff]"
          >
            Zoom for Financial Service
          </button>
        </a>
        <div className="absolute bottom-0 right-0 "> {/* Positioned at bottom right corner */}
          <div className="bg-[#00053d] font-bold text-xl p-4 flex items-center"> {/* Changed to rounded-full */}
            <div className="flex items-center justify-center w-[100px] h-[76px] border-2 border-[#b5d0f8] rounded-full mr-4"> {/* Increased size of the circle */}
              <span className='text-[30px] spanText text-[#b5d0f8]'>8</span>
            </div>
            <span className="text-white">Of the 10 largest U.S. Banks choose Zoom</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export const Government = () => {
  return (
    <div className="relative flex bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ width: '812px', height: '490px' }}>
      <div className="w-1/2">
        <img
          src="https://st2.zoom.us/static/6.3.21666/image/home2/industry3.jpg" // Replace with the actual image URL
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-6 flex flex-col justify-center relative"> {/* Added relative positioning */}
        <h2 className="text-3xl font-bold mb-4 mt-[-100px]">
          Communications for the people             </h2>
        <p className="font-[500] text-[18px] mb-4 mt-4">
          Improve access and information sharing, build stronger relationships, and better serve your constituents            </p>
        <a target='_blank' href="https://zoom.us/">

          <button
            className="mt-4 rounded-3xl w-[200px] inline-block bg-white text-[#0b5cff] font-semibold py-1 rounded hover:bg-[#0b5cff] hover:border-white hover:text-white transition-colors duration-300 mb-4 border border-1 border-[#0b5cff]"
          >
            Zoom for Goverment
          </button>
        </a>
        <div className="absolute bottom-0 right-0 "> {/* Positioned at bottom right corner */}
          <div className="bg-[#00053d] font-bold text-xl p-4 flex items-center"> {/* Changed to rounded-full */}
            <div className="flex items-center justify-center w-[200px] h-[76px] border-2 border-[#b5d0f8] rounded-full mr-4"> {/* Increased size of the circle */}
              <span className='text-[30px] spanText text-[#b5d0f8]'>87</span>
            </div>
            <span className="text-white">
              of government workers felt favorable toward Zoom for video communications</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Healthcare = () => {
  return (
    <div className="relative flex bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ width: '812px', height: '490px' }}>
      <div className="w-1/2">
        <img
          src="https://st3.zoom.us/static/6.3.21666/image/home2/industry4.jpg" // Replace with the actual image URL
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-6 flex flex-col justify-center relative"> {/* Added relative positioning */}
        <h2 className="text-3xl font-bold mb-4 mt-[-100px]">
          Connect everyone in your health organization            </h2>
        <p className="font-[500] text-[18px] mb-4 mt-4">
          Communicate across the continuum of care, meet patients where they are, and enable an agile, connected workforce.            </p>
        <a target='_blank' href="https://zoom.us/">

          <button
            className="mt-4 rounded-3xl w-[200px] inline-block bg-white text-[#0b5cff] font-semibold py-1 rounded hover:bg-[#0b5cff] hover:border-white hover:text-white transition-colors duration-300 mb-4 border border-1 border-[#0b5cff]"
          >
            Zoom for Heathcare
          </button>
        </a>
        <div className="absolute bottom-0 right-0 "> {/* Positioned at bottom right corner */}
          <div className="bg-[#00053d] font-bold text-xl p-4 flex items-center"> {/* Changed to rounded-full */}
            <div className="flex items-center justify-center w-[120px] h-[76px] border-2 border-[#b5d0f8] rounded-full mr-4"> {/* Increased size of the circle */}
              <span className='text-[30px] spanText text-[#b5d0f8]'>9</span>
            </div>
            <span className="text-white">of the Top 10 U.S. Hospitals Choose Zoom</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Manufacturing = () => {
  return (
    <div className="relative flex bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ width: '812px', height: '490px' }}>
      <div className="w-1/2">
        <img
          src="https://st1.zoom.us/static/6.3.21666/image/home2/industry5.jpg" // Replace with the actual image URL
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-6 flex flex-col justify-center relative"> {/* Added relative positioning */}
        <h2 className="text-3xl font-bold mb-4 mt-[-100px]">
          Real-time communication, anywhere in the world           </h2>
        <p className="font-[500] text-[18px] mb-4 mt-4">
          Reliably connect global staff, designers, factories, supply chains, and more to keep production moving.            </p>
        <a target='_blank' href="https://zoom.us/">

          <button
            className="mt-4 rounded-3xl w-[200px] inline-block bg-white text-[#0b5cff] font-semibold py-1 rounded hover:bg-[#0b5cff] hover:border-white hover:text-white transition-colors duration-300 mb-4 border border-1 border-[#0b5cff]"
          >
            Zoom for Manufacturing
          </button>
        </a>
        <div className="absolute bottom-0 right-0 "> {/* Positioned at bottom right corner */}
          <div className="bg-[#00053d] font-bold text-xl p-4 flex items-center"> {/* Changed to rounded-full */}
            <div className="flex items-center justify-center w-[155px] h-[76px] border-2 border-[#b5d0f8] rounded-full mr-4"> {/* Increased size of the circle */}
              <span className='text-[30px] spanText text-[#b5d0f8]'>7</span>
            </div>
            <span className="text-white">
              of the 10 top global pharmaceutical companies choose Zoom
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Retail = () => {
  return (
    <div className="relative flex bg-white shadow-2xl rounded-3xl overflow-hidden" style={{ width: '812px', height: '490px' }}>
      <div className="w-1/2">
        <img
          src="https://st2.zoom.us/static/6.3.21666/image/home2/industry6.jpg" // Replace with the actual image URL
          alt="Classroom"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-6 flex flex-col justify-center relative"> {/* Added relative positioning */}
        <h2 className="text-3xl font-bold mb-4 mt-[-100px]">
          Bridging the in-store and online experiences</h2>
        <p className="font-[500] text-[18px] mb-4 mt-4">
          Use video to reimagine e-commerce and unlock new revenue opportunities.            </p>
        <a target='_blank' href="https://zoom.us/">

          <button
            className="mt-4 rounded-3xl w-[200px] inline-block bg-white text-[#0b5cff] font-semibold py-1 rounded hover:bg-[#0b5cff] hover:border-white hover:text-white transition-colors duration-300 mb-4 border border-1 border-[#0b5cff]"
          >
            Zoom for Retail
          </button>
        </a>
        <div className="absolute bottom-0 right-0 "> {/* Positioned at bottom right corner */}
          <div className="bg-[#00053d] font-bold text-xl p-4 flex items-center"> {/* Changed to rounded-full */}
            <div className="flex items-center justify-center w-[120px] h-[76px] border-2 border-[#b5d0f8] rounded-full mr-4"> {/* Increased size of the circle */}
              <span className='text-[30px] spanText text-[#b5d0f8]'>8</span>
            </div>
            <span className="text-white">of the 10 largest U.S. retailers choose Zoom</span>
          </div>
        </div>
      </div>
    </div>
  )
}