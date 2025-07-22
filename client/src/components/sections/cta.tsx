import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Calendar, Play, CheckCircle, Clock, Shield } from "lucide-react";

export function CTASection() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const openCalendly = () => {
    window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustSignals = [
    {
      icon: CheckCircle,
      text: "200+ Happy Clients",
      color: "text-green-500",
    },
    {
      icon: Clock,
      text: "7-14 Day Delivery",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      text: "100% Satisfaction",
      color: "text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <div
          ref={ctaRef}
          className={cn(
            "transition-all duration-800",
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Your Next Video Funnel
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            No templates. No generic edits. Just high-converting visuals that work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={openCalendly}
              className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 min-w-[200px] justify-center"
              size="lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Request a Quote</span>
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 hover:border-primary transition-colors flex items-center space-x-2"
              size="lg"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo Reel</span>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground text-sm">
            {trustSignals.map((signal, index) => (
              <div
                key={signal.text}
                className="flex items-center space-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <signal.icon className={cn("w-5 h-5", signal.color)} />
                <span>{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
