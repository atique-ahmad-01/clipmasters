import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import demoVideo1 from '../assets/demo1.mp4';
import demoVideo2 from '../assets/demo2.mp4';
import demoVideo3 from '../assets/demo3.mp4';
import demoVideo4 from '../assets/demo4.mp4';

export function PortfolioSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: portfolioRef, isVisible: portfolioVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const portfolioItems = [
    {
      videoSrc: demoVideo1,
      title: "",
      description: "",
      alt: "",
    },
    {
      videoSrc: demoVideo2,
      title: "",
      description: "",
      alt: "",
    },
    {
      videoSrc: demoVideo3,
      title: "",
      description: "",
      alt: "",
    },
    {
      videoSrc: demoVideo4,
      title: "",
      description: "",
      alt: "",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-800",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Work Speaks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just tell — show. Let your visuals do the convincing.
          </p>
        </div>

        <div
          ref={portfolioRef}
          className={cn(
            "grid md:grid-cols-2 gap-8 mb-12 transition-all duration-800 delay-200",
            portfolioVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden border-4 border-gray-300 transition-transform duration-300 group-hover:scale-105">
                <video
                  src={item.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center px-4">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={cn(
            "text-center transition-all duration-800 delay-400",
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 mx-auto">
            <Play className="w-5 h-5" />
            <span>Watch Full Demo Reel</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
