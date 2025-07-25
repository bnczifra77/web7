import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-consulting-gradient text-white font-bold text-sm">
            <span className="absolute top-0.5 left-1">C</span>
            <span className="absolute bottom-0.5 right-1">C</span>
          </div>
          <span className="font-bold text-xl text-consulting-blue">Czifra Consulting</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-consulting-blue transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-consulting-blue transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-consulting-blue transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex border-consulting-blue text-consulting-blue hover:bg-consulting-blue hover:text-white">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
          <Button size="sm" className="bg-consulting-gradient hover:bg-consulting-blue">
            <Mail className="mr-2 h-4 w-4" />
            Get Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
