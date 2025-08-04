import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Roshan Kumar & Associates",
        "Chartered Accountants",
        "Biratnagar, Province 1, Nepal"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+977-21-XXXXXX",
        "+977-98XXXXXXXX (Mobile)"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@rkaca.com.np",
        "roshan.yadav@rkaca.com.np"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Sunday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: By Appointment Only"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Get in touch with our experienced team of chartered accountants. 
              We're here to help with all your financial and advisory needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="font-lato text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat">Send us a Message</CardTitle>
                <CardDescription className="font-lato">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+977-XXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                    <option value="">Select a service</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="tax">Taxation Services</option>
                    <option value="risk">Risk Advisory</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="accounting">Accounting & Outsourcing</option>
                    <option value="finance">Corporate Finance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>
                <Button className="w-full font-montserrat font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat">Our Office</CardTitle>
                  <CardDescription className="font-lato">
                    Visit us at our head office in Biratnagar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-montserrat font-semibold mb-2">Address</h4>
                      <p className="font-lato text-muted-foreground">
                        Roshan Kumar & Associates<br />
                        Chartered Accountants<br />
                        Biratnagar, Province 1<br />
                        Nepal
                      </p>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold mb-2">Get Directions</h4>
                      <p className="font-lato text-muted-foreground text-sm">
                        Our office is easily accessible by public transportation and has parking facilities available.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-montserrat">Why Choose RKACA?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Partner-led engagements with senior professional oversight",
                      "100+ successful client engagements across industries",
                      "Technology-enabled solutions with real-time reporting",
                      "Ethical & transparent approach with clear fee structures",
                      "Comprehensive services under one roof"
                    ].map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <span className="font-lato text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Contact Roshan Kumar & Associates today and let our experienced team help 
            you achieve your financial and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold">
              Schedule a Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-montserrat font-semibold"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;