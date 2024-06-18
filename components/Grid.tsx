import React from 'react';
// import { gridItems } from '@/data';
// import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";
import {LayoutGrid} from "@/components/ui/LayoutGrid";

const Grid = () => {
    return (
        <section id='experience' className='h-screen py-20 w-full'>
            <LayoutGrid cards={cards} />
        </section>

        // <section id='about'>
        //     <BentoGrid>
        //         {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg}, i) => (
        //             <BentoGridItem
        //                 id={id}
        //                 key={id}
        //                 title={title}
        //                 description={description}
        //                 className={className}
        //                 img={img}
        //                 imgClassName={imgClassName}
        //                 titleClassName={titleClassName}
        //                 spareImg={spareImg}
        //             />
        //         ))}
        //     </BentoGrid>
        // </section>
    );
};

const ExperienceOne = () => {
    return (
        <div>
            <div>
                <p className="font-bold text-4xl text-white">General Motors</p>
                <p className="font-normal text-base text-white">Full-Stack Engineer</p>
                <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    Developed a suite of brand-agnostic, reusable Angular components in TypeScript (e.g., interactive
                    vehicle selector carousel) to dynamically maintain visual identity across Chevrolet, Cadillac,
                    Buick,
                    and GMC brands within a single codebase.
                </p>
            </div>
            <div>
                <p className="font-bold text-4xl text-white">General Motors</p>
                <p className="font-normal text-base text-white">Full-Stack Engineer</p>
                <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                    Developed a suite of brand-agnostic, reusable Angular components in TypeScript (e.g., interactive
                    vehicle
                    selector carousel) to dynamically maintain visual identity across Chevrolet, Cadillac, Buick, and
                    GMC brands
                    within a single codebase.
                </p>
            </div>
        </div>
    )
};

const ExperienceTwo = () => {
    return(
        <div>
            <p className="font-bold text-4xl text-white">SvelteScope (Open-Source)</p>
            <p className="font-normal text-base text-white">Full-Stack Engineer</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Svelte testing tool called SvelteScope that helps developers isolate edge-case defects or hard-to-replicate test cases in their applications.
            </p>
        </div>
    )
};

const ExperienceThree = () => {
    return(
        <div>
            <p className="font-bold text-4xl text-white">SvelteScope (Open-Source)</p>
            <p className="font-normal text-base text-white">Full-Stack Engineer</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Svelte testing tool called SvelteScope that helps developers isolate edge-case defects or hard-to-replicate test cases in their applications.
            </p>
        </div>
    )
};

const cards = [
    {
        id: 1,
        title: "General Motors",
        content: <ExperienceOne />,
        className: 'md:col-span-2',
        thumbnail: "/General_Motors_Logo.svg"
    },
    {
        id: 2,
        title: "SvelteScope",
        content: <ExperienceTwo />,
        className: 'col-span-1',
        thumbnail: "/sveltescope-logo.png"
    },
    {
        id: 3,
        title: "Uber",
        content: <ExperienceThree />,
        className: 'col-span-1',
        thumbnail: "/Uber_Logo_Black_RGB.svg"
    },
];


export default Grid;