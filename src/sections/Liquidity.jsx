import React from 'react'
import Button from '../components/Button'
import { BiChevronRight } from 'react-icons/bi'

export default function Liquidity() {
    return (
        <div className='flex flex-col max-w-[70rem] px-4 items-center pt-40'>
            <p className='md:text-7xl text-3xl text-center font-serif font-extralight  text-zinc-600'>
                You need solutions built <br /> for <span className='text-zinc-400'>your</span> unique needs
            </p>
            <div className='w-full gap-12 grid grid-cols-1 mt-20 md:grid-cols-2 md:grid-rows-3'>
                <div className='w-full  h-[45vh] md:h-full group rounded-3xl p-4 md:row-span-2 col-span-1 bg-gray-200 flex flex-col px-16 py-12'>
                    <p>Secfi Liquidity</p>
                    <p className='lg:text-4xl text-2xl font-sans font-semibold'>Liquidity for your pre-IPO shares and options</p>
                    <p className='mt-auto text-zinc-600 ml-2 text-sm'>Ready to turn your equity into cash? Our flexible liquidity products let you unlock the value of your pre-IPO shares while optimizing for taxes and long-term gains, so you get to keep more of your hard-earned money.</p>
                    <Button className={'mt-4'} Icon={BiChevronRight}
                        iconClassName={'text-2xl'}
                        label={'Learn More'}
                        animate={true} />
                </div>

                <div className='w-full rounded-3xl h-[50vh] md:h-[120vh]  row-start-1  col-span-1   md:row-span-3 overflow-hidden'>
                    <video className='h-full w-full loading-bg  object-cover' autoPlay loop muted>
                        <source
                            src='/assets/hero.mp4'
                            type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='w-full lg:text-2xl text-xl justify-evenly  h-[20vh] md:h-full rounded-3xl py-4 col-span-1 bg-white flex flex-col  items-center md:row-span-1 '>
                    <div className='w-[90%]   flex justify-between items-center'>Secondary Sale <Button className={'!h-[40px] !min-w-[40px]'} Icon={BiChevronRight} iconClassName={'text-xl'} /></div>
                    <div className='w-[90%] bg-zinc-300 h-[1px]' />
                    <div className='w-[90%]   flex justify-between items-center'>Non-recourse Financing <Button className={'!h-[40px] !min-w-[40px]'} Icon={BiChevronRight} iconClassName={'text-xl'} /></div>

                </div>
            </div>

        </div>
    )
}
