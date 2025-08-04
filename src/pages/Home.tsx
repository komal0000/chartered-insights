import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle, Quote, Star, Building2, Globe, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  // Hero slides with content and images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1920&auto=format&fit=crop",
      heading: "We go beyond expectations",
      subheading: "so you can, too",
      paragraph: "Partner with Nepal's leading Chartered Accountancy firm for comprehensive audit, tax, risk advisory, and business consulting services that drive sustainable growth.",
      buttons: [
        { text: "Explore Our Services", link: "/services", variant: "primary" },
        { text: "Request Consultation", link: "/contact", variant: "secondary" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920&auto=format&fit=crop",
      heading: "Transform with Trust",
      subheading: "Empowering Growth",
      paragraph: "Drive results with expert financial guidance and proven strategies. Our dedicated team ensures your business achieves its full potential through innovative solutions.",
      buttons: [
        { text: "Learn About Us", link: "/about", variant: "primary" },
        { text: "Our Services", link: "/services", variant: "secondary" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop",
      heading: "Excellence in Every Engagement",
      subheading: "Your Success, Our Mission",
      paragraph: "Experience partner-led service with international standards. We deliver comprehensive accounting solutions tailored for Nepal's dynamic business environment.",
      buttons: [
        { text: "Get Started", link: "/contact", variant: "primary" },
        { text: "View Industries", link: "/industries", variant: "secondary" }
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
      heading: "Strategic Financial Leadership",
      subheading: "Building Tomorrow's Success",
      paragraph: "Navigate complex financial challenges with confidence. Our expertise in audit, risk management, and strategic advisory drives sustainable business growth.",
      buttons: [
        { text: "Schedule Consultation", link: "/contact", variant: "primary" },
        { text: "Our Expertise", link: "/services", variant: "secondary" }
      ]
    }
  ];

  // Hero slider state
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Navigate to specific slide with content fade transition
  const goToSlide = (index) => {
    if (index === currentSlideIndex) return;
    
    // Fade out content
    setIsContentVisible(false);
    setIsAutoPlay(false);
    
    // Change slide after fade out
    setTimeout(() => {
      setCurrentSlideIndex(index);
      // Fade in new content
      setTimeout(() => setIsContentVisible(true), 50);
    }, 300);
    
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  // Navigate to previous slide
  const prevSlide = () => {
    const newIndex = currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1;
    goToSlide(newIndex);
  };

  // Navigate to next slide
  const nextSlide = () => {
    const newIndex = currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsContentVisible(true), 50);
      }, 300);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length, isAutoPlay]);
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
    { number: "100+", label: "Successful Client Engagements", icon: CheckCircle },
    { number: "15+", label: "Years of Professional Experience", icon: Award },
    { number: "50+", label: "Satisfied Business Partners", icon: Users },
    { number: "5+", label: "Key Industry Sectors", icon: Globe },
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
      {/* Hero Section with Dynamic Content and Background Slider */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentSlideIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            />
          ))}
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Slider Navigation Controls */}
        <div className="absolute inset-y-0 left-4 z-20 flex items-center">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>
        
        <div className="absolute inset-y-0 right-4 z-20 flex items-center">
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Slider Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex
                    ? 'bg-secondary scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className={`transition-all duration-300 ease-in-out ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h1 className="text-4xl lg:text-6xl font-montserrat font-bold mb-6 text-white">
                {slides[currentSlideIndex].heading}
                <span className="block text-secondary text-3xl lg:text-4xl mt-2">
                  {slides[currentSlideIndex].subheading}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-lato mb-10 opacity-90 max-w-3xl mx-auto text-white leading-relaxed">
                {slides[currentSlideIndex].paragraph}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {slides[currentSlideIndex].buttons.map((button, buttonIndex) => (
                  <Button
                    key={buttonIndex}
                    asChild
                    size="lg"
                    className={
                      button.variant === 'primary'
                        ? "bg-secondary hover:bg-secondary/90 text-primary font-montserrat font-semibold px-8 py-6 text-lg"
                        : "border-white text-primary hover:bg-white hover:text-primary font-montserrat font-semibold px-8 py-6 text-lg"
                    }
                    variant={button.variant === 'primary' ? 'default' : 'outline'}
                  >
                    <Link to={button.link}>
                      {button.text}
                      {button.variant === 'primary' && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Link>
                  </Button>
                ))}
              </div>
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
            <div key={index} className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00BFB2]/10 mr-3">
              <stat.icon className="w-6 h-6 text-[#00BFB2]" />
            </div>
            <div className="text-3xl lg:text-4xl font-montserrat font-bold text-[#00BFB2]">
              {stat.number}
            </div>
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
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="font-montserrat text-lg">{industry.title}</CardTitle>
                  </div>
                  <CardDescription className="font-lato" style={{fontSize: '0.97rem'}}>
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
      {/* <section className="py-20 bg-primary text-primary-foreground">
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
      </section> */}

    </div>
  );
};

export default Home;


