import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-4">
            <div
                className={cn(
                    "mx-auto max-w-7xl transition-all duration-300",
                    isScrolled ? "opacity-95" : "opacity-100"
                )}
            >
                <div className="flex items-center justify-between rounded-full bg-[#E5E5E5] px-6 py-3 shadow-sm">

                    {/* LEFT — LOGO */}
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Clipmasters"
                            className="w-10 h-10 object-contain"
                        />
                        <span className="font-semibold text-lg text-black">
                            Clipmasters
                        </span>
                    </div>

                    {/* CENTER — DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                        <button
                            onClick={() => scrollToSection("services")}
                            className="hover:text-black transition"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection("packages")}
                            className="hover:text-black transition"
                        >
                            Prices
                        </button>
                        <button
                            onClick={() => scrollToSection("portfolio")}
                            className="hover:text-black transition"
                        >
                            Our Cases
                        </button>
                    </div>

                    {/* RIGHT — CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://calendly.com/clipmastersagency/strategycall",
                                    "_blank"
                                )
                            }
                            className="rounded-full bg-slate-900 text-white px-6 py-2 text-sm hover:bg-slate-800"
                        >
                            Book a Call →
                        </Button>
                    </div>

                    {/* MOBILE MENU */}
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden text-black"
                            >
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[320px]">
                            <div className="flex flex-col gap-6 mt-10">
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="text-lg font-medium"
                                >
                                    Services
                                </button>
                                <button
                                    onClick={() => scrollToSection("packages")}
                                    className="text-lg font-medium"
                                >
                                    Prices
                                </button>
                                <button
                                    onClick={() => scrollToSection("portfolio")}
                                    className="text-lg font-medium"
                                >
                                    Our Cases
                                </button>

                                <Button
                                    onClick={() =>
                                        window.open(
                                            "https://calendly.com/clipmastersagency/strategycall",
                                            "_blank"
                                        )
                                    }
                                    className="mt-6 rounded-full bg-slate-900 text-white py-3 hover:bg-slate-800"
                                >
                                    Book a Call
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}
