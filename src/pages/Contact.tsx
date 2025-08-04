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
        "Biratnagar, Nepal",
        "Province 1, Morang"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+977-21-XXXXXX",
        "+977-98XXXXXXXX"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@rkaca.com.np",
        "roshan@rkaca.com.np"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Sunday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: By Appointment"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Get in touch with our team of expert chartered accountants
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="font-lato">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="font-lato">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-lato">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-lato">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+977-98XXXXXXXX" />
                    </div>
                    <div>
                      <Label htmlFor="company" className="font-lato">Company/Organization</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div>
                      <Label htmlFor="service" className="font-lato">Service Interest</Label>
                      <Input id="service" placeholder="Audit, Tax, Consulting, etc." />
                    </div>
                    <div>
                      <Label htmlFor="message" className="font-lato">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your requirements..."
                        rows={5}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full btn-primary font-montserrat font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-lift">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <CardTitle className="font-montserrat">{info.title}</CardTitle>
                      </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-muted-foreground font-lato">
              Located in the heart of Biratnagar for easy accessibility
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-medium">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="font-lato text-muted-foreground">
                Interactive map will be integrated here
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;