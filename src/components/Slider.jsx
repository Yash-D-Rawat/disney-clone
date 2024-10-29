import React, { useRef } from 'react'
import GlobalApi from '../services/GlobalAPI'
const image_url = 'https://image.tmdb.org/t/p/original'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
const windowwidth = window.innerWidth;

function Slider() {
    let [trendinglist, settrendinglist] = React.useState([]);
    let elementref = useRef();

    React.useEffect(() => {
        get_trending();
    }, [])

    function get_trending() {
        GlobalApi.get_trendingmovie.then(resp => {
            console.log(resp.data.results)
            settrendinglist(resp.data.results)
        })
    }

    function leftscroll(element) {
        element.scrollLeft -= windowwidth - 110
    }

    function rightscroll(element) {
        element.scrollLeft += windowwidth - 110
    }

    return (
        <div className=''>
            <div className='w-screen justify-between absolute top-[55%] z-[1] px-4 hidden md:flex' >
                <HiChevronLeft className='cursor-pointer size-6' onClick={() => { leftscroll(elementref.current) }} />
                <HiChevronRight className='cursor-pointer size-6 ' onClick={() => { rightscroll(elementref.current) }} />
            </div>
            <div className=' overflow-x-auto flex px-16 md:py-3 no-scrollbar scroll-smooth' ref={elementref}>
                {trendinglist.map((item) => item.backdrop_path && <div className='relative min-w-full mr-7'>
                    <img src={image_url + item.backdrop_path}
                        className='opacity-50 min-w-full h-96 md:h-[600px] object-cover rounded-md object-center hover:border-[5px] transition-all duration-200 ease-in' />
                        
                    <div 
                    className='hidden md:flex flex-col justify-end gap-6 absolute bottom-0 left-0  md:w-1/3 md:h-full p-8 bg-gradient-to-r from-black to-transparent opacity-100'>
                        <h1 className='font-bold md:text-4xl'>{item.title}</h1>
                        <p className='hidden md:block md:text-lg font-semibold'>{item.overview}</p>
                        <div>
                            <button
                                className='flex items-center md:gap-4 opacity-60 bg-gray-500 rounded-2xl md:py-4 px-7 mdtext-lg font-extrabold hover:scale-105 transition-all ease-in'>
                                Subscribe to Watch <FaPlay />
                            </button>

                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Slider