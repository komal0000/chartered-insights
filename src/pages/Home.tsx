import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle, Quote, Star, Building2, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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

  // Define feature blocks for below hero
  const featureBlocks = [
    {
      title: "Expert Audit Services",
      icon: Shield,
      link: "/services/audit"
    },
    {
      title: "Strategic Tax Planning", 
      icon: TrendingUp,
      link: "/services/tax"
    },
    {
      title: "Risk Management",
      icon: Award,
      link: "/services/risk"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Content Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6">
              We go beyond expectations
              <span className="block text-secondary">so you can, too</span>
            </h1>
            <p className="text-xl lg:text-2xl font-lato mb-10 opacity-90 max-w-3xl mx-auto">
              Partner with Nepal's leading Chartered Accountancy firm for comprehensive audit, tax, risk advisory, and business consulting services that drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-montserrat font-semibold px-8 py-6 text-lg">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-montserrat font-semibold px-8 py-6 text-lg">
                <Link to="/contact">
                  Request Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="py-8 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-[#00BFB2]/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-montserrat font-bold text-[#00BFB2] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base font-lato text-black/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Carousel - Grant Thornton Style */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-4">
              Featured Content
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
              Insights and expertise to help your business thrive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift bg-card/80 backdrop-blur-sm border-secondary/20">
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-t-lg relative overflow-hidden">
                <Building2 className="absolute top-4 right-4 w-8 h-8 text-secondary" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                    INSIGHTS
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-lg">
                  Nepal's Business Growth Trends
                </CardTitle>
                <CardDescription className="font-lato">
                  How businesses are adapting to economic changes and leveraging financial strategies for sustainable growth in 2025.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift bg-card/80 backdrop-blur-sm border-secondary/20">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg relative overflow-hidden">
                <Shield className="absolute top-4 right-4 w-8 h-8 text-primary" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                    CASE STUDY
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-lg">
                  Healthcare Audit Excellence
                </CardTitle>
                <CardDescription className="font-lato">
                  Discover how our specialized healthcare audit services helped a medical institution achieve compliance and operational efficiency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-lift bg-card/80 backdrop-blur-sm border-secondary/20">
              <div className="aspect-video bg-gradient-to-br from-secondary/10 to-primary/10 rounded-t-lg relative overflow-hidden">
                <TrendingUp className="absolute top-4 right-4 w-8 h-8 text-secondary" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-montserrat font-semibold">
                    ADVISORY
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat text-lg">
                  Strategic Tax Planning Guide
                </CardTitle>
                <CardDescription className="font-lato">
                  Essential tax strategies for businesses to optimize their financial position and ensure regulatory compliance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Comprehensive Professional Services
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-3xl mx-auto">
              From audit and assurance to strategic advisory, we provide end-to-end solutions 
              tailored to your business needs with partner-level involvement in every engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift h-full group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{service.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg font-lato text-muted-foreground">
              Sector-specific solutions for diverse industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{industry.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for our commitment to excellence and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-montserrat font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-lato text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg font-lato text-muted-foreground">
              Real experiences from businesses we've helped succeed
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-secondary mb-4" />
                      <p className="font-lato text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold text-primary">
                          {testimonial.name}
                        </p>
                        <p className="font-lato text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Go Beyond Expectations?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Partner with RKACA for comprehensive accounting, audit, and business advisory services 
            that drive sustainable growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Banner as Slider */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="text-center">
                  {/* Enhanced Logo Display */}
                  <div className="mb-10 flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#00BFB2]">
                      {/* Replace with <img src={...} alt="Chartered Insights Logo" /> if you have a real logo */}
                      <span className="text-3xl font-montserrat font-extrabold text-[#015A77] tracking-tight select-none">CI</span>
                    </div>
                    <div className="mt-3 text-base font-montserrat font-bold text-[#015A77] tracking-widest uppercase">
                      Chartered Insights
                    </div>
                    <div className="w-16 border-b-2 border-[#00BFB2] mt-4 mb-2 opacity-60" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-montserrat font-bold mb-4 text-[#015A77]">
                    Schedule a Consultation Today
                  </h2>
                  <p className="text-lg font-lato mb-8 text-[#015A77]">
                    Connect with our expert team to discuss your specific business needs and discover 
                    how we can help you achieve your financial and operational goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-[#015A77] hover:bg-[#015A77]/90 text-white font-montserrat font-semibold px-8 py-6 text-lg">
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-[#015A77] text-[#015A77] hover:bg-[#015A77] hover:text-white font-montserrat font-semibold px-8 py-6 text-lg">
                      <Link to="/services">
                        View Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
              {/* Add more <CarouselItem>...</CarouselItem> here for more slides */}
            </CarouselContent>
            {/* Optionally add CarouselPrevious/CarouselNext if you want arrows */}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Home;


