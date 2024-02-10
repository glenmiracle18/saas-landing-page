import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='pt-10'>
                <div className='px-[20px] space-y-[24px]'>
                    <h1 className='text-center text-[32px] leading-[40]px font-medium text-[#172026]'>
                        Start monitoring your website like a pro
                    </h1>
                    <p className='text-[16px] text-center'>
                        Get a bird&apos;s eye view with our customizable dashboard. 
                        Stay on top of things! Revamp your work process with our game-changing feature. 
                        Boost productivity and efficiency!
                    </p>
                </div>
                <div className='pt-[24px] flex gap-[10px] justify-center'>
                    <button className='bg-[#4328EB] px-[32px] rounded-[4px] py-[16px] text-white'>
                        Try for free
                    </button>
                    <button className='text-[#4328EB] '>
                        View pricing
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero