"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-red-500/30 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.22),_transparent_35%),rgba(22,8,8,0.9)] px-5 py-3 shadow-[0_0_30px_rgba(127,29,29,0.22)] backdrop-blur-xl">
                <a href="#" className="text-lg font-bold tracking-tight text-white">
                    <span className="text-red-400">My Portfolio</span>
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-zinc-400 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-full p-2 md:hidden"
                    aria-label="Toggle navigation"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {open && (
                <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}