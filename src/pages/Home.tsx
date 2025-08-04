import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring compliance and transparency",
      icon: Shield,
    },
    {
      title: "Taxation Services",
      description: "Expert tax planning, compliance, and advisory services",
      icon: TrendingUp,
    },
    {
      title: "Business Consulting",
      description: "Strategic insights to drive growth and operational efficiency",
      icon: Users,
    },
    {
      title: "Risk Advisory",
      description: "Identify, assess, and mitigate business risks effectively",
      icon: Award,
    },
  ];

  const stats = [
    { number: "100+", label: "Successful Engagements" },
    { number: "15+", label: "Years of Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "5", label: "Industry Sectors" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              Empowering Businesses with
              <span className="text-secondary"> Financial Clarity</span>
            </h1>
            <p className="text-xl lg:text-2xl font-lato mb-8 text-primary-foreground/90">
              Full-service Chartered Accountancy firm delivering expert audit, taxation, 
              and strategic advisory services across Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="btn-hero font-montserrat font-semibold px-8 py-4">
                  Explore Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-secondary font-montserrat font-semibold px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-lato">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
              Comprehensive financial and advisory services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-lato text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
                Why Businesses Choose RKACA
              </h2>
              <div className="space-y-4">
                {[
                  "Partner-led engagements with senior professional oversight",
                  "100+ successful client engagements across industries",
                  "Technology-enabled solutions with real-time reporting",
                  "Ethical & transparent approach with clear fee structures",
                  "Comprehensive services under one roof",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="font-lato">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary-foreground">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="font-lato text-primary-foreground/80">
                    Let's discuss how we can help your business thrive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold w-full"
                    >
                      Schedule a Consultation
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Partner with Nepal's Trusted CA Firm
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who trust RKACA for their financial and advisory needs
          </p>
          <Link to="/about">
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-montserrat font-semibold px-8 py-4"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;