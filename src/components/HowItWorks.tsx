import { UserPlus, Database, BarChart3, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-8 h-8" />,
      title: "Sign Up/Login",
      description: "Create an account with role-based access (user, employee, admin). Quick setup with email verification and secure authentication.",
      color: "from-primary to-primary-light"
    },
    {
      number: "02", 
      icon: <Database className="w-8 h-8" />,
      title: "Data Integration",
      description: "Connect to public APIs for real-time feeds from ECI and social platforms. Automated data collection with compliance monitoring.",
      color: "from-success to-success-light"
    },
    {
      number: "03",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analyze & Rank",
      description: "Use our tools to filter, correlate, and visualize data. Advanced algorithms rank sentiment, trends, and regional patterns.",
      color: "from-warning to-warning-light"
    },
    {
      number: "04",
      icon: <FileText className="w-8 h-8" />,
      title: "Insights & Actions", 
      description: "Generate reports, heatmaps, and dashboards for informed decisions. Export data and share insights with your team.",
      color: "from-primary to-success"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with our platform in four simple steps. From setup to insights, 
            we've designed the process to be intuitive and efficient.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connection Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-4 -translate-y-1/2 z-0"></div>
              )}
              
              {/* Card */}
              <div className="relative bg-card rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className={`absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-3xl p-12 border border-border/50">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join researchers, analysts, and organizations using our platform to unlock 
              data-driven insights from election and social media trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero-primary">
                Start Free Trial
              </button>
              <button className="btn-hero-secondary border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;