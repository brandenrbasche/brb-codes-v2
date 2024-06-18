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
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
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

    const leftList = ['React.js', 'TypeScript', 'Next.js'];
    const rightList = ['AWS', 'MongoDB', 'Express.js'];

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('brandenbasche@gmail.com');
        setCopied(true);
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
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
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col padding-x-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
                        {description}
                    </div>

                    {/*<div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>*/}
                    {/*    {description}*/}
                    {/*</div>*/}
                    {/*<div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">*/}
                    {/*    {title}*/}
                    {/*</div>*/}

                    {/*{id === 2 && (*/}
                    {/*    <GlobeDemo />*/}
                    {/*)}*/}

                    {id === 3 && (
                        <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
                            <div className='flex flex-col gap-3 lg:gap-8'>
                                {/*front end tools*/}
                                {leftList.map((item) => (
                                    <span key={item}
                                          className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'>
                                    {item}
                                </span>
                                ))}
                                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]'/>
                            </div>
                            <div className='flex flex-col gap-3 lg:gap-8'>
                                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]'/>
                                {/*back end tools*/}
                                {rightList.map((item) => (
                                    <span key={item}
                                          className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]'>
                                    {item}
                                </span>
                                ))}
                            </div>
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
