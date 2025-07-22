import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const { ref: trustRef, isVisible: trustVisible } = useScrollReveal();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCalendly = () => {
    window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");
  };

  return (
    <section
      ref={heroRef}
      className="pt-24 pb-20 px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Floating background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary opacity-5 rounded-full animate-float" />
      <div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500 opacity-5 rounded-full animate-float"
        style={{ animationDelay: "-2s" }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={cn(
              "inline-flex items-center px-4 py-2 bg-muted rounded-full mb-8 transition-all duration-800",
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="text-sm text-muted-foreground font-medium">
              ✨ Trusted by 200+ Startups
            </span>
          </div>

          <h1
            ref={titleRef}
            className={cn(
              "text-5xl lg:text-7xl font-bold leading-tight mb-8 transition-all duration-800 delay-200",
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Your Startup Deserves a{" "}
            <span className="text-primary">Story That Sells</span>
          </h1>

          <p
            ref={subtitleRef}
            className={cn(
              "text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 transition-all duration-800 delay-400",
              subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            We Craft Premium Visual Sales Letters & Launch Videos That Convert.
            <br className="hidden lg:block" />
            Turn your ideas into scroll-stopping, high-converting videos that scale.
          </p>

          <div
            ref={ctaRef}
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-800 delay-600",
              ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Button
              onClick={openCalendly}
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 min-w-[200px] justify-center"
              size="lg"
            >
              <Video className="w-5 h-5" />
              <span>Get a VSL Quote</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const element = document.getElementById("portfolio");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 hover:border-primary transition-colors flex items-center space-x-2"
              size="lg"
            >
              <Play className="w-5 h-5" />
              <span>Watch Our Work</span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            ref={trustRef}
            className={cn(
              "transition-all duration-800 delay-800",
              trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="text-muted-foreground text-sm mb-6">
              Trusted by innovative companies
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded" />
              <div className="h-8 w-24 bg-muted rounded" />
              <div className="h-8 w-24 bg-muted rounded" />
              <div className="h-8 w-24 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
