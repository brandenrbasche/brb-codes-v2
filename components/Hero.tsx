import React from 'react';
import HeroHeader from "@/components/ui/HeroHeader";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";

const Hero = () => {
    return (
        <div className='pb-20 items-center'>
            {/*<BackgroundGradientAnimation>*/}

                <div className='flex flex-col justify-center relative m-w-20 z-10 px-5 pointer-events-none'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-xl text-white-200 font-mono mt-5'>Branden Basche</h1>
                        <p className='font-sans text-white-200'>brb.codes</p>
                    </div>
                    <HeroHeader/>
                </div>
            {/*</BackgroundGradientAnimation>*/}

        </div>
    );
};

export default Hero;