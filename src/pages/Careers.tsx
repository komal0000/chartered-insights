import { Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Audit Associate",
      department: "Audit & Assurance",
      location: "Biratnagar",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead audit engagements and mentor junior team members in delivering high-quality audit services."
    },
    {
      title: "Tax Consultant",
      department: "Taxation",
      location: "Biratnagar",
      type: "Full-time",
      experience: "2-4 years",
      description: "Provide expert tax advisory services and ensure compliance with Nepal's taxation regulations."
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, certifications, and career advancement programs"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with experienced professionals in a supportive and inclusive workplace"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with opportunities to take on leadership roles"
    },
    {
      icon: Briefcase,
      title: "Diverse Experience",
      description: "Exposure to various industries and complex, challenging projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Build your career with Nepal's leading chartered accountancy firm
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="font-montserrat">{position.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {position.department} • {position.location} • {position.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-montserrat font-semibold text-secondary">
                        Experience Required:
                      </span>
                      <p className="font-lato text-muted-foreground">{position.experience}</p>
                    </div>
                    <p className="font-lato text-muted-foreground">{position.description}</p>
                    <Button className="btn-primary font-montserrat font-semibold">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
              Join a team that values growth, excellence, and professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-lato">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-6">
                Our Culture
              </h2>
              <div className="space-y-4 font-lato text-muted-foreground">
                <p>
                  At RKACA, we foster a culture of excellence, collaboration, and continuous learning. 
                  Our team members are our greatest asset, and we invest in their professional 
                  development and career growth.
                </p>
                <p>
                  We believe in maintaining a healthy work-life balance while delivering exceptional 
                  service to our clients. Our inclusive environment encourages innovation, 
                  professional integrity, and mutual respect.
                </p>
                <p>
                  Join us to be part of a team that makes a real difference in the financial 
                  success of businesses across Nepal.
                </p>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-montserrat font-bold mb-6">
                Ready to Start Your Career?
              </h3>
              <p className="font-lato mb-6">
                Even if you don't see a specific opening that matches your skills, 
                we're always interested in connecting with talented professionals.
              </p>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold w-full"
              >
                Send Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;