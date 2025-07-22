import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Youtube, Mic, Heart } from "lucide-react";

export function CreatorPlansSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: plansRef, isVisible: plansVisible } = useScrollReveal();
  const { ref: noteRef, isVisible: noteVisible } = useScrollReveal();

  const plans = [
    {
      icon: Heart,
      title: "TikTok & IG Reels",
      price: "$200",
      period: "/mo+",
      description: "Professional editing for social content",
      color: "bg-pink-100 text-pink-500",
    },
    {
      icon: Youtube,
      title: "YouTube Shorts",
      price: "$500",
      period: "/mo+",
      description: "Complete packages for channel growth",
      color: "bg-red-100 text-red-500",
    },
    {
      icon: Mic,
      title: "Podcast + Clips",
      price: "$800",
      period: "/mo+",
      description: "Full repurposing and clip creation",
      color: "bg-purple-100 text-purple-500",
    },
  ];

  const openCalendly = () => {
    window.open("https://calendly.com/clipmastersagency/strategycall", "_blank");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-800",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Creator Plans</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Still a creator? We've got you. Trimmed-down packages for UGC creators,
            YouTubers, and personal brands.
          </p>
        </div>

        <div
          ref={plansRef}
          className={cn(
            "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-800 delay-200",
            plansVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {plans.map((plan, index) => (
            <Card
              key={plan.title}
              className="text-center hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
                    plan.color
                  )}
                >
                  <plan.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground font-normal">
                    {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={openCalendly}
                  variant="outline"
                  className="w-full py-3 px-6 rounded-full font-medium hover:border-primary transition-colors"
                  size="lg"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={noteRef}
          className={cn(
            "text-center mt-12 transition-all duration-800 delay-400",
            noteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-muted-foreground">
            Ask us about monthly content retainer deals.
          </p>
        </div>
      </div>
    </section>
  );
}
