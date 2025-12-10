import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Video, Monitor, BookOpen, Megaphone } from "lucide-react"; // updated icons

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
            iconColor: "text-blue-500",
        },
        {
            icon: Monitor,
            title: "Product Walkthroughs",
            description:
                "Deep-dive demos and app walkthroughs that show how your product works step-by-step, designed to increase activation and reduce confusion.",
            iconColor: "text-purple-500",
        },
        {
            icon: BookOpen,
            title: "How-To & FAQ Videos",
            description:
                "Customer onboarding and help-center videos that answer common questions, reduce support load, and improve long-term retention.",
            iconColor: "text-green-500",
        },
        {
            icon: Megaphone,
            title: "Brand & Awareness Videos",
            description:
                "High-impact animated and typography-driven videos designed to boost brand visibility, deliver your message with clarity, and drive performance across paid and organic campaigns.",
            iconColor: "text-orange-500",
        },
    ];

    return (
        <section
            id="services"
            className="relative py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"
        >
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-16 transition-all duration-800",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6 text-white"
                        style={{ textShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                    >
                        What We Do
                    </h2>
                    <p className="text-white text-xl max-w-3xl mx-auto">
                        Clipmasters is a full-cycle video production studio specializing in:
                    </p>
                </div>

                {/* Features */}
                <div
                    ref={featuresRef}
                    className={cn(
                        "grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-800 delay-200",
                        featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="text-center p-8 rounded-2xl shadow-lg border border-white/20 backdrop-blur-md bg-white/20 transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                                    feature.iconColor
                                )}
                                style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                            >
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-white/80 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Tagline */}
                <div
                    ref={taglineRef}
                    className={cn(
                        "text-center transition-all duration-800 delay-400",
                        taglineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full shadow-lg">
                        <span className="text-white font-semibold">
                            Every video is built to drive measurable KPIs — conversion, activation, retention, and revenue growth.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
