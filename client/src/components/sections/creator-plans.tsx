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
        <section className="py-28 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headerRef}
                    className={cn(
                        "text-center mb-16 transition-all duration-700",
                        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
                        Why High-Growth Companies Choose Clipmasters
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Trusted by SaaS, AI, Fintech, and Web3 brands scaling through high-performing video.
                    </p>
                </div>

                {/* Benefit List */}
                <div
                    ref={listRef}
                    className={cn(
                        "grid gap-6 max-w-3xl mx-auto transition-all duration-700 delay-150",
                        listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="
                group
                flex items-start gap-4
                p-6 rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-blue-500/30
              "
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                            <p className="text-base sm:text-lg font-medium text-slate-800">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
