import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">EA</span>
            </div>
            <span className="font-bold text-xl text-primary">Election Analytics</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#features" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#how-it-works" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
              How It Works
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-secondary-foreground hover:text-primary">
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign Up Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="#how-it-works" 
                className="text-secondary-foreground hover:text-primary transition-colors font-medium"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Login
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground justify-start">
                  Sign Up Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;