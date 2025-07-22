import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Rocket, Star, Crown, Check } from "lucide-react";

export function PackagesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: packagesRef, isVisible: packagesVisible } = useScrollReveal();

  const packages = [
    {
      icon: Rocket,
      name: "Starter VSL",
      price: "$1,000",
      description: "For lean startups or landing pages",
      features: [
        "Up to 60 seconds",
        "Script cleanup + voiceover",
        "Custom motion graphics",
        "Royalty-free music + HD delivery",
      ],
      note: "Perfect for beta launches and ad tests",
      popular: false,
      buttonVariant: "outline" as const,
    },
    {
      icon: Star,
      name: "Pro VSL",
      price: "$2,500",
      description: "For full-feature SaaS & website explainers",
      features: [
        "60–90 seconds",
        "Full scriptwriting + voiceover",
        "Motion design + product walkthrough",
        "2–3 revisions",
        "Ad-ready + website-ready formats",
      ],
      note: "Best value for growing teams",
      popular: true,
      buttonVariant: "default" as const,
    },
    {
      icon: Crown,
      name: "Ultimate VSL",
      price: "$5,000",
      description: "For funded startups and major launches",
      features: [
        "90–150 seconds",
        "Strategy call + research-based script",
        "Advanced motion graphics",
        "Voiceover (US/UK/Custom tone)",
        "Launch-ready assets + CTA versions",
      ],
      note: "Built to convert, scale, and raise capital",
      popular: false,
      buttonVariant: "outline" as const,
    },
  ];

  const openCalendly = () => {
    window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");
  };

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-800",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Signature VSL Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your startup's growth stage and budget
          </p>
        </div>

        <div
          ref={packagesRef}
          className={cn(
            "grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-800 delay-200",
            packagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={cn(
                "relative hover-lift transition-all duration-300",
                pkg.popular
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border border-border"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4",
                    pkg.popular
                      ? "bg-primary/10 text-primary"
                      : pkg.name === "Ultimate VSL"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-blue-100 text-blue-600"
                  )}
                >
                  <pkg.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {pkg.price}
                  <span className="text-lg text-muted-foreground font-normal">+</span>
                </div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-6">{pkg.note}</p>
                  <Button
                    onClick={openCalendly}
                    variant={pkg.buttonVariant}
                    className={cn(
                      "w-full py-3 px-6 rounded-full font-semibold transition-colors",
                      pkg.popular && "btn-primary text-white"
                    )}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
