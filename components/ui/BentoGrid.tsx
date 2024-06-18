'use client';

import { cn } from "@/utils/cn";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";
import {GlobeDemo} from "@/components/ui/GridGlobe";
import {useState} from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import MagicButton from "@/components/ui/MagicButton";
import {IoCopyOutline} from "react-icons/io5";

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "w-full grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-3 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
        className,
        id,
        title,
        description,
        img,
        imgClassName,
        titleClassName,
        spareImg
    }: {
        className?: string;
        id: number;
        title?: string | React.ReactNode;
        description?: string | React.ReactNode;
        img?: string;
        imgClassName?: string;
        titleClassName?: string;
        spareImg?: string;
}) => {

    const toolsList = ['React.js', 'TypeScript', 'Next.js', 'AWS', 'MongoDB', 'Express.js'];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('brandenbasche@gmail.com');
        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-2xl group/bento shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: "rgb(37, 38, 45)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6} && 'flex justify-center h-full'`}>
                <div className='w-full h-full absolute'>
                    { img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className='object-cover object-center w-full h-full'
                        />
                    )}

                </div>
                { id === 6 && (
                    <BackgroundGradientAnimation>
                        <div className='absolute z-50 flex items-center justify-center text-white font-bold' />
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(
                    titleClassName, 'relative md:h-full min-h-40 flex flex-col padding-x-2 p-3'
                )}>
                    <div className="text-gray-200 font-bold text-2xl max-w-96 z-10">
                        {title}
                    </div>
                    <div className='text-gray-400 text-lg lg:text-xl z-10'>
                        {description}
                    </div>

                    {/*TECH STACK CAROUSEL*/}
                    {id === 2 && (
                        <div
                            className='w-full h-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                            <ul className='flex items-center justify-center md:justify-start[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                                {
                                    toolsList.map((item, index) => (
                                        <li className='px-4' key={index}>
                                            <p className='text-3xl text-gray-500'>{item}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <ul className='flex items-center justify-center md:justify-start[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                                {
                                    toolsList.map((item, index) => (
                                        <li className='px-4' key={index}>
                                            <p className='text-3xl text-grey-500'>{item}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )}

                    {id === 6 && (
                        <div className='mt-5 relative'>
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData: animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }}/>
                            </div>
                            <MagicButton
                                title={copied ? 'Email copied' : 'Copy my email'}
                                icon={<IoCopyOutline/>}
                                position='left'
                                otherClasses='bg-[#161831]'
                                handleClick={handleCopy}
                            />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
