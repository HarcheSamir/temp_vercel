import React from 'react'
import Banner from '../components/Banner'

export default function Clients() {
  return (
    <div className='min-h-screen py-20  bg-gray-200 w-full items-center h-full flex flex-col justify-center'>
      <p style={{ fontFamily: 'serif', fontWeight: 100 }} className='text-4xl mb-20 lg:text-7xl text-center font-serif'>What our clients are saying</p>
      <Banner items={[
        <Card quote={'“Secfi made the entire process so simple and straightforward. I couldn’t imagine doing this on my own.”'} client={'James'} description={'Software Engineer, Series B startup'} />,
        <Card quote={'“I had so many questions about taxes and equity. Secfi gave me clarity and helped me make informed decisions.”'} client={'Rachel'} description={'Operations Manager, late-stage startup'} />,
        <Card quote={'“With Secfi, I was able to understand the complexities of my stock options and plan accordingly.”'} client={'Chris'} description={'Product Manager, pre-IPO company'} />,
        <Card quote={'“Equity can be intimidating, but Secfi broke it down and gave me the confidence to make the right moves.”'} client={'Sophie'} description={'Data Scientist, startup veteran'} />,
        <Card quote={'“Secfi helped me navigate my exit strategy with ease, and I feel more secure about my financial future.”'} client={'Liam'} description={'CTO, startup at Series C'} />,
        <Card quote={'“I didn’t realize how much I didn’t know until Secfi showed me the way. They’re equity experts.”'} client={'Lucas'} description={'Senior Developer, fintech company'} />,
        <Card quote={'“Secfi took the stress out of handling my stock options. I feel like I have a team backing me.”'} client={'Olivia'} description={'Marketing Lead, tech unicorn'} />,
        <Card quote={'“Having Secfi on my side during my exit has been an absolute game changer.”'} client={'Daniel'} description={'Co-founder, recently acquired startup'} />,
        <Card quote={'“They break down complicated equity topics in a way that’s easy to understand, giving me confidence.”'} client={'Ella'} description={'Finance Manager, growth-stage startup'} />,
        <Card quote={'“I never imagined equity could be so straightforward. Secfi has been a huge help.”'} client={'Noah'} description={'Business Development, tech company'} />,
      ]} />
      <p  className='text-center w-[80%] mt-20 text-zinc-500'>Testimonials are specific to an individual Client’s experience and may not be representative of all Clients. Unless otherwise indicated, Clients offering a Testimonial do not receive compensation and their statement does not present a conflict of interest.</p>
    </div>
  )
}

function Card({ quote, client, description }) {
  return (
    <div className='bg-gray-50 p-8 flex flex-col w-[400px] min-h-[250px] mx-4 rounded-xl' >
      <p className='font-semibold text-lg'>{quote}</p>
      <div className='mt-auto flex flex-col text-sm'>
        <p className='text-zinc-500'>{client}</p>
        <p className='font-semibold'>{description}</p>
      </div>
    </div>
  )
}