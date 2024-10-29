import React from 'react'
import GlobalAPI from '../../services/GlobalAPI'
const genre_base_movie = 'https://image.tmdb.org/t/p/original'

function Specialgenre({ genreid }) {
    const [movielist, setmovielist] = React.useState([])
    React.useEffect(() => {
        get_genremovies()
    }, [])

    function get_genremovies() {
        GlobalAPI.getgenremovies(genreid).then(resp => {
            // console.log(resp.data.results)  
            setmovielist(resp.data.results)
        })
    }
    return (
        <div className='flex overflow-x-auto no-scrollbar gap-7 md:p-4'>
            {movielist.map((item) => {
                return <div className='hover:scale-110 transition-all duration-50 ease-in'>
                    {
                        item.backdrop_path && <img src={genre_base_movie + item.backdrop_path} alt=""
                            className='h-52 rounded-lg cursor-pointer hover:border-[5px] border-solid border-white' />
                    }
                    {item.backdrop_path && <h1 className='w-72 font-semibold'>{item.title}</h1>}
                </div>
            })}
        </div>
    )
}

export default Specialgenre