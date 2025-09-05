import { Play, Mail, Globe, Instagram, Linkedin, Briefcase } from "lucide-react";
import logo from '../assets/logo.png';

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold">Clipmasters™</span>
          </div>
          <p className="text-gray-300 text-lg">
            Videos that sell. Stories that scale.
          </p>
        </div>

        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hello@clipmastrs.online</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Based remotely. Working worldwide.</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
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

        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>
            &copy; 2025 Clipmasters. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
