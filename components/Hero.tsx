import React from 'react';
import HeroHeader from "@/components/ui/HeroHeader";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";

const Hero = () => {
    return (
        <div className='h-[80vh] pb-20 items-center'>
            <BackgroundGradientAnimation>

                <div className='flex justify-center items-center relative m-w-20 z-10'>
                    <HeroHeader/>
                </div>
            </BackgroundGradientAnimation>

        </div>
    );
};

export default Hero;