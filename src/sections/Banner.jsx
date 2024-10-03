import React from 'react'
import Banner from '../components/Banner'
export default function BannerSection() {
    return (
      
        <div className='w-full flex  justify-center px-4 bg-gray-200 py-8'>
            <div className='w-full flex sm:flex-row flex-col items-center gap-8 max-w-[70rem] '>
                <div className=' text-zinc-400 text-xs whitespace-nowrap'>
                    Trusted by employees of <br /> some of the best companies
                </div>
                <Banner items={['google.svg', 'canva.svg', 'klaviyo.svg', 'netskope.svg', 'reddit.svg', 'servicetitan.svg', 'spacex.svg', 'stripe.svg']} />
            </div>
        </div>
    )
}
