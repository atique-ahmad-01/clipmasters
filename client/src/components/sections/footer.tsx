import { Play, Mail, Globe, Instagram, Linkedin, Briefcase } from "lucide-react";
import logo from '../assets/logo.png';

export function FooterSection() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Logo & Tagline */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/10">
                            <img
                                src={logo}
                                alt="Clipmasters Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold">Clipmasters™</span>
                    </div>
                    <p className="text-gray-300 text-lg">
                        Leading B2B Animated Video Production Agency
                    </p>
                </div>

                {/* Contact Info */}
                <div className="text-center mb-8">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-12 text-gray-300">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" />
                            <span>hello@clipmasters.uk</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4" />
                            <span>Remote • Serving clients worldwide</span>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="https://www.instagram.com/clipmasters.uk?igsh=ajd3aHhieDY2c3cy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/clipmasters-uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>

                    <a
                        href="#"
                        className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    >
                        <Briefcase className="w-5 h-5" />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
                    <p>
                        &copy; 2025 Clipmasters. All rights reserved. | <a href="#" className="hover:text-white transition">Privacy Policy</a> | <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
