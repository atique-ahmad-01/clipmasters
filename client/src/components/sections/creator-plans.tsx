import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

export function CreatorPlansSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
    const { ref: listRef, isVisible: listVisible } = useScrollReveal();

    const benefits = [
        "Production speed & enterprise-level communication",
        "Complete ownership of script, design, and animation",
        "KPI-driven video frameworks used by SaaS, AI, and Web3 leaders",
        "End-to-end delivery with revisions included",
        "Multi-format delivery for cross-channel distribution",
    ];

    return (
        <section className="py-24 bg-white relative">
            {/* Optional: Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">

                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-14 transition-all duration-800",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Why High-Growth Companies Choose Clipmasters
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Trusted by SaaS, AI, Fintech, and Web3 brands scaling through high-performing video.
                    </p>
                </div>

                {/* Benefit List */}
                <div
                    ref={listRef}
                    className={cn(
                        "grid gap-6 max-w-3xl mx-auto transition-all duration-800 delay-200",
                        listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="
                group
                flex items-start space-x-4 
                p-6 rounded-2xl border 
                backdrop-blur-xl 
                bg-white/20
                border-white/30 
                shadow-md 
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl 
                hover:bg-white/30
                hover:border-white/40
                hover:backdrop-blur-2xl
              "
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <CheckCircle className="w-7 h-7 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                            <p className="text-lg font-medium text-gray-800">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
