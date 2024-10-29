import React from 'react'
import GlobalAPI from '../../services/GlobalAPI'
const genre_base_movie = 'https://image.tmdb.org/t/p/original'

function Movielist({ genreid }) {
    const [movielist, setmovielist] = React.useState([])
    React.useEffect(()=>{
        get_genremovies()
    },[])

    function get_genremovies() {
        GlobalAPI.getgenremovies(genreid).then(resp => {
            // console.log(resp.data.results)
            setmovielist(resp.data.results)
        })
    }
    return (
        <div className='flex overflow-x-auto no-scrollbar gap-7 md:p-4'>
            {movielist.map((item)=> {
                return item.backdrop_path && <img src={genre_base_movie+item.poster_path} alt="" 
                className='w-52 h-72 rounded-lg cursor-pointer hover:border-[5px] border-solid border-white hover:scale-110 transition-all duration-50 ease-in' />
            })}
        </div>
    )
}

export default Movielist