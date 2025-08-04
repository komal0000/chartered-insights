import { Users, Target, Award, Heart, BookOpen, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      description: "Member of the Institute of Chartered Accountants of Nepal (ICAN), with a proven track record in Audit & Assurance, Taxation, Risk Management, and Strategic Advisory. His career spans high-value engagements for healthcare providers, banks, manufacturing units, trading houses, and international development organizations."
    },
    {
      name: "CA Sunil Shrestha",
      title: "Leader – Internal Audit & Risk Advisory",
      description: "A specialist in internal audits, enterprise risk management, corporate governance, and SOP implementation, bringing deep technical expertise and practical solutions to complex organizational challenges."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              About Roshan Kumar & Associates
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Chartered Accountants committed to empowering businesses with financial clarity, 
              robust compliance, and strategic insights.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-6">
                Our Foundation
              </h2>
              <div className="space-y-6 font-lato text-muted-foreground">
                <p>
                  Roshan Kumar & Associates (RKACA) is a full-service Chartered Accountancy firm 
                  headquartered in Biratnagar, Nepal, delivering a complete range of Audit & Assurance, 
                  Taxation, Risk Advisory, Accounting, and Business Consulting services to businesses, 
                  not-for-profit organizations, and government entities.
                </p>
                <p>
                  We were founded with a vision to empower businesses with financial clarity, robust 
                  compliance, and strategic insights that help them navigate challenges and seize 
                  opportunities in a competitive, evolving marketplace.
                </p>
                <p>
                  By combining deep technical knowledge, sector-specific expertise, and a client-focused 
                  service approach, RKACA has become a trusted partner for organizations seeking 
                  professional, ethical, and growth-oriented solutions.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-2xl font-montserrat font-bold text-foreground mb-6">
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-lato text-muted-foreground">Founded</span>
                  <span className="font-montserrat font-semibold text-foreground">2010</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lato text-muted-foreground">Headquarters</span>
                  <span className="font-montserrat font-semibold text-foreground">Biratnagar, Nepal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lato text-muted-foreground">Team Members</span>
                  <span className="font-montserrat font-semibold text-foreground">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lato text-muted-foreground">Client Engagements</span>
                  <span className="font-montserrat font-semibold text-foreground">100+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Our Core Values & Client-First Philosophy
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
              The principles that guide our approach to serving clients and building lasting partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-lato">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
              Experienced professionals leading with expertise, integrity, and vision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-montserrat font-bold text-2xl">
                        {leader.name.charAt(3)}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="font-montserrat">{leader.name}</CardTitle>
                      <CardDescription className="font-lato text-secondary">
                        {leader.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-lato text-muted-foreground">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Leadership Areas */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-center">
              Specialist Leaders in Key Service Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Taxation & Regulatory Compliance",
                "Corporate Finance & Valuation",
                "Technology & IT Audit",
                "Business Process Outsourcing (BPO)",
                "Mergers & Acquisitions Advisory",
                "International Development Organizations"
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="font-lato">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Our People – Expertise that Drives Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-montserrat">Trailblazing Professional Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">
                  Our leadership team has delivered impactful assignments in Nepal and abroad, 
                  covering sectors such as healthcare, manufacturing, banking, technology, 
                  education, and development organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-montserrat">Multidisciplinary Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">
                  We combine the skills of Chartered Accountants, ACCA members, semi-qualified 
                  professionals, and industry specialists, enabling us to address diverse and 
                  complex challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-montserrat">Mentoring & Knowledge Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">
                  We maintain a strong mentorship culture, where experienced professionals guide 
                  the next generation, fostering growth, innovation, and technical mastery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-montserrat">Collaborative, Client-Centric Teamwork</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">
                  Our team works in close partnership with clients, ensuring our strategies align 
                  with their vision and objectives while delivering sustainable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;