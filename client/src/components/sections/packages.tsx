import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export function PackagesSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

    /* ===================== DATA ===================== */

    const featuresList = [
        "Explainer Video (60–90s)",
        "Deep-Dive Product Demo Video",
        "Promo Video / Short VSL",
        "How-To & FAQ Videos",
        "Brand Awareness & Micro Content",
        "Scriptwriting / Script Editing",
        "Storyboarding",
        "Professional Voiceover",
        "Multi-Platform Exports",
        "Distribution Strategy",
        "Unlimited Revisions",
    ];

    const packages = [
        {
            name: "Basic",
            price: 5900,
            highlight: false,
            included: [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        },
        {
            name: "Advanced",
            price: 9900,
            highlight: true,
            included: [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0],
        },
        {
            name: "Premium",
            price: 17700,
            highlight: false,
            included: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
    ];

    const videoPricing = [
        {
            type: "Explainer Video",
            durations: [
                { label: "60s", price: 900 },
                { label: "90s", price: 1200 },
                { label: "180s", price: 1800 },
            ],
            description:
                "Includes script, storyboard, high-end animation, VO, sound design.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "2 days",
                "Voiceover": "2 days",
                "Animation": "3–4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Deep-Dive Demo Video",
            durations: [
                { label: "3 min", price: 1400 },
                { label: "5 min", price: 1700 },
            ],
            description:
                "Includes UI capture, product animation, VO, branding, SFX.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "2 days",
                "Voiceover": "2 days",
                "Animation": "3–4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Promo Video / VSL",
            durations: [
                { label: "60s", price: 1000 },
                { label: "90s", price: 1400 },
            ],
            description:
                "High-conversion script + narration + motion graphics.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "1 day",
                "Voiceover": "2 days",
                "Animation": "3–4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Brand Awareness Videos",
            durations: [
                { label: "10x30s", price: 3000 },
                { label: "10x60s", price: 4500 },
            ],
            description:
                "Perfect for ads, socials, teasers, and organic growth.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "2 days",
                "Voiceover": "3 days",
                "Animation": "20 days",
                "Audio & Delivery": "3 days",
            },
        },
        {
            type: "Walkthrough Video",
            durations: [
                { label: "60s", price: 500 },
                { label: "120s", price: 1000 },
            ],
            description:
                "Straightforward UI walkthrough with clean labeling.",
            timeline: {
                "Scriptwriting": "1 day",
                "Storyboarding & Illustrations": "1 day",
                "Voiceover": "1 day",
                "Animation": "3–4 days",
                "Audio & Delivery": "2 days",
            },
        },
    ];

    const discountedPrice = (price: number) => Math.round(price * 1.2);

    const [selectedVideoType, setSelectedVideoType] = useState("Explainer Video");
    const [selectedDuration, setSelectedDuration] = useState("60s");

    const selectedVideo = videoPricing.find(v => v.type === selectedVideoType)!;
    const selectedPrice =
        selectedVideo.durations.find(d => d.label === selectedDuration)?.price ?? 0;

    const openCalendly = () =>
        window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");

    /* ===================== JSX ===================== */

    return (
        <section id="packages" className="bg-white py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-20 transition-all duration-700",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
                        Our Signature Packages
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose the perfect package for your business growth stage and budget
                    </p>
                </div>

                {/* ===================== DESKTOP TABLE ===================== */}
                <div className="hidden lg:block rounded-3xl border border-gray-200 overflow-hidden mb-28">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-6 text-left text-gray-500">
                                    Pick your plan
                                </th>
                                {packages.map(pkg => (
                                    <th key={pkg.name} className="px-6 py-6 text-center">
                                        <div
                                            className={cn(
                                                "relative rounded-2xl p-6",
                                                pkg.highlight && "bg-slate-900 text-white scale-105"
                                            )}
                                        >
                                            {pkg.highlight && (
                                                <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                                                    Most Popular
                                                </span>
                                            )}

                                            <div className="text-sm line-through text-gray-400">
                                                ${discountedPrice(pkg.price)}
                                            </div>

                                            <div className="text-3xl font-bold mt-1">
                                                ${pkg.price}
                                            </div>

                                            <span className="text-xs text-blue-500 block mt-1">
                                                20% OFF
                                            </span>

                                            <Button
                                                onClick={openCalendly}
                                                className={cn(
                                                    "mt-4 rounded-full",
                                                    pkg.highlight
                                                        ? "bg-white text-black"
                                                        : "border border-gray-400 bg-transparent text-black"
                                                )}
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {featuresList.map((feature, i) => (
                                <tr key={feature} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                                    <td className="px-6 py-4">{feature}</td>
                                    {packages.map(pkg => (
                                        <td key={pkg.name} className="text-center">
                                            {pkg.included[i] ? (
                                                <Check className="mx-auto w-4 h-4 text-slate-800" />
                                            ) : (
                                                <X className="mx-auto w-4 h-4 text-gray-400" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ===================== MOBILE CARDS ===================== */}
                <div className="grid gap-6 lg:hidden mb-28">
                    {packages.map(pkg => (
                        <div
                            key={pkg.name}
                            className={cn(
                                "rounded-2xl border p-6",
                                pkg.highlight
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "bg-white text-slate-900 border-gray-200"
                            )}
                        >
                            {pkg.highlight && (
                                <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-xl font-semibold mb-1">{pkg.name}</h3>

                            <div className="text-sm line-through text-gray-400">
                                ${discountedPrice(pkg.price)}
                            </div>

                            <div className="text-3xl font-bold mt-1">${pkg.price}</div>

                            <span className="text-xs text-blue-500 block mt-1">
                                20% OFF
                            </span>

                            <div className="mt-4 space-y-2 text-sm">
                                {featuresList.map((feature, i) => (
                                    <div key={feature} className="flex items-center gap-2">
                                        {pkg.included[i] ? (
                                            <Check className="w-4 h-4 text-blue-500" />
                                        ) : (
                                            <X className="w-4 h-4 text-gray-400" />
                                        )}
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={openCalendly}
                                className={cn(
                                    "w-full mt-6 rounded-full",
                                    pkg.highlight
                                        ? "bg-white text-black"
                                        : "border border-gray-400 bg-transparent text-black"
                                )}
                            >
                                Get Started
                            </Button>
                        </div>
                    ))}
                </div>

                {/* ===================== VIDEO PRICING ===================== */}
                <div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-center mb-12">
                        Video Pricing by Types
                    </h2>

                    <div className="flex justify-center gap-6 flex-wrap mb-10">
                        {videoPricing.map(video => (
                            <button
                                key={video.type}
                                onClick={() => {
                                    setSelectedVideoType(video.type);
                                    setSelectedDuration(video.durations[0].label);
                                }}
                                className={cn(
                                    "text-sm sm:text-base font-medium pb-1 border-b-2",
                                    selectedVideoType === video.type
                                        ? "border-blue-500 text-blue-600"
                                        : "border-transparent text-gray-500"
                                )}
                            >
                                {video.type}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
                        <h3 className="text-2xl font-semibold text-center mb-2">
                            {selectedVideo.type}
                        </h3>

                        <p className="text-center text-gray-600 mb-6">
                            {selectedVideo.description}
                        </p>

                        <table className="w-full border-collapse mb-8">
                            <tbody>
                                {Object.entries(selectedVideo.timeline).map(([service, days]) => (
                                    <tr key={service} className="border-t">
                                        <td className="py-3">{service}</td>
                                        <td className="py-3 font-medium">{days}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex flex-col items-center gap-4">
                            <select
                                value={selectedDuration}
                                onChange={(e) => setSelectedDuration(e.target.value)}
                                className="border rounded-md px-4 py-2 text-sm"
                            >
                                {selectedVideo.durations.map(d => (
                                    <option key={d.label} value={d.label}>
                                        {d.label}
                                    </option>
                                ))}
                            </select>

                            <div className="text-lg font-semibold">
                                Total: ${selectedPrice}
                            </div>

                            <Button
                                onClick={openCalendly}
                                className="rounded-full px-10 py-3 bg-slate-900 text-white"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
