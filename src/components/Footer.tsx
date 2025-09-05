import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Dive into Data?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Start your journey with comprehensive election analytics and social media insights. 
              Sign up today and transform how you understand electoral trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Sign Up Today!
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">EA</span>
              </div>
              <span className="font-bold text-xl">Election Analytics</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Advanced Election Analytics platform providing comprehensive insights 
              through public data integration and social media analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-primary-foreground/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal & Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Data Compliance</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80">contact@electionanalytics.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-foreground/60 mt-1" />
                <span className="text-primary-foreground/80">
                  Technology Hub<br />
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Advanced Election Analytics. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-primary-foreground/60 text-sm">
                🔒 We only use public data and comply with all applicable laws
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;