import React, { useRef, useState } from 'react';
import CalculationsCarrousel from '../components/CalculationsCarrousel';
import { BiChevronRight } from 'react-icons/bi';
import Button from '../components/Button';
export default function Calculations() {
    return (
        <div className='bg-[#eeece3] py-40 w-full flex flex-col items-center px-4'>
            <p className='text-4xl text-center'>Leave the calculations to us</p>
            <p className='text-center mb-20 text-zinc-400 mt-8'>
                Equity and tax planning can be overwhelming. Our tools do the heavy lifting so you can focus on what <br className='hidden md:block' /> matters.
            </p>
            <CalculationsCarrousel
                items={[
                    <div className='md:w-[100px]'> </div>,
                    <Card />,
                    <Card />,
                    <Card />,
                    <Card />,
                    <Card />,
                    <Card />,
                    <div className='md:w-[100px]'> </div>,
                ]}
            />
        </div>
    );
}

function Card() {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play(); // Play the video on hover
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video when not hovered
            videoRef.current.currentTime = 0; // Optionally reset to start
        }
    };

    return (
        <div
            className='w-[300px] aspect-[3/4] bg-white rounded-2xl overflow-hidden relative group'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="h-[50%] relative">
                <video
                    ref={videoRef}
                    className='w-full h-full object-cover'
                    loop
                    muted
                >
                    <source
                        src='/assets/hero.mp4'
                        type='video/mp4'
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            </div>
            <div className="h-[30%] bg-white p-4">
                <p className=" text-2xl text-zinc-600">Stock Option <br />Tax Calculator</p>
                <p className=" text-zinc-400 text-sm ml-2 mt-2">calculate the costs to <br /> exercices - including taxes</p>
                <Button className={'mt-4 bg-gray-400 !h-[30px] !min-w-[30px]'} Icon={BiChevronRight}
                    iconClassName={'text-2xl'}
                    label={'Learn More'}
                    animate={true} />
            </div>
        </div>
    );
}
