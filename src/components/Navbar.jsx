import React from 'react'
import Button from './Button'
import { FaSearch } from 'react-icons/fa'
import { TbMenu } from "react-icons/tb";

export default function Navbar({ floating = false, show }) {
  if (floating) return (
    <div className={`fixed z-50 bg-white flex justify-center top-0 left-0 w-full overflow-hidden duration-500 
      ${show ? ' translate-y-0' : ' -translate-y-full'}`}>
      <div className={`w-full flex py-10 max-w-[70rem] px-6 items-center`}>
        <img className='h-10 place-self-center' src='/assets/logo.png' />

        <div className='xl:flex hidden items-center ml-12 font-regular gap-8 '>
          {["For Employees", "For Executives", "For Investors", "Tools", "Resources"].map((text) => (
            <p key={text} className="relative whitespace-nowrap cursor-pointer group text-gray-800 hover:text-blue-500 transition-colors duration-500">
              {text}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
            </p>
          ))}
        </div>

        <div className='flex h-full ml-auto gap-2 items-center'>
          <Button theme='white' label={'Log In'} className={'hidden xl:flex bg-gray-200'} />
          <Button theme='black' label={'Get Started'} className={'hidden xl:flex '} />
          <Button theme='black' Icon={FaSearch} className={'text-[12px]'} />
          <Button theme='black' Icon={TbMenu} className={' xl:hidden'} />
        </div>
      </div>
    </div>
  );
  return (
    <div className={`w-full flex  py-10 max-w-[70rem] px-6  items-center`}>
      <img className='h-10  place-self-center' src='/assets/logo.png' />


      <div className='xl:flex hidden items-center ml-12 font-regular gap-8 '>
        {["For Employees", "For Executives", "For Investors", "Tools", "Resources"].map((text) => (
          <p key={text} className="relative whitespace-nowrap cursor-pointer group text-gray-800 hover:text-blue-500 transition-colors duration-200">
            {text}
            <span className="absolute  left-0 -bottom-1 h-0.5 w-full bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
          </p>
        ))}
      </div>


      <div className='flex h-full ml-auto gap-2 items-center'>
        <Button theme='white' label={'Log In'} className={' hidden xl:flex'} />
        <Button theme='black' label={'Get Started'} className={' hidden xl:flex'} />
        <Button theme='black' Icon={FaSearch} className={'text-[12px]'} />
        <Button theme='black' Icon={TbMenu} className={'xl:hidden text-[12px]'} />

      </div>

    </div>
  )
}
