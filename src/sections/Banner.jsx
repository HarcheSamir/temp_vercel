import React from 'react'
import Banner from '../components/Banner'
export default function BannerSection() {
    return (

        <div className='w-full flex  justify-center px-4 bg-gray-200 py-8'>
            <div className='w-full flex sm:flex-row flex-col items-center gap-8 max-w-[70rem] '>
                <div className=' text-zinc-400 text-xs whitespace-nowrap'>
                    Trusted by employees of <br /> some of the best companies
                </div>
                <Banner items={[
                    <img className="h-12 mx-16" alt="/" src={'/assets/google.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/canva.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/klaviyo.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/netskope.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/reddit.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/servicetitan.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/spacex.svg'} />,
                    <img className="h-12 mx-16" alt="/" src={'/assets/stripe.svg'} />,
                ]} />
            </div>
        </div>
    )
}
