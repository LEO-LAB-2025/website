import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-basewhite py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-leo text-xl font-bold">L.E.O.</span>
            <p className="text-graygray-600 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-graygray-600 hover:text-leo transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-graygray-600 hover:text-leo transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}