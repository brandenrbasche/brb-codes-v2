"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/LampContainer";
import {FlipWords} from "@/components/ui/FlipWords";

export function LampSectionHeader() {
    const words = ["UI-obsessed", "Test-driven", "Responsive", "Mysterious"];

    return (
        <LampContainer className='z-10'>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl"
            ><FlipWords words={words} /><br />full-stack engineer based in NYC.
            </motion.h1>
        </LampContainer>
    );
}
