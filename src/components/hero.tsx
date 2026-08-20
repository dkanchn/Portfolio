"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />
            </div>

            <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-2xl"
                >
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-red-400">
                        Computer Engineering Graduate
                    </p>

                    <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
                        Hi, <span className="text-zinc-400">I'm</span><br />
                        <span className="text-red-400">Kanchana Duangcharee</span>
                    </h1>

                    {/*
          <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I’m a Computer Engineering graduate interested in Data Analytics,
            Data Engineering, and building technology that solves real-world
            problems.
          </p>
          */}

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-full border border-red-500 bg-red-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-500/10"
                        >
                            Explore my projects
                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                        {/*
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white"
                        >
                            GitHub
                        </a>
*/}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto mt-14 w-full max-w-md md:mt-0"
                >
                    <div className="absolute -inset-5 rounded-[36px] bg-red-500/10 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[32px] border border-red-500/25 bg-[#120b0b]/80 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">


                        <img
                            src="images/profile/profile.jpg"
                            alt="Profile illustration"
                            className="h-[420px] w-full rounded-[24px] border border-red-500/10 object-cover bg-[#0d0d0d]"
                        />


                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
                >
                    <ArrowDown className="animate-bounce text-zinc-600" size={20} />
                </motion.div>
            </div>
        </section>
    );
}