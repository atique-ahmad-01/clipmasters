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
          title: "Strategy & Scripting",
          description: "We map your product, audience, and goals to craft a narrative that converts.",
      color: "text-primary bg-primary/10",
    },
    {
      icon: Cpu,
        title: "Storyboarding & Design",
        description: "High-end illustration and design systems aligned with your brand identity.",
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      icon: Star,
        title: "Animation & Voiceover",
        description: "Smooth, premium animation paired with professional voiceover talent.",
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: Target,
        title: "Delivery & Distribution",
        description: "Final assets optimized for LinkedIn, YouTube, landing pages, and paid campaigns.",
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
                      Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      We follow a clear, efficient, and proven workflow to create high-performing videos for SaaS, AI, and digital-first companies.
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
        </div>
      </div>
    </section>
  );
}
