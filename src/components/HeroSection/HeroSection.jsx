import React from 'react'
import HeroImage from './HeroImage'
import HeroText from './HeroText'
import { HeroDescription, HeroDescriptionDesktop } from './HeroDescription'
export default function HeroSection() {
  return (
    <section className='relative w-full z-[1000] mt-16 lg:mt-0'>

      <div className='grid md:grid-cols-4 lg:grid-cols-5 md:px-5 x1:px-28 pt-24'>
        {/* Hero Image*/}
        <div className='flex justify-center md:col-span-2 relative mt:32 md:mt-0 lg:mt-0 xl:mt-0'>
          <HeroImage />

        </div>
        <div className='md:col-span-2 text-center lg:text-left mt-44 md:mt-6 lg:mt-24 xl:mt-2 ml-0 lg:ml-5 xl:ml-0'>
          <HeroText />
        </div>
        {/*Description (Hidden on mobile) */}
        <div className='hidden lg:block lg:col-span1'>
        <HeroDescriptionDesktop />
          

        </div>

      </div>
      {/*Description (appear only in  mobile) */}
      <div className='lg:hidden mt-2 md:mt-32 pt-10'>
      <HeroDescription />
      </div>
    </section>
  )
}

