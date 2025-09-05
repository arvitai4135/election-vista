import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-india-map.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">
              Compliant, Secure, and Scalable – Powered by Public Data APIs
            </span>
          </div>
          
          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Unlock Election Insights with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-success-light to-warning-light">
              Real-Time Social Analytics
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Aggregate, rank, and visualize data from ECI and major social platforms. 
            Empower your decisions with interactive dashboards, heatmaps, and trend correlations.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero-primary">
              Get Started
            </Button>
            <Button 
              className="btn-hero-secondary"
              onClick={() => scrollToSection('features')}
            >
              Learn More
            </Button>
          </div>
          
          {/* Stats/Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-success-light">28+</div>
              <div className="text-white/80">Indian States</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-light">4</div>
              <div className="text-white/80">Social Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-light">100%</div>
              <div className="text-white/80">Compliant</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;