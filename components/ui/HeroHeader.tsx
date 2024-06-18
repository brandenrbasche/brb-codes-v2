'use client';

import React from 'react';
import {motion} from "framer-motion";
import {FlipWords} from "@/components/ui/FlipWords";

const HeroHeader = () => {
    const words = ["UI-obsessed", "Test-driven"];

    return (
        <div>
            <h1 className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-7xl font-bold tracking-tight text-transparent lg:text-7xl">
                <FlipWords words={words}/><br/>full-stack engineer building cool experiences for cool people. Based in NYC.
            </h1>
        </div>
    );
};

export default HeroHeader;