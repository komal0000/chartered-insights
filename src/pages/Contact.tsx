import { Mail, Phone, MapPin, Clock, Send, Building2, MessageSquare, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["Main Office: Biratnagar, Nepal", "Branch offices across key business districts"],
      primary: "Biratnagar, Nepal"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+977-XXXX-XXXX (Main)", "+977-XXXX-XXXX (Direct)"],
      primary: "+977-XXXX-XXXX"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@rkaca.com.np", "consult@rkaca.com.np"],
      primary: "info@rkaca.com.np"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      primary: "9:00 AM - 6:00 PM"
    }
  ];

  const services = [
    "Audit & Assurance Services",
    "Tax Planning & Compliance", 
    "Risk Advisory & Internal Controls",
    "Business Consulting & Strategy",
    "Accounting & Outsourcing",
    "Corporate Finance & Valuation"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Grant Thornton Style */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-primary/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-soft-light opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cg fill='none' stroke='%2300BFB2' stroke-width='1.5' opacity='0.1'%3E%3Ccircle cx='75' cy='75' r='20'/%3E%3Ccircle cx='75' cy='75' r='40'/%3E%3Ccircle cx='75' cy='75' r='60'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          {/* Contact floating elements */}
          <div className="absolute top-20 left-16 w-40 h-40 bg-secondary/8 rounded-2xl rotate-45 blur-sm animate-pulse"></div>
          <div className="absolute bottom-24 right-20 w-32 h-32 bg-primary-foreground/5 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/5 rounded-lg rotate-12 blur-md animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-montserrat font-bold text-primary-foreground mb-6 leading-tight">
                  Contact Us
                  <span className="block text-secondary text-3xl lg:text-4xl mt-3">
                    Let's Start the Conversation
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl font-lato text-primary-foreground/90 mb-8 leading-relaxed">
                  Ready to take your business to the next level? Connect with our expert team for 
                  comprehensive accounting, audit, and advisory services tailored to your needs.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Free Consultation
                  </span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Expert Guidance
                  </span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Customized Solutions
                  </span>
                </div>
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-montserrat font-semibold px-8 py-6 text-lg">
                  <Link to="#contact-form">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Contact Visual Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Contact Methods */}
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <Phone className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Call Us</h3>
                    <p className="text-sm text-primary-foreground/80">Direct line to our experts</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300 mt-8">
                    <Mail className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Email Us</h3>
                    <p className="text-sm text-primary-foreground/80">Professional correspondence</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300 -mt-4">
                    <MapPin className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Visit Us</h3>
                    <p className="text-sm text-primary-foreground/80">Biratnagar office location</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300 mt-4">
                    <Calendar className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Schedule</h3>
                    <p className="text-sm text-primary-foreground/80">Book consultation meeting</p>
                  </div>
                </div>
                
                {/* Central RKACA Logo Element */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-secondary/15 backdrop-blur-md rounded-full p-8 border border-secondary/40">
                    <Building2 className="w-16 h-16 text-secondary animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to connect with our professional team for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift h-full text-center bg-card/80 backdrop-blur-sm border-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-lato text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                    <p className="font-montserrat font-semibold text-primary text-sm">
                      {info.primary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <p className="font-lato text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="font-montserrat font-semibold">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="font-montserrat font-semibold">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" className="mt-2" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-montserrat font-semibold">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@company.com" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="font-montserrat font-semibold">Phone Number</Label>
                    <Input id="phone" placeholder="+977-XXXX-XXXXXX" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="font-montserrat font-semibold">Company/Organization</Label>
                    <Input id="company" placeholder="Your company name" className="mt-2" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="font-montserrat font-semibold">Service Interest</Label>
                    <select id="service" className="w-full mt-2 p-3 border border-input rounded-md bg-background">
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="font-montserrat font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business needs and how we can help you..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 font-montserrat font-semibold">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              
              {/* Additional Information */}
              <div className="space-y-8">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <MessageSquare className="w-12 h-12 text-secondary mb-4" />
                    <CardTitle className="font-montserrat text-xl">Why Choose RKACA?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 font-lato">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Partner-led engagements with direct oversight</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Technology-enabled solutions and real-time reporting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive services under one roof</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Clear fee structures with no hidden charges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span>100+ successful client engagements across industries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <Clock className="w-12 h-12 text-secondary mb-4" />
                    <CardTitle className="font-montserrat">Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 font-lato">
                      <div className="flex justify-between items-center">
                        <span>Email Inquiries:</span>
                        <span className="font-semibold text-secondary">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Phone Calls:</span>
                        <span className="font-semibold text-secondary">Same day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Consultation Booking:</span>
                        <span className="font-semibold text-secondary">Within 48 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg font-lato text-muted-foreground">
              Located in the heart of Biratnagar's business district
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-secondary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">
                    RKACA Main Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat font-semibold">Address</p>
                        <p className="font-lato text-muted-foreground">
                          Biratnagar, Nepal<br />
                          (Specific address to be updated)
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat font-semibold">Business Hours</p>
                        <p className="font-lato text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-montserrat font-semibold">Direct Line</p>
                        <p className="font-lato text-muted-foreground">
                          +977-XXXX-XXXXXX
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-xl p-8 text-center">
                  <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h4 className="font-montserrat font-bold text-primary mb-2">Easy to Find</h4>
                  <p className="font-lato text-muted-foreground mb-4">
                    Conveniently located in Biratnagar's main business district with easy access 
                    to public transportation and parking facilities.
                  </p>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust RKACA for their accounting, 
            audit, and business advisory needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
              <Link to="#contact-form">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;