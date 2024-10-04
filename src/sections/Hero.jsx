import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Button from '../components/Button'
import Navbar from '../components/Navbar'


export default function Hero() {
    return (
        <div className='w-full items-center  pb-8 flex flex-col bg-[#eeece3]'>
            <Navbar />
            <div className='max-w-[75rem]  w-full min-h-[75vh] '>




            <div className='w-full md:h-[400px] mt-[5%]  gap-8 grow px-6 grid md:grid-cols-2 items-center justify-center'>
                <div className='py-4 w-full   h-full justify-center col-span-1    flex flex-col'>
                    <p style={{ fontFamily: 'serif', fontWeight: 100 }} className='text-[30px] md:text-[50px] xl:text-[65px] w-[80%]   leading-none font-serif font-extralight'>
                        Things are just different when <span className='text-zinc-500 italic'>you have equity</span>
                    </p>
                    <p className='mt-8 mb-10'>Secfi delivers liquidity and wealth management services to help employees and shareholders of innovative companies achieve their financial goals.</p>
                    <Button iconClassName={'text-xl'} label={'Get Started'} Icon={BiChevronRight} className={'mt-auto  '} />
                </div>
                <div className='w-full  h-full  col-span-1 justify-center items-center flex'>
                    <video className='loading-bg w-[90%]  object-fill  aspect-[3/2] rounded-xl' autoPlay loop muted>
                        <source 
                        src='/assets/hero.mp4' 
                        type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>



            </div>
     
        </div>
    )
}
