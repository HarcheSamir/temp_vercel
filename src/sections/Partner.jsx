import React from 'react'

export default function Partner() {
    return (
        <div className='min-h-screen py-20  bg-gray-50 w-full items-center h-full flex flex-col justify-center'>
            <p style={{ fontFamily: 'serif', fontWeight: 100 }} className='text-4xl lg:text-7xl text-center font-serif'>Choose a partner that <span className='text-zinc-500'>gets you</span></p>
            <div className='grid px-8  gap-12 grid-cols-6 md:grid-cols-12  w-full max-w-[55rem] mt-20'>
                <div className='flex  col-span-6  xl:col-span-4 flex-col min-h-[400px] h-full  justify-evenly'>
                    <img className='w-12' alt='/' src='/assets/heart.png' />
                    <p className='text-2xl'>We’ve been in your shoes before</p>
                    <p className='text-lg text-zinc-500'>Secfi was built with tech professionals in mind. Whether navigating stock options or maximizing equity, we help guide you through every step of your financial journey.</p>
                </div>
                <div className='flex col-span-6 xl:col-span-4 flex-col min-h-[400px] h-full  justify-evenly'>
                    <img className='w-12' alt='/' src='/assets/clock.png' />
                    <p className='text-2xl'>We’ve been in your shoes before</p>
                    <p className='text-lg text-zinc-500'>Secfi was built with tech professionals in mind. Whether navigating stock options or maximizing equity, we help guide you through every step of your financial journey.</p>
                </div>
                <div className='flex col-span-6 md:col-start-4  xl:col-span-4 flex-col min-h-[400px] h-full  justify-evenly'>
                    <img className='w-12' alt='/' src='/assets/chart.png' />
                    <p className='text-2xl'>We’ve been in your shoes before</p>
                    <p className='text-lg text-zinc-500'>Secfi was built with tech professionals in mind. Whether navigating stock options or maximizing equity, we help guide you through every step of your financial journey.</p>
                </div>
            </div>
        </div>
    )
}
