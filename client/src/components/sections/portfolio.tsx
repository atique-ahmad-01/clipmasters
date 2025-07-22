import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export function PortfolioSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: portfolioRef, isVisible: portfolioVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "SaaS Product Demo",
      description: "90-second conversion masterpiece",
      alt: "Professional video production setup with cameras and lighting equipment",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "AI Platform Launch",
      description: "Ultimate VSL that raised $2M",
      alt: "Modern startup office with collaborative workspace and computers",
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Agency Case Study",
      description: "300% conversion increase",
      alt: "Diverse startup team collaborating around a table with laptops",
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Course Launch VSL",
      description: "$1M+ in pre-orders",
      alt: "Elegant presentation setup with premium brand materials and modern workspace",
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
              className="hover-lift cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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
