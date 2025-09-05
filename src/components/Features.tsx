import { BarChart3, Database, Shield, Users, Map, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Interactive Dashboards",
      description: "User-friendly charts, filters, and analytics. View heatmaps by state or locality to track election trends with real-time data visualization.",
      color: "text-primary"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Aggregation & Ranking",
      description: "Seamless integration of ECI election data and social media APIs. Rank posts, sentiments, and correlations for deeper insights.",
      color: "text-success"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Admin & Employee Workflows",
      description: "Super admin tools to manage accounts and authorize data publishing. Employee monitoring for efficient scraping and input.",
      color: "text-warning"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Role-based access, lawful captcha/proxy handling, and adherence to Indian data protection laws with full transparency.",
      color: "text-primary"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "Geographic Insights",
      description: "State-wise and locality-based analytics with interactive maps. Track regional trends and voter sentiment patterns across India.",
      color: "text-success"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Built on AWS/VPS with responsive designs for mobile and desktop. High-performance analytics that scale with your needs.",
      color: "text-warning"
    }
  ];

  return (
    <section id="features" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features for
            <span className="block text-primary">Data-Driven Decisions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines advanced analytics with user-friendly interfaces to deliver 
            actionable insights from election and social media data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Ready to Transform Your Analytics?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join political analysts, media teams, and researchers who trust our platform 
              for accurate, compliant election data insights.
            </p>
            <button className="btn-hero-primary">
              Explore Dashboards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;