import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Laptop, Brain, Users, GraduationCap } from "lucide-react";

export function ClientsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: clientsRef, isVisible: clientsVisible } = useScrollReveal();

  const clientTypes = [
    {
      icon: Laptop,
      title: "SaaS & Tech Startups",
      description: "Innovative software solutions",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Brain,
      title: "B2B Platforms & AI Tools",
      description: "Next-gen business solutions",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Users,
      title: "Agencies & Launch Creators",
      description: "Marketing and creative agencies",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: GraduationCap,
      title: "Educators & Course Sellers",
      description: "Online education platforms",
      color: "text-orange-600 bg-orange-100",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-800",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Who We Work With</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help fast-growing brands and product-led teams explain, promote, and
            scale their offers with powerful video.
          </p>
        </div>

        <div
          ref={clientsRef}
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-800 delay-200",
            clientsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {clientTypes.map((client, index) => (
            <div
              key={client.title}
              className="text-center p-8 rounded-2xl border border-border hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4",
                  client.color
                )}
              >
                <client.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">{client.title}</h3>
              <p className="text-muted-foreground text-sm">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
