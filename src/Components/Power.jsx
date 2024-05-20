import React, { useState } from 'react'
import { BankIcon, BoxIcon, HealthIcon, MoneyIcon, StrokeIcon, StudyIcon } from '../assets/logos'
import { DefaultComp, Education, Government, Healthcare, Manufacturing, Retail, Services } from './Sort'

const Power = () => {

  const [comps, setComps] = useState(<DefaultComp />)
  const [compText, setCompText] = useState("")
  const [activeIndex, setActiveIndex] = useState(null);

  const itemsIcon = [
    {
      icon: <StudyIcon />,
      text: "Education",
      func: () => setComps(<Education />),
    },
    {
      icon: <MoneyIcon />,
      text: "Financial Services",
      func: () => setComps(<Services />),
    },
    {
      icon: <BankIcon />,
      text: "Government",
      func: () => setComps(<Government />),
    },
    {
      icon: <HealthIcon />,
      text: "Healthcare",
      func: () => setComps(<Healthcare />),
    },
    {
      icon: <BoxIcon />,
      text: "Manufacturing",
      func: () => setComps(<Manufacturing />),
    },
    {
      icon: <StrokeIcon />,
      text: "Retail",
      func: () => setComps(<Retail />),
    }
  ]
  return (
    <>
      <div className='flex flex-row justify-between max-w-[1300px] m-auto items-center mt-[120px] mb-[120px]'>
        <div className='w-[55%]'>
          {comps}
        </div>
        <div className='w-[35%] flex flex-wrap -gap-[18px]'>
          {itemsIcon.map((item, index) => {
            return (
              <div key={index}
                onClick={() => {
                  try {
                    item.func();
                    setCompText(item.text);
                    setActiveIndex(index);
                  } catch (error) {
                    console.error('An error occurred:', error);
                  }
                }}
                className={`w-[210px] h-[150px] mx-auto px-[10px] text-center flex items-center flex-col justify-around m-[10px] py-[20px] rounded-[20px] hover:cursor-pointer hover:border-[#0b5cff] duration-300 delay-100 border-[2px] border-[#b5d0f8] text-[25px] hover:text-[#0b5cff] font-semibold hover:shadow-xl ${activeIndex === index ? 'bg-[#0b5cff] text-[#fff] border-0 hover:text-[#fff]' : ''}`}>
                {item.icon}
                <h2
                  id={item.text ? "light_h2" : "dark_h2"}
                >{item.text}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Power