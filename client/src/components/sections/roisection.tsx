import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Target, Film, Star, Cpu } from "lucide-react";

export function RoiSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollReveal();

  const features = [
    {
      icon: Film,
      title: "Crisp Storytelling",
      description: "We make your product simple and irresistible to understand.",
      color: "text-primary bg-primary/10",
    },
    {
      icon: Cpu,
      title: "Next-Level Motion Design",
      description: "Graphics that feel like Silicon Valley — not cookie-cutter templates.",
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      icon: Star,
      title: "Premium Look & Feel",
      description: "Videos polished so well your customers instantly trust you.",
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: Target,
      title: "Built for ROI",
      description: "Every second engineered to move customers closer to buying.",
      color: "text-orange-500 bg-orange-500/10",
    },
  ];

  return (
    <section id="roi" className="py-20 bg-muted/30">
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
            Our Work Has One Goal: ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every second of a Clipmasters video is designed to do one thing — <br />
            <span className="font-semibold text-foreground">
              move your customer closer to buying.
            </span>
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
              className="text-center hover-lift bg-background p-8 border rounded-2xl shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                  feature.color
                )}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
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
          <div className="inline-flex items-center px-6 py-3 bg-background rounded-full shadow-sm">
            <span className="text-primary font-semibold">
              This isn’t “just editing.” This is your content machine.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
