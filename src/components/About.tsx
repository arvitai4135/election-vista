import { CheckCircle, Globe, Lock, Zap } from 'lucide-react';

const About = () => {
  const benefits = [
    "Real-time analytics and heatmaps for state/local views",
    "Customizable dashboards for users, admins, and teams", 
    "Secure workflows with role-based access controls",
    "Full compliance with Indian data protection laws",
    "Integration with ECI and major social platforms",
    "Advanced ranking algorithms for data correlation"
  ];

  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Comprehensive Coverage",
      description: "All 28+ Indian states and territories"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy First",
      description: "Only public data, fully compliant"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Processing",
      description: "Live data feeds and instant updates"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Transforming Election Data into 
              <span className="block text-primary">Actionable Insights</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our platform integrates publicly available election data from the Election Commission of India (ECI) 
                with social media trends from Facebook, Instagram, LinkedIn, and X/Twitter. Using advanced algorithms, 
                we rank and correlate datasets to reveal insights on voter sentiment, campaign impacts, and regional hotspots.
              </p>
              
              <p>
                Designed for transparency and ease, our system ensures full compliance with data protection laws, 
                avoiding any private or restricted information. Every data point is sourced from public APIs and 
                processed through secure, auditable workflows.
              </p>
            </div>
            
            {/* Benefits List */}
            <div className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual/Stats */}
          <div className="fade-in-up">
            <div className="bg-gradient-to-br from-primary/5 to-success/5 rounded-3xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
                Platform Highlights
              </h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border/30">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Trust Badge */}
              <div className="mt-8 text-center p-6 bg-success/5 rounded-xl border border-success/20">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Lock className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Privacy Guarantee</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We only use public data and comply with all applicable laws including IT Act 2000 and Digital Personal Data Protection Act 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;