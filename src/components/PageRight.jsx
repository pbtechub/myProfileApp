import React from 'react'

const PageRight = () => {
  return (
    <div className='flex items-start justify-center'>
        <div className='w-[200px] h-[200px] rounded-xl bg-[#EE6338] p-[30px] text-white mt-[50px]'>
            <p className='text-[.7rem]'>Your plan</p>
            <h3 className='mt-[10px] text-[.8rem] font-bold'>Pro Annual</h3>
            <p className='text-[.7rem]'>Renew on Nov 2021</p>
            <button 
            className='bg-transparent py-[5px] px-[10px] rounded-md border-[1px] border-white border-solid mt-[20px] text- text-[.7rem]'>
              Cancel subscription
            </button>
        </div>
    </div>
  )
}

export default PageRight