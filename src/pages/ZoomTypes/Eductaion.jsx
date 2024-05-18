import React from 'react'

const Eductaion = () => {
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
                <a  target='_blank' href="https://zoom.us/">

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

export default Eductaion