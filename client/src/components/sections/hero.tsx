import { Button } from "@/components/ui/button";
import { Play, Video } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import bannerVideo from '../assets/banner.mp4';
import { useRef, useEffect, useState } from "react";


export function HeroSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();
  const { ref: trustRef, isVisible: trustVisible } = useScrollReveal();
  const { ref: videoRef, isVisible: videoVisible } = useScrollReveal();

  const videoElementRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // useEffect(() => {
  //   const video = videoElementRef.current;
  //   if (video) {
  //     video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
  //   }
  // }, []);

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
    <>

      {/* Apple-Style Video Showcase Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm text-blue-800 font-medium">
                🏅 Proudly Serving 50+ Happy Clients
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              New approach.
              <br />
              <span className="text-blue-500">Even more impact.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how we transform startup stories into compelling visual narratives that drive results.
            </p>
          </div>

          {/* Clean Video Container */}
          <div className="relative w-full relative w-full aspect-[3/2] sm:aspect-[3/1] overflow-hidden rounded-2xl ">
            <video
              className="w-full h-full object-cover"
              src={bannerVideo}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          
          {/* Call to action below video */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8 text-lg">
              Ready to create your own success story?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 opacity-5 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200 opacity-5 rounded-full animate-pulse" style={{ animationDelay: '-3s' }} />
      </section>

    </>
  );
}
