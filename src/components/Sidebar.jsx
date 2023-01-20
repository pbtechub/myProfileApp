import React from 'react'
import { NavLink } from 'react-router-dom'
import profile from '../assets/avatar.jpg'
import { menu } from '../assets/data'

 

const Sidebar = ({selected, setSelected}) => {
  

  return (
    <div className='h-[100%] w-[260px] bg-[#F8F8FF]'>
        <div className="flex items-center gap-[10px] p-[30px]">
                  <img src={profile} alt="" className="w-[50px] h-[50px] rounded-full"/>
                <div>
                    <p className="text-xs font-bold">Prashant Naik</p>
                    <p className="text-xs">@bhimanprash16</p>
                </div>
            </div>
            <div className="px-[15px]">
                <ul className="list-none">
                   {menu.map((item, index) => (
                    
                    <li 
                    className={`${index === menu.length - 1 ? 'mt-[100px]' : 'mt-0'} relative py-[8px] px-[15px] ${item.title === selected ? 'border-l-[2px] border-[#EE6338] border-solid' : ''}`}
                    key={item.id}
                    onClick={()=> setSelected(item.title)}>
                      <NavLink 
                        to={`/${item.title}`}>
                        <a href="#" className='text-xs text-black decoration-none flex items-center'>
                          <div className={`${index === 5 ? 'text-[.9rem]' : 'text-[1.1rem]'}  mr-[10px]`}>{item.icon}</div>
                          <div className='menu-name'>{item.title}</div>
                        </a>
                      </NavLink>
                    </li>
                    
                   ))}
                </ul>
            </div>
    </div>
  )
}

export default Sidebar