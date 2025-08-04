import { Shield, Calculator, TrendingUp, Users, FileCheck, BarChart3, Building2, Globe, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring compliance, transparency, and stakeholder confidence with international standards",
      features: [
        "Statutory Audits for all entity types",
        "Internal Audits and risk-based assessments",
        "Tax Audits and specialized compliance reviews",
        "Due Diligence for transactions and investments",
        "Forensic Audits and fraud investigations",
        "Regulatory Compliance audits"
      ]
    },
    {
      icon: Calculator,
      title: "Taxation Services",
      description: "Expert tax planning, compliance, and advisory services for corporate and individual clients across Nepal",
      features: [
        "Corporate Tax Planning and compliance",
        "Individual Tax Services and returns",
        "VAT Registration, compliance, and advisory",
        "Tax Litigation Support and representation",
        "Withholding Tax management",
        "Tax Advisory for complex transactions"
      ]
    },
    {
      icon: Users,
      title: "Risk Advisory",
      description: "Comprehensive enterprise risk management to identify, assess, and mitigate business risks strategically",
      features: [
        "Enterprise Risk Management framework",
        "Internal Controls design and testing",
        "Corporate Governance advisory",
        "Regulatory Compliance management",
        "Operational Risk assessment",
        "SOP development and implementation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description: "Strategic insights and business process optimization to drive sustainable growth and operational excellence",
      features: [
        "Strategic Business Planning",
        "Financial Analysis and modeling",
        "Process Optimization and automation",
        "Performance Management systems",
        "Market Entry strategies",
        "Organizational Development"
      ]
    },
    {
      icon: FileCheck,
      title: "Accounting & Outsourcing",
      description: "Complete accounting solutions including outsourced services for international and domestic clients",
      features: [
        "Full-service Bookkeeping",
        "Financial Reporting and MIS",
        "Management Accounting systems",
        "Payroll Processing and HR compliance",
        "Virtual CFO Services",
        "Offshore Accounting Services"
      ]
    },
    {
      icon: BarChart3,
      title: "Corporate Finance & Valuation",
      description: "Financial advisory services for strategic business decisions, transactions, and capital optimization",
      features: [
        "Business Valuation for all purposes",
        "Mergers & Acquisitions advisory",
        "Capital Restructuring strategies",
        "Investment Advisory services",
        "Financial Due Diligence",
        "Transaction Support services"
      ]
    }
  ];

  const industries = [
    {
      icon: Building2,
      title: "Healthcare & Medical",
      description: "Specialized services for hospitals, clinics, and healthcare organizations"
    },
    {
      icon: Globe,
      title: "Banking & Financial Services",
      description: "Comprehensive support for banks, financial institutions, and fintech companies"
    },
    {
      icon: Briefcase,
      title: "Manufacturing & Trading",
      description: "Tailored solutions for manufacturing units, trading houses, and export businesses"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Grant Thornton Style */}
      <section className="relative min-h-[65vh] p-4 flex items-center justify-center overflow-hidden">
        {/* Full-Screen Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop")`
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        
        {/* Professional Background with blend mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-primary/95 mix-blend-overlay z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-soft-light opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%2300BFB2' stroke-width='1' fill-opacity='0.03'%3E%3Cpath d='M60 15L105 60L60 105L15 60Z'/%3E%3Cpath d='M60 30L90 60L60 90L30 60Z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          {/* Professional floating elements */}
          <div className="absolute top-20 left-16 w-40 h-40 bg-secondary/8 rounded-2xl rotate-12 blur-sm animate-pulse"></div>
          <div className="absolute bottom-24 right-20 w-32 h-32 bg-primary-foreground/5 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/5 rounded-lg rotate-45 blur-md animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-montserrat font-bold text-primary-foreground mb-6 leading-tight">
                  Professional Services
                  <span className="block text-secondary text-3xl lg:text-4xl mt-3">
                    Beyond Expectations
                  </span>
                </h1>
                <p className="text-xl lg:text-xl text-justify font-lato text-primary-foreground/90 mb-8 leading-relaxed">
                  Comprehensive audit, tax, risk advisory, and business consulting services 
                  delivered with partner-level expertise and industry-leading methodologies.
                </p>
                {/* <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Audit & Assurance
                  </span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Tax Advisory
                  </span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Risk Management
                  </span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat font-semibold text-primary-foreground">
                    Business Consulting
                  </span>
                </div> */}
                {/* <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-montserrat font-semibold px-8 py-6 text-lg">
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button> */}
              </div>

              {/* Services Visual Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  {/* Top Row */}
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <Shield className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Audit & Assurance</h3>
                    <p className="text-sm text-primary-foreground/80">Comprehensive audit services with international standards</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <Calculator className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Tax Services</h3>
                    <p className="text-sm text-primary-foreground/80">Expert tax planning and compliance solutions</p>
                  </div>
                  
                  {/* Bottom Row */}
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300 ">
                    <Users className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Risk Advisory</h3>
                    <p className="text-sm text-primary-foreground/80">Enterprise risk management and controls</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20 hover:bg-primary-foreground/15 transition-all duration-300">
                    <TrendingUp className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-bold text-primary-foreground mb-2">Business Consulting</h3>
                    <p className="text-sm text-primary-foreground/80">Strategic insights for sustainable growth</p>
                  </div>
                </div>
                
                {/* Central Professional Element */}
                {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-secondary/10 backdrop-blur-md rounded-full p-8 border border-secondary/30">
                    <Building2 className="w-16 h-16 text-secondary animate-pulse" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-4">
              Our Core Service Portfolio
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-3xl mx-auto">
              Partner-led engagements across all service lines with technology-enabled solutions 
              and sector-specific expertise for sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift h-full bg-card/80 backdrop-blur-sm border-secondary/20">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat text-xl">{service.title}</CardTitle>
                  <CardDescription className="font-lato text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 font-lato">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg font-lato text-muted-foreground max-w-2xl mx-auto">
              Deep sector knowledge combined with comprehensive service delivery 
              for specialized industry requirements and regulatory compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift h-full text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{industry.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/industries">
                Explore All Industries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              Why Partner with RKACA?
            </h2>
            <p className="text-lg font-lato text-muted-foreground mb-12">
              Our commitment to excellence, ethical practices, and client success sets us apart
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-primary mb-3">Partner-Led Engagements</h3>
                <p className="font-lato text-muted-foreground">
                  Every assignment is directly supervised by a partner to ensure quality, 
                  accountability, and strategic insight from start to finish.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-primary mb-3">Technology-Enabled Solutions</h3>
                <p className="font-lato text-muted-foreground">
                  Cloud-based systems, secure client portals, and real-time reporting 
                  for enhanced efficiency and transparency.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-primary mb-3">Sector-Specific Expertise</h3>
                <p className="font-lato text-muted-foreground">
                  Deep industry knowledge across healthcare, banking, manufacturing, 
                  and development organizations.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-primary mb-3">Ethical & Transparent</h3>
                <p className="font-lato text-muted-foreground">
                  Clear fee structures, no hidden charges, and a commitment to 
                  confidentiality and professional integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Connect with our expert team to discuss how our comprehensive services 
            can support your business goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">
                Learn About Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
