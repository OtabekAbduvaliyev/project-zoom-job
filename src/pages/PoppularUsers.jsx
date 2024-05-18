import React from 'react'

const PopularUsers = () => {
  const imgs = [
    {
      img: "https://file-paa.zoom.us/VrcyryqORpezX4RSo0Nuxw/MS4yLt7soJFBCy-RQWg-GKhxZ_DUYkiBYNy6LAYca6t__6zk/17926e4a-329a-4a0e-9ffd-fb28e886231b.png"
    },
    {
      img: "https://file-paa.zoom.us/F0tWGQRzTvm94QgWBlusXQ/MS4yLuRuAYUaZz7vBqiIcJa51s5mY6de8ruEtZq5pUn_rb3d/21f2f230-adba-4a90-a8f2-75a201d7d3de.png"
    },
    {
      img: "https://file-paa.zoom.us/F6tCI9t7T2WVCdQ6JhfQFQ/MS4yLrllxzjWjxPipLS_ngOciHwoUNFdF-hrXPf1pTtBjvsk/34912812-2672-4a6a-a539-514d833cf7cc.png"
    },
    {
      img: "https://file-paa.zoom.us/zf7v2ZIvQJOqdsU_tpMFXA/MS4yLsF1iXXRAD5_6ye5hc9oGnxSw64lOqPRODrGRAlVi_Fa/26d1582c-d830-4100-96b3-cbca2714d55e.png"
    },
    {
      img: "https://file-paa.zoom.us/rBkRPqUSRhiyqWif7xDzSQ/MS4yLq5r1zxMsYt_n1-rs5hBS2XO4A2tC8P0gRvN-iDYqJD5/1b04b70d-e825-4a66-907f-cb5ac99c0ab3.png"
    },
    {
      img: "https://file-paa.zoom.us/fsS4ptYHQdm3I1ti5jW_mw/MS4yLrFCR7O7hXoROxix8ZxQIzEn0Hv9jybxZW_EyPS10Npd/593c24f5-b1ea-4845-ab3e-5df7e83102a6.png"
    },
    {
      img: "https://file-paa.zoom.us/FzY8XBWBRNK68etsjKCuiA/MS4yLmfyz6T0Hs3r5jN7zOxF9VvI9jIsg00gymXSaXeo4TUH/3c1984d5-4ae8-429e-ac3c-1d6e1764bfd4.png"
    },
    {
      img: "https://file-paa.zoom.us/J7M5FnjMQ9CiFyGvsj0U_Q/MS4yLo2J3FoyED44lcGuKnruwXshjUkZ8dir95VjQx_b1wgY/e5bb1721-1fa9-46f2-9560-08c39fa741e6.png"
    },
    {
      img: "https://file-paa.zoom.us/RmGIvMfUSV-T74Q2lxGJew/MS4yLg1ICpmSbNMHXitGwyOPOJ5i3-kNuwAH3E68MRKPC_AC/e3ea7630-e9be-4582-888e-ea3f3696d455.png"
    },
    {
      img: "https://file-paa.zoom.us/92oiDZMqQxGGmU1PpPf4-A/MS4yLvgwB31QKQa2v7RAHdaFrUSEOXUsIps9SbYSPv-emHQ5/ede003c3-cefe-455f-9430-100b189d353a.png"
    },
    {
      img: "https://file-paa.zoom.us/W7omHyfJQtOV08j4jDyXng/MS4yLiUnV_aHGlUhZ6rFLtNw06V0AosTmaNY8_s40G484YDS/7aee609b-5935-4fb7-aeb0-1da136b2d971.png"
    },
    {
      img: "https://file-paa.zoom.us/jXzLnIlQSoikKFvseUj6-A/MS4yLn3MNf90sUeHBciqfA4a1gr0e2aUoZNpIGX9Yvn6tFEf/c5751e30-92bf-4a36-8e86-7b38e25dbde5.png"
    }
  ]
  return (
    <>
      <div className='bg py-10'>
        <section className='flex max-w-[1300px] justify-between m-auto items-center'>
          <div className="firstRow flex flex-col gap-y-[20px]">
            <h2 className='text-[30px] font-[700]'>Businesses around the globe choose Zoom</h2>
            <a href="" className='text-[18px] text-[#0b5cff]'>Read their Stories</a>
          </div>
          <div className="secondRow grid grid-cols-4 gap-x-[40px]">
            {imgs.map((img, index) => {
              return (
                <div key={index}><img src={img.img} alt="" className='w-[128px]' /></div>
              )
            })}
          </div>
        </section>
      </div>
      <section>
        <div className="inf">
          <section class="text-gray-600 body-font bg-[#00053d]">
            <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src="https://st3.zoom.us/static/6.3.20341/image/home2/homepage_static_new_wheel_workplace.png" />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:leading-[46px] sm:text-[45px] text-3xl mb-4 font-medium text-white">One platform for limitless <br /> human connection
                </h1>
                <p class="mb-8 mt-[10px] leading-[23px] text-[19px] font-[500] text-[white]">Drive impact with AI Companion, reimagine teamwork, enhance customer relationships, and enable seamless experiences with a single platform.</p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-[#0b5cff] border-0 py-[0.5px] px-6 focus:outline-none hover:bg-indigo-600 rounded-3xl text-lg">Discover the possibilities</button>
                </div>
                <p className='mt-[20px] leading-[20px]'>*AI Companion is included at no additional cost with the paid services in your Zoom user account and may not be available for all regions and industry verticals. Some features not currently available across all regions or plans and are subject to change.</p>
              </div>
            </div>
          </section>

        </div>
      </section>
    </>
  )
}

export default PopularUsers