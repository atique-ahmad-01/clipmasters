import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Video, Monitor, BookOpen, Megaphone } from "lucide-react";

export function ServicesSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
    const { ref: taglineRef, isVisible: taglineVisible } = useScrollReveal();

    const features = [
        {
            icon: Video,
            title: "Explainer Videos",
            description:
                "Clear and engaging videos that simplify your SaaS or digital product, helping users instantly understand your core value and features.",
        },
        {
            icon: Monitor,
            title: "Product Walkthroughs",
            description:
                "Deep-dive demos and app walkthroughs that show how your product works step-by-step, designed to increase activation and reduce confusion.",
        },
        {
            icon: BookOpen,
            title: "How-To & FAQ Videos",
            description:
                "Customer onboarding and help-center videos that answer common questions, reduce support load, and improve long-term retention.",
        },
        {
            icon: Megaphone,
            title: "Brand & Awareness Videos",
            description:
                "High-impact animated and typography-driven videos designed to boost brand visibility, deliver your message with clarity, and drive performance across paid and organic campaigns.",
        },
    ];

    return (
        <section
            id="services"
            className="relative py-32 overflow-hidden bg-[#020617]"
        >
            {/* Ambient multi-gradient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[160px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-24 transition-all duration-700",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
                        What We Do
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        Clipmasters is a full-cycle video production studio specializing in:
                    </p>
                </div>

                {/* Cards */}
                <div
                    ref={featuresRef}
                    className={cn(
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24 transition-all duration-700 delay-200",
                        featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="
                group relative rounded-3xl p-8
                bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-blue-500/[0.10]
                border border-white/10
                shadow-[0_0_40px_rgba(37,99,235,0.15)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_30px_90px_-30px_rgba(37,99,235,0.55)]
              "
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-blue-400" />
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tagline */}
                <div
                    ref={taglineRef}
                    className={cn(
                        "text-center transition-all duration-700 delay-400",
                        taglineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <p className="inline-block text-sm text-slate-300 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur">
                        Every video is built to drive measurable KPIs — conversion,
                        activation, retention, and revenue growth.
                    </p>
                </div>

            </div>
        </section>
    );
}
