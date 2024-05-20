import React from 'react'
import { Carousel } from 'antd';
import Blocks from './Blocks';
const Slider = () => {
  return (<>
    <Carousel arrows infinite={false} className='className="custom-carousel bg-[#00131f]'>
      <div>
        <h3><Blocks /></h3>
      </div>
      <div>
        <h3 ><Blocks /></h3>
      </div>
      <div>
        <h3 ><Blocks /></h3>
      </div>
    </Carousel>
    <br />
  </>
  )
}

export default Slider