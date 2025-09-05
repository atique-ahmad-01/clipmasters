import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { PenTool, Sparkles, Mic, Rocket } from "lucide-react";

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal();
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollReveal();

  const features = [
    {
      icon: PenTool,
      title: "Scriptwriting that hooks",
      description: "Strategic narratives that capture attention and drive action",
      color: "text-primary bg-primary/10",
    },
    {
      icon: Sparkles,
      title: "Motion graphics & animation",
      description: "Premium visual effects that elevate your brand story",
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      icon: Mic,
      title: "Voiceover & sound design",
      description: "Professional audio production included in every package",
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: Rocket,
      title: "Launch-ready assets",
      description: "Built for websites, ads, landing pages, and demos",
      color: "text-orange-500 bg-orange-500/10",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header */}
    <div
      ref={headerRef}
      className={cn(
        "text-center mb-16 transition-all duration-800",
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Clipmasters?</h2>
      <div className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed space-y-4">
        <p><strong>Our Work Has One Goal: ROI</strong></p>
        <p>
          Every second of a Clipmasters video is designed to do one thing:<br />
          👉 Move your customer closer to buying.
        </p>
        <p><strong>That means:</strong></p>
        <ul className="list-disc list-inside text-left inline-block">
          <li>Crisp storytelling that makes your product simple.</li>
          <li>Motion graphics that feel like Silicon Valley design, not cheap templates.</li>
          <li>Videos that look so premium your customers will trust you instantly.</li>
        </ul>
        <p>
          This isn’t “just editing.”<br />
          <strong>This is your content machine.</strong>
        </p>
      </div>
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
          Scripted. Designed. Voiced. Delivered.
        </span>
      </div>
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
        Your entire Visual Sales Letter — done-for-you — so you can scale, sell,
        and launch without lifting a finger. 
      </p>
    </div>
  </div>
</section>

  );
}
