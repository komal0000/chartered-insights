import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle, Quote, Star, Building2, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring compliance and transparency with international standards",
      icon: Shield,
    },
    {
      title: "Taxation Services",
      description: "Expert tax planning, compliance, and advisory services for corporate and individual clients",
      icon: TrendingUp,
    },
    {
      title: "Risk Advisory",
      description: "Identify, assess, and mitigate business risks with strategic enterprise risk management",
      icon: Award,
    },
    {
      title: "Business Consulting",
      description: "Strategic insights and business process optimization to drive growth and operational efficiency",
      icon: Users,
    },
  ];

  const stats = [
    { number: "100+", label: "Successful Client Engagements" },
    { number: "15+", label: "Years of Professional Experience" },
    { number: "50+", label: "Satisfied Business Partners" },
    { number: "5+", label: "Key Industry Sectors" },
  ];

  const industries = [
    {
      title: "Healthcare & Medical",
      description: "Specialized accounting and audit services for hospitals, clinics, and healthcare providers",
      icon: Building2,
    },
    {
      title: "Banking & Finance",
      description: "Comprehensive financial services audit, risk management, and regulatory compliance",
      icon: Globe,
    },
    {
      title: "Manufacturing & Trading",
      description: "Cost accounting, inventory management, and operational efficiency solutions",
      icon: Target,
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "CFO, TechCorp Nepal",
      content: "RKACA's strategic insights have been instrumental in our financial planning. Their partner-led approach and technology-enabled solutions provide real-time insights that drive our business decisions.",
      rating: 5,
    },
    {
      name: "Rajesh Thapa",
      position: "Managing Director, Himalayan Exports",
      content: "Outstanding audit services with exceptional attention to detail. The team's professionalism, transparency, and sector-specific expertise sets them apart from other CA firms in Nepal.",
      rating: 5,
    },
    {
      name: "Sita Rai",
      position: "Founder, Green Energy Solutions",
      content: "From startup guidance to ongoing strategic advisory, RKACA has been our trusted partner. Their comprehensive services under one roof and ethical approach have supported our growth journey.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      position: "Director, Alpine Manufacturing",
      content: "Reliable, ethical, and comprehensive service delivery. RKACA's risk advisory and internal audit services helped us navigate complex regulatory challenges and strengthen our governance framework.",
      rating: 5,
    },
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
              risk advisory, and strategic business consulting services across Nepal.
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
                  Schedule Consultation
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
            <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
              Comprehensive financial and advisory services tailored to your business needs, 
              delivered by experienced professionals with partner-led engagement oversight
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

      {/* Industries We Serve */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
              Sector-specific expertise across key industries with tailored solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift border-border bg-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-lato text-center">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
              Trusted by businesses across Nepal for reliable financial and advisory services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                    <Card className="h-full border-border hover-lift">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <Quote className="w-8 h-8 text-secondary flex-shrink-0" />
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground font-lato text-lg leading-relaxed mb-6">
                          "{testimonial.content}"
                        </p>
                        <div className="border-t pt-4">
                          <h4 className="font-montserrat font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground font-lato">
                            {testimonial.position}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
                  "100+ successful client engagements across multiple industries",
                  "Technology-enabled solutions with cloud-based systems and real-time reporting",
                  "Ethical & transparent approach with clear fee structures and no hidden charges",
                  "Comprehensive services under one roof - audit, tax, risk advisory, and consulting",
                  "Sector-specific expertise in healthcare, banking, manufacturing, and development organizations",
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
                    Let's discuss how we can help your business thrive with our comprehensive financial and advisory services
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
          <p className="text-xl font-lato mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who trust Roshan Kumar & Associates for their financial, 
            audit, taxation, and strategic advisory needs. Experience partner-led service excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-montserrat font-semibold px-8 py-4"
              >
                Learn More About Us
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-semibold px-8 py-4"
              >
                View Our Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;