import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='w-full py-[22px] shadow-md flex justify-center'>
        <ul className='flex items-center gap-4'>
            <li>
              <NavLink to={"/" } className={({isActive}) => `${isActive ? "text-yellow-500": ""}`}>
                   Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}className={({isActive}) => `${isActive ? "text-yellow-500" : ""}`}>
                   About
              </NavLink>
            </li>
        </ul>
    </header>
    
    </>
  )
}

export default Header