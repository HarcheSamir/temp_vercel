import React from 'react'
import Button from '../components/Button'
import { BiChevronRight } from 'react-icons/bi'

export default function Solutions() {
    return (
        <div className='flex py-32 flex-col max-w-[70rem]'>
            <p style={{ fontFamily: 'serif', fontWeight: 100 }} className='text-4xl mb-20 lg:text-[80px] text-zinc-800 leading-none text-center font-serif'>We love this stuff <span className='text-zinc-500'>so much</span>  we write about it every month</p>
            <div className='grid gap-8 max-w-[70rem] px-6 grid-cols-1 md:grid-cols-2'>



                <div className='flex  relative overflow-hidden flex-col  bg-white rounded-3xl '>
                    <p className='mb-8 mt-8 mx-8'>Secfi Learn</p>
                    <p className='text-3xl mb-8 mx-8'>Our collection of educational content</p>
                    <div className='w-full  flex flex-col mt-auto items-center'>



                        <div className='flex group px-8 w-full justify-between items-center cursor-pointer py-8 hover:bg-gray-100'>
                            <p className='text-lg w-[70%]'>What is the alternative minimum TAX (ATM)?</p>
                            <Button Icon={BiChevronRight} className={'bg-gray-500'} />
                        </div>
                        <div className='bg-zinc-300 rounded-full w-[90%] h-[1px]' />

                        <div className='flex group px-8 w-full justify-between items-center cursor-pointer py-8 hover:bg-gray-100'>
                            <p className='text-lg w-[70%]'>What are the main components of the balanced scorecard?</p>
                            <Button Icon={BiChevronRight} className={'bg-gray-500'} />
                        </div>
                        <div className='bg-zinc-300 rounded-full w-[90%] h-[1px]' />

                        <div className='flex group px-8 w-full justify-between items-center cursor-pointer py-8 hover:bg-gray-100'>
                            <p className='text-lg w-[70%]'>How does the principle of supply and demand work?</p>
                            <Button Icon={BiChevronRight} className={'bg-gray-500'} />
                        </div>
                        <div className='bg-zinc-300 rounded-full w-[90%] h-[1px]' />

                        <div className='flex group px-8 w-full justify-between items-center cursor-pointer py-8 hover:bg-gray-100'>
                            <p className='text-lg w-[70%]'>What are the key differences between qualitative and quantitative research?</p>
                            <Button Icon={BiChevronRight} className={'bg-gray-500'} />
                        </div>
                        <div className='bg-zinc-300 rounded-full w-[90%] h-[1px]' />

                        <div className='flex group px-8 w-full justify-between items-center cursor-pointer py-8 hover:bg-gray-100'>
                            <p className='text-lg w-[70%]'>What are the benefits of using cloud computing for businesses?</p>
                            <Button Icon={BiChevronRight} className={'bg-gray-500'} />
                        </div>


                    </div>
                </div>



                <div className='flex relative overflow-hidden flex-col text-white bg-zinc-800 rounded-3xl'>
                    <div className='absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent'></div>
                    <div className='absolute left-0 top-0 w-1/3 h-full'>
                        <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full filter blur-xl'></div>
                        <div className='absolute top-2/3 left-1/3 w-24 h-24 bg-white/8 rounded-full filter blur-xl'></div>
                        <div className='absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full filter blur-xl'></div>
                    </div>
                    <div className='relative z-10'>
                        <p className='mb-8 mt-8 mx-8'>Founders & Funders</p>
                        <p className='text-3xl mb-8 mx-8'>Subscribe to our newsletter</p>
                        <p className='mb-8 mx-8'>Join 30k+ people getting insights on what's happening in startups, venture capital, public markets, and more.</p>
                        <div className="flex w-[95%] self-center justify-between items-center space-x-2 p-2 rounded-full">
                            <input
                                type="email"
                                placeholder="email@email.com"
                                className="bg-zinc-700/50 grow text-white border border-zinc-600 px-4 py-4 rounded-full focus:outline-none focus:border-zinc-500 placeholder-zinc-500"
                            />
                            <Button label={'Subscribe'} theme={'white'} />
                        </div>
                        <img className='mt-[25%] w-[110%] self-center' src='/assets/phone.png' alt="Phone" />
                    </div>
                </div>

            </div>
        </div>
    )
}
