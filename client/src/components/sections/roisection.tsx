import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export function RoiSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

    const steps = [
        {
            step: "01",
            title: "Strategy & Scripting",
            description:
                "We map your product, audience, and goals to craft a narrative that converts.",
        },
        {
            step: "02",
            title: "Storyboarding & Design",
            description:
                "High-end illustration and design systems aligned with your brand identity.",
        },
        {
            step: "03",
            title: "Animation & Voiceover",
            description:
                "Smooth, premium animation paired with professional voiceover talent.",
        },
        {
            step: "04",
            title: "Delivery & Distribution",
            description:
                "Final assets optimized for LinkedIn, YouTube, landing pages, and paid campaigns.",
        },
    ];

    return (
        <section id="process" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-24 transition-all duration-700",
                        headerVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                    )}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                        Our Process
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We follow a clear, efficient, and proven workflow to create
                        high-performing videos for SaaS, AI, and digital-first companies.
                    </p>
                </div>

                {/* Cards */}
                <div
                    ref={cardsRef}
                    className={cn(
                        "grid md:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-700 delay-150",
                        cardsVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-6"
                    )}
                >
                    {steps.map((step) => (
                        <div
                            key={step.title}
                            className="relative rounded-3xl p-8 overflow-hidden text-white shadow-2xl"
                        >
                            {/* Multi-tone gradient background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#60a5fa,transparent_40%),radial-gradient(circle_at_80%_0%,#2563eb,transparent_45%),radial-gradient(circle_at_50%_80%,#1e40af,transparent_50%),linear-gradient(180deg,#0f172a,#020617)] blur-[2px]" />

                            {/* Content */}
                            <div className="relative z-10">

                                {/* Top panel */}
                                <div className="bg-white/90 text-slate-900 rounded-2xl p-4 mb-4 backdrop-blur-md">
                                    <span className="text-xs font-semibold text-blue-600">
                                        Step {step.step}
                                    </span>
                                    <h3 className="text-sm font-semibold mt-1">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Description – now directly under */}
                                <p className="text-sm text-slate-200 leading-relaxed">
                                    {step.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
