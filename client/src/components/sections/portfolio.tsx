import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { X } from "lucide-react";

import demo0Video from "../assets/demo0.mp4";
import demo00Video from "../assets/demo00.mp4";
import demo1Video from "../assets/demo1.mp4";
import demo2Video from "../assets/demo2.mp4";
import demo3Video from "../assets/demo3.mp4";
import demo5Video from "../assets/demo5.mp4";

import demo0Poster from "../assets/demo0.png";
import demo00Poster from "../assets/demo00.jpg";
import demo1Poster from "../assets/demo1.jpg";
import demo2Poster from "../assets/demo2.jpg";
import demo3Poster from "../assets/demo3.png";
import demo5Poster from "../assets/demo5.jpg";

export function PortfolioSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: portfolioRef, isVisible: portfolioVisible } = useScrollReveal();

    const [modalVideo, setModalVideo] = useState<string | null>(null);

    const portfolioItems = [
        { videoSrc: demo0Video, poster: demo0Poster, title: "Phia - Launch Video Ad" },
        { videoSrc: demo00Video, poster: demo00Poster, title: "Emma - Presentation Video" },
        { videoSrc: demo1Video, poster: demo1Poster, title: "Booking.com - YouTube Ad" },
        { videoSrc: demo2Video, poster: demo2Poster, title: "Duolingo - Brand Awareness" },
        { videoSrc: demo3Video, poster: demo3Poster, title: "Loveable - SaaS Marketing Video" },
        { videoSrc: demo5Video, poster: demo5Poster, title: "Opal App - YouTube Ad" },
    ];

    const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.load();
        }
    };

    return (
        <section
            id="portfolio"
            className="relative py-28 bg-gradient-to-b from-[#050505] via-[#0a0f1f] to-[#0b1024]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-20 transition-all duration-700",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
                        Our Cases
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        This is what we do. This is what we love.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div
                    ref={portfolioRef}
                    className={cn(
                        "grid md:grid-cols-2 gap-10 transition-all duration-700 delay-200",
                        portfolioVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {portfolioItems.map((item, index) => {
                        const videoRef = useRef<HTMLVideoElement>(null);

                        return (
                            <div
                                key={item.title}
                                className="group cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={() => setModalVideo(item.videoSrc)}
                                onMouseEnter={() => handleMouseEnter(videoRef)}
                                onMouseLeave={() => handleMouseLeave(videoRef)}
                            >
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black transition-transform duration-300 group-hover:scale-[1.03] group-hover:border-blue-500/40">
                                    <video
                                        ref={videoRef}
                                        src={item.videoSrc}
                                        poster={item.poster}
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-80 object-cover"
                                    />
                                </div>

                                <h3 className="mt-4 text-center text-white font-medium">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Modal */}
                {modalVideo && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
                        onClick={() => setModalVideo(null)}
                    >
                        <div className="relative w-full max-w-5xl">
                            <button
                                className="absolute top-4 right-4 text-white z-50"
                                onClick={() => setModalVideo(null)}
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <video
                                src={modalVideo}
                                controls
                                autoPlay
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
