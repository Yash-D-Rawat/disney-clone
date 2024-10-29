import React from 'react'
import Productionitem from './Productionitem'

function Production() {
    const productionHouseList = [
        {
            id: 1,
            image: './images/production_images/disney.png',
            video: './images/production_videos/disney.mp4'
        },
        {
            id: 2,
            image: './images/production_images/marvel.png',
            video: './images/production_videos/marvel.mp4'
        },
        {
            id: 3,
            image: './images/production_images/nationalG.png',
            video: './images/production_videos/national-geographic.mp4'
        },
        {
            id: 4,
            image: './images/production_images/pixar.png',
            video: './images/production_videos/pixar.mp4'
        },
        {
            id: 5,
            image: './images/production_images/starwar.png',
            video: './images/production_videos/star-wars.mp4'
        },
    ]
    return (
        <div className='flex flex-wrap md:flex-nowrap w-full gap-1 md:gap-4 px-14 mt-5 mb-12'>
            {productionHouseList.map((item) => <Productionitem image = {item.image} video = {item.video}/>)}
        </div>
    )
}

export default Production