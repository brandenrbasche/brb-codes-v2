import React from 'react';
// import {LampSectionHeader} from "@/components/ui/LampSectionHeader";
import {Spotlight} from "@/components/ui/Spotlight";
// import {FlipWords} from "@/components/ui/FlipWords";
// import { motion } from 'framer-motion';
import HeroHeader from "@/components/ui/HeroHeader";
// import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
// import MagicButton from "@/components/ui/MagicButton";
// import {FaLocationArrow} from "react-icons/fa6";
// import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";
// import {Vortex} from "@/components/ui/Vortex";

const Hero = () => {
    // const words = ["UI-obsessed", "Test-driven", "Responsive", "Mysterious"];

    return (
        <div className='h-[80vh] w-full pb-20 items-center'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
                <Spotlight className='top-10 left-full h-[80vh] w-[50]' fill='purple'/>
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.003] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className='flex justify-center items-center relative m-w-20 z-10'>
                <HeroHeader />
            </div>

        </div>
    );
};

export default Hero;