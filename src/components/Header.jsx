import React from 'react'
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';


function Header() {
  let [show, setshow] = React.useState(false)
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]

  return (
    <div className='flex items-center justify-between p-2 md:p-4'>
      <div className='flex items-center gap-8'>

        <img src="./images/logo.png" alt="" className='w-20 md:w-[118px]' />
        <div className='hidden lg:flex gap-10'>
          {menu.map((item, index) => <Headeritem key={index} Icon={item.icon} name={item.name} />)}
        </div>

        <div className='flex items-center lg:hidden gap-8'>
          {menu.map((item, index) => index < 3 && <Headeritem key={index} Icon={item.icon} name="" />)}

          <div className='relative' onClick={() => setshow((prev => !prev))}>
            <Headeritem Icon={HiDotsVertical} name="" /> 
            {show && <div className='z-[1] flex flex-col absolute right-7 md:right-0 mt-4 p-3 bg-[#121130] rounded-lg shadow-md border-blue-100 gap-4'>
              {menu.map((item, index) => index > 2 && <Headeritem key={index} Icon={item.icon} name={item.name} />)}
            </div>}
          </div>


        </div>

      </div>
      <img src="./images/yashavatar.png" alt="" className='rounded-full w-12' />
    </div>
  )
}

export default Header