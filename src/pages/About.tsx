import { Users, Target, Award, Lightbulb, Shield, Heart, Building2, Globe, Briefcase, BookOpen, Handshake, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Partner-Led Engagements",
      description: "Every assignment is directly supervised by a partner or senior professional to ensure quality, accountability, and strategic insight from start to finish."
    },
    {
      icon: Award,
      title: "Culture of Excellence",
      description: "We adhere to international best practices while delivering solutions tailored to the Nepali business landscape, ensuring both compliance and practical value."
    },
    {
      icon: Heart,
      title: "Client-First Mindset",
      description: "We prioritize client goals and challenges, providing customized solutions that not only meet legal and regulatory requirements but also support business performance."
    },
    {
      icon: Handshake,
      title: "Long-Term Relationships",
      description: "Our focus extends beyond one-time engagements. We cultivate lasting partnerships built on trust, reliability, and consistent delivery."
    },
    {
      icon: Target,
      title: "Personal Ownership",
      description: "Every team member takes ownership of their work, ensuring timely execution, high quality, and measurable results for clients."
    },
    {
      icon: BookOpen,
      title: "Commitment to Learning & Growth",
      description: "We invest in our people by offering training, professional certifications, and leadership opportunities to continually enhance our service quality."
    },
  ];

  const leadership = [
    {
      name: "CA Roshan Kumar Yadav",
      title: "Founder & Managing Partner",
      description: "Member of the Institute of Chartered Accountants of Nepal (ICAN), with a proven track record in Audit & Assurance, Taxation, Risk Management, and Strategic Advisory. His career spans high-value engagements for healthcare providers, banks, manufacturing units, trading houses, and international development organizations.",
      expertise: ["Strategic Advisory", "Risk Management", "Healthcare Audit", "International Standards"]
    },
    {
      name: "CA Sunil Shrestha", 
      title: "Leader – Internal Audit & Risk Advisory",
      description: "A specialist in internal audits, enterprise risk management, corporate governance, and SOP implementation, bringing deep technical expertise and practical solutions to complex organizational challenges.",
      expertise: ["Internal Audit", "Enterprise Risk", "Corporate Governance", "SOP Implementation"]
    }
  ];

  const achievements = [
    { number: "100+", label: "Successful Client Engagements", description: "Across multiple industries and business sizes" },
    { number: "15+", label: "Years of Professional Experience", description: "Deep expertise in Nepalese and international markets" },
    { number: "50+", label: "Satisfied Business Partners", description: "Long-term relationships built on trust and results" },
    { number: "5+", label: "Key Industry Sectors", description: "Specialized knowledge across diverse industries" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Grant Thornton Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-primary/95">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-25"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%2300BFB2' stroke-width='2' opacity='0.1'%3E%3Cpath d='M100 20L180 100L100 180L20 100Z'/%3E%3Cpath d='M100 40L160 100L100 160L40 100Z'/%3E%3Cpath d='M100 60L140 100L100 140L60 100Z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          {/* Professional floating elements */}
          <div className="absolute top-24 left-20 w-48 h-48 bg-secondary/6 rounded-3xl rotate-12 blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-24 w-40 h-40 bg-primary-foreground/4 rounded-2xl blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-secondary/4 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-montserrat font-bold text-primary-foreground mb-8 leading-tight">
                  About Us
                  <span className="block text-secondary text-3xl lg:text-4xl mt-4 font-semibold">
                    Excellence in Every Engagement
                  </span>
                </h1>
                <p className="text-xl font-lato text-left lg:text-justify text-primary-foreground/90 mb-8 leading-relaxed tracking-normal">
                  Roshan Kumar & Associates (RKACA) is Nepal's premier full-service Chartered Accountancy firm, delivering audit, tax, risk advisory, and business consulting services with unwavering commitment to excellence and client success.
                </p>
                </div>

                {/* Values Visual Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Core Values Cards */}
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <Users className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Partner-Led</h3>
                    <p className="text-sm text-primary-foreground/80">Direct partner supervision ensuring quality and strategic insight</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <Award className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Excellence</h3>
                    <p className="text-sm text-primary-foreground/80">International best practices tailored for Nepal market</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300 ">
                    <Target className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Client-First</h3>
                    <p className="text-sm text-primary-foreground/80">Customized solutions prioritizing client goals</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <Lightbulb className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Innovation</h3>
                    <p className="text-sm text-primary-foreground/80">Technology-enabled solutions and continuous learning</p>
                  </div>
                </div>
                
                {/* Central RKACA Element */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-secondary/15 backdrop-blur-md rounded-full p-8 border border-secondary/40">
                    <Building2 className="w-16 h-16 text-secondary animate-pulse" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Our Story & Vision
            </h2>
            <p className="text-lg font-lato text-muted-foreground mb-8">
              Founded with a vision to empower businesses with financial clarity, robust compliance, and strategic insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-primary mb-6">Our Mission</h3>
              <p className="font-lato text-muted-foreground mb-6 leading-relaxed">
                RKACA was founded with a vision to empower businesses with financial clarity, robust compliance, 
                and strategic insights that help them navigate challenges and seize opportunities in a competitive, 
                evolving marketplace.
              </p>
              <p className="font-lato text-muted-foreground mb-6 leading-relaxed">
                By combining deep technical knowledge, sector-specific expertise, and a client-focused service approach, 
                RKACA has become a trusted partner for organizations seeking professional, ethical, and growth-oriented solutions.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-card rounded-2xl p-8 border border-secondary/20">
              <h3 className="text-xl font-montserrat font-bold text-primary mb-6">Why Businesses Choose RKACA</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-lato text-muted-foreground">Proven Expertise – 100+ successful client engagements across industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-lato text-muted-foreground">Partner-Level Involvement – Senior professionals lead every assignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-lato text-muted-foreground">Comprehensive Services – One firm for all audit, tax, risk, and advisory needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-lato text-muted-foreground">Technology-Enabled Solutions – Cloud-based systems and real-time reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="font-lato text-muted-foreground">Ethical & Transparent – Clear fee structures and commitment to confidentiality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Our Core Values & Philosophy
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-3xl mx-auto">
              Our client-first philosophy and commitment to excellence drives everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{value.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals leading with expertise, integrity, and strategic vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat text-xl">{leader.name}</CardTitle>
                      <p className="font-lato text-secondary font-semibold">{leader.title}</p>
                    </div>
                  </div>
                  <CardDescription className="font-lato text-base leading-relaxed mb-4">
                    {leader.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-montserrat font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Our Track Record
            </h2>
            <p className="text-lg font-lato text-muted-foreground">
              Numbers that reflect our commitment to client success and professional excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-montserrat font-bold text-secondary mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-montserrat font-semibold text-primary mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm font-lato text-muted-foreground">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Experience the RKACA difference – where professional excellence meets client-focused service delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">
                Schedule Consultation
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
      </section> */}
    </div>
  );
};

export default About;