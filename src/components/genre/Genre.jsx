import React from 'react'
import Genredata from './Genredata'
import Movielist from './Movielist';
import Specialgenre from './Specialgenre';

function Genre() {
    return (
        <div className='flex flex-col gap-10 p-4'>
            {Genredata.map((item, index) => {
                return <div className='w-full'>
                    <h1 className='text-2xl font-bold px-4'>{item.name}</h1>
                    {index % 3 === 0 ? <Specialgenre genreid={item.id}/>:<Movielist genreid={item.id} />}
                </div>
            })}
        </div>
    );
}

export default Genre