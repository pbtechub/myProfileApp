import React from 'react'

const Navbar = ({selected, setSelected}) => {
  return (
    <div className='w-[100%] h-[60px] flex items-center justify-between'>
         <h3 class="font-bold">{selected}</h3>
         <form>
            <input type="text" placeholder='Search...' className='outline-none text-[.8rem]' />
         </form>
    </div>
  )
}

export default Navbar