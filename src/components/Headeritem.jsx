import React from 'react'

function Headeritem({Icon, name}) {
  return (
    <div className='flex items-center gap-3 md:mb-0 font-semibold cursor-pointer hover:underline underline-offset-8 '>
      <Icon />
      <p>{name}</p>
    </div>
  )
}

export default Headeritem