import React from 'react'
import card from '../assets/visa.svg'
import { table } from '../assets/data'

const Billings = () => {
    
  return (
        <div  className=''>
                <div class="order-history">
                    <h5 className='font-bold text-sm'>Order History</h5>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error.</p>
                </div>
                <table className='w-[100%] mt-[35px] text-xs text-left'>
                    <thead>
    
                        <tr className=''>
                            {
                                table.map((item) => (
                                   item.thead.map((list) => (
                                    <th key={list.id} className="py-[10px] px-[5px] text-[#525252]">{list.title}</th>
                                    
                                   ))
                                ))
                            }
                           
                        </tr>
                    </thead>
                    <tbody>

                    {
                        table.map((item) => (
                                    item.tbody.map((list) => (
                                    <tr key={list.id} className="shadow-lg px-[5px] text-[.6rem]">
                                        <td className='py-[6px] px-[5px]'>{list.date}</td>
                                        <td className='py-[6px] px-[5px]'>{list.type}</td>
                                        <td className='py-[6px] px-[5px]'>
                                            <button className='bg-white border-collapse rounded-md text-[.6rem] py-[2px] px-[5px]'>Download</button>
                                        </td>
                                    </tr>
                            
                            )) 
                            
                        ))
                     }
                        
                    </tbody>
                </table>
                <div className="mt-[40px]">
                <div class="">
                    <h5 className='font-bold text-sm'>Order History</h5>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, error.</p>
                </div>
                    <div className="flex justify-between items-center mt-[10px] z-[100]">
                        <div class="flex items-center">
                            <img src={card} alt="" className='w-[50px] h-[50px] mr-[10px]'/>
                            <p className='text-xs font-[500]'>visa ending in 2234</p>
                        </div>
                        <div>
                            <button className='inline-block text-[.7rem] py-[4px] px-[8px] bg-transparent border-[grey] border-[1px] border-solid rounded-md' >Remove</button>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}

export default Billings