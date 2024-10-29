import React from 'react'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem2 from './Headeritem2';

function Header2() {
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

    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <div
      className={` h-screen bg-gray-900 text-white fixed transition-all duration-300 flex flex-col justify-center ${
        isExpanded ? 'w-72 bg-gradient-to-r from-gray-900 to-gray-600 opacity-50' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <ul className=" flex flex-col space-y-4 p-4 justify-between h-2/5 ">
        {menu.map((item) => <Headeritem2 Icon = {item.icon} name = {item.name} isExpanded = {isExpanded} />)}
      </ul>
    </div>
    )
}

export default Header2