import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import heroGif from "../assets/herogif.gif";
import heroImage1 from "../assets/heroimage1.jpg";
import heroImage2 from "../assets/heroimage2.jpg";
import heroTallGif from "../assets/hero9x16.gif";

// TRUSTED LOGOS
import miich from "../assets/miich.png";
import bitlease from "../assets/bitlease.png";
import louislimited from "../assets/louislimited.png";
import milo from "../assets/milo.png";
import sfxclub from "../assets/sfxclub.png";
import earnit from "../assets/earnit.png";

const words = ["SaaS", "AI", "Tech", "Web3", "Digital Companies"];

const logos = [
    miich,
    bitlease,
    louislimited,
    milo,
    sfxclub,
    earnit,
];

export function HeroSection() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setVisible(true);
            }, 300);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    const openCalendly = () => {
        window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");
    };

    const scrollToPortfolio = () => {
        const el = document.getElementById("portfolio");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative bg-white overflow-hidden pt-24 pb-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                        Leading B2B Animated Video Production Agency
                    </span>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6 tracking-tight">
                        Premium Video Marketing Solutions for{" "}
                        <span
                            className={`inline-block text-blue-500 transition-all duration-500 ease-in-out ${
                                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                            }`}
                        >
                            {words[index]}
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed">
                        The most innovative companies don’t just build great products —
                        they tell great stories. Clipmasters helps SaaS, AI, and Tech
                        companies create video content that explains and converts.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                        <Button
                            onClick={openCalendly}
                            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-9 py-4 rounded-full font-medium text-lg"
                            size="lg"
                        >
                            Schedule a Call
                        </Button>

                        <Button
                            variant="outline"
                            onClick={scrollToPortfolio}
                            className="w-full sm:w-auto border-2 border-slate-900 text-slate-900 hover:bg-slate-50 px-9 py-4 rounded-full font-medium text-lg"
                            size="lg"
                        >
                            View Our Work
                        </Button>
                    </div>
                </div>

                {/* RIGHT VISUAL COLLAGE */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-4 lg:gap-x-0 items-center">
                        <div className="flex flex-col gap-4 lg:translate-x-10">
                            <div className="w-full lg:w-[85%] aspect-video rounded-xl overflow-hidden shadow-xl">
                                <img src={heroImage1} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full lg:w-[85%] aspect-video rounded-xl overflow-hidden shadow-2xl">
                                <img src={heroGif} className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full lg:w-[85%] aspect-video rounded-xl overflow-hidden shadow-xl">
                                <img src={heroImage2} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="flex justify-center lg:-ml-6">
                            <div className="w-48 h-[340px] sm:w-52 sm:h-[400px] lg:w-56 lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                                <img src={heroTallGif} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TRUSTED BY */}
            <div className="mt-20">
                <p className="text-center text-sm text-slate-500 mb-10">
                    Trusted by Companies worldwide
                </p>

                <div className="trusted-wrapper">
                    <div className="trusted-fade-left" />
                    <div className="trusted-fade-right" />

                    <div className="trusted-track">
                        {Array.from({ length: 10 }).map((_, i) =>
                            logos.map((logo, j) => (
                                <div className="trusted-item" key={`${i}-${j}`}>
                                    <img src={logo} alt="" />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
