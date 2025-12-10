import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

export function PackagesSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: packagesRef, isVisible: packagesVisible } = useScrollReveal();
    const { ref: pricingRef, isVisible: pricingVisible } = useScrollReveal();

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
            name: "BASIC PACKAGE",
            price: "$5,900",
            originalPrice: "$7,700",
            highlight: false,
            included: [true, true, true, false, false, true, true, true, false, false, false],
            buttonVariant: "outline" as const,
        },
        {
            name: "ADVANCED PACKAGE",
            price: "$9,900",
            originalPrice: "$11,700",
            highlight: true,
            included: [true, true, true, false, true, true, true, true, false, true, false],
            buttonVariant: "default" as const,
        },
        {
            name: "PREMIUM PACKAGE",
            price: "$17,700",
            originalPrice: "$22,000",
            highlight: false,
            included: [true, true, true, true, true, true, true, true, true, true, true],
            buttonVariant: "outline" as const,
        },
    ];

    const videoPricing = [
        {
            type: "Explainer Video",
            durations: [
                { label: "60s", price: 900 },
                { label: "90s", price: 1200 },
                { label: "180s", price: 1000 },
            ],
            description: "Includes script, storyboard, high-end animation, VO, sound design.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "2 days",
                "Voiceover": "2 days",
                "Animation": "3-4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Deep-Dive Demo Video",
            durations: [
                { label: "3 min", price: 1400 },
                { label: "5 min", price: 1700 },
            ],
            description: "Includes UI capture, product animation, VO, branding, SFX.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "2 days",
                "Voiceover": "2 days",
                "Animation": "3-4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Promo Video / VSL",
            durations: [
                { label: "60s", price: 1000 },
                { label: "90s", price: 1400 },
            ],
            description: "High-conversion script + narration + motion graphics.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "1 day",
                "Voiceover": "2 days",
                "Animation": "3-4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Brand Awareness Videos",
            durations: [
                { label: "10x30s", price: 3000 },
                { label: "10x60s", price: 4500 },
            ],
            description: "Perfect for ads, socials, teasers, and organic growth.",
            timeline: {
                "Scriptwriting": "2 days",
                "Storyboarding & Illustrations": "1 day",
                "Voiceover": "1 day",
                "Animation": "3-4 days",
                "Audio & Delivery": "2 days",
            },
        },
        {
            type: "Walkthrough Video",
            durations: [
                { label: "60s", price: 500 },
                { label: "120s", price: 1000 },
            ],
            description: "Straightforward UI walkthrough with clean labeling and smooth transitions.",
            timeline: {
                "Scriptwriting": "1 day",
                "Storyboarding & Illustrations": "1 day",
                "Voiceover": "1 day",
                "Animation": "3-4 days",
                "Audio & Delivery": "2 days",
            },
        },
    ];

    const [selectedVideoType, setSelectedVideoType] = useState(videoPricing[0].type);
    const selectedVideo = videoPricing.find((v) => v.type === selectedVideoType)!;

    const openCalendly = () => {
        window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");
    };

    return (
        <section id="packages" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-16 transition-all duration-800",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Our Signature Packages
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Choose the perfect package for your business growth stage and budget
                    </p>
                </div>

                {/* Packages Table */}
                <div
                    ref={packagesRef}
                    className={cn(
                        "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-800 delay-200",
                        packagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={cn(
                                "relative p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300",
                                pkg.highlight
                                    ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white"
                                    : "bg-white text-black"
                            )}
                        >
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                                <p
                                    className={cn(
                                        "line-through mt-1",
                                        pkg.highlight ? "text-white/70" : "text-muted-foreground"
                                    )}
                                >
                                    {pkg.originalPrice}
                                </p>
                                <p className="text-3xl font-bold mt-1">{pkg.price}</p>
                            </div>

                            <div className="mb-6">
                                {featuresList.map((feature, idx) => {
                                    const included = pkg.included[idx];
                                    return (
                                        <div key={feature} className="flex items-center mb-2">
                                            {included ? (
                                                <Check
                                                    className={cn(
                                                        "w-5 h-5 mr-3 flex-shrink-0",
                                                        pkg.highlight ? "text-white" : "text-green-500"
                                                    )}
                                                />
                                            ) : (
                                                <X
                                                    className={cn(
                                                        "w-5 h-5 mr-3 flex-shrink-0",
                                                        pkg.highlight ? "text-white/70" : "text-red-500"
                                                    )}
                                                />
                                            )}
                                            <span>{feature}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="text-center">
                                <Button
                                    onClick={openCalendly}
                                    variant={pkg.buttonVariant}
                                    className={cn(
                                        "w-full py-3 px-6 rounded-full font-semibold mt-2",
                                        pkg.highlight && "bg-white text-blue-700"
                                    )}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Pricing by Types */}
                <div
                    ref={pricingRef}
                    className={cn(
                        "mt-20 transition-all duration-800",
                        pricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Video Pricing by Types
                    </h2>
                    <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                        Choose the plan and deadlines based on your needs and goals.
                    </p>

                    {/* Video Type Tabs */}
                    <div className="flex justify-center space-x-4 mb-8 flex-wrap">
                        {videoPricing.map((video) => (
                            <button
                                key={video.type}
                                onClick={() => setSelectedVideoType(video.type)}
                                className={cn(
                                    "px-6 py-3 rounded-full font-medium border transition-all duration-200 hover:scale-105",
                                    selectedVideoType === video.type
                                        ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                                        : "bg-white text-black border-gray-300 hover:bg-gray-100"
                                )}
                            >
                                {video.type}
                            </button>
                        ))}
                    </div>

                    {/* Selected Video Pricing Card */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
                        {/* Video Heading */}
                        <h3 className="text-2xl font-bold mb-2 text-center">{selectedVideo.type}</h3>
                        <p className="font-semibold text-lg mb-4 text-center">{selectedVideo.description}</p>

                        {/* Timeline Table */}
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-2 px-3">Service</th>
                                        <th className="py-2 px-3">Estimated Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(selectedVideo.timeline).map(([service, days]) => (
                                        <tr key={service} className="border-b hover:bg-gray-50">
                                            <td className="py-2 px-3">{service}</td>
                                            <td className="py-2 px-3">{days}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Duration Selector */}
                        <div className="flex justify-end items-center mt-4 space-x-4">
                            <span className="font-medium">Select Duration:</span>
                            <select className="border rounded px-3 py-2">
                                {selectedVideo.durations.map((d) => (
                                    <option key={d.label} value={d.label}>
                                        {d.label} - ${d.price}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="text-center mt-6">
                            <Button
                                onClick={openCalendly}
                                className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
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
