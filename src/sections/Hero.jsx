import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Button from '../components/Button'
import Navbar from '../components/Navbar'


export default function Hero() {
    return (
        <div className='w-full items-center min-h-screen pb-8 flex flex-col bg-[#eeece3]'>
            <Navbar />
            <div className='max-w-[70rem] gap-8 grow w-full px-6 flex flex-col md:flex-row items-center justify-center'>
                <div className='py-4 w-full justify-center flex flex-col'>
                    <p style={{ fontFamily: 'serif', fontWeight: 100 }} className='text-5xl xl:text-[60px] w-[80%] font-serif font-extralight'>
                        Things are just different when <span className='text-zinc-400 italic'>you have equity</span>
                    </p>
                    <p className='mt-8'>Secfi delivers liquidity and wealth management services to help employees and shareholders of innovative companies achieve their financial goals.</p>
                    <Button iconClassName={'text-xl'} label={'Get Started'} Icon={BiChevronRight} className={' mt-8 '} />
                </div>
                <div className='w-full h-full justify-center items-center flex'>
                    <video className='loading-bg w-[95%]  object-fill  aspect-[3/2] rounded-xl' autoPlay loop muted>
                        <source 
                        src='/assets/hero.mp4' 
                        type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}
