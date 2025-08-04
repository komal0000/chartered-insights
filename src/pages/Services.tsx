import { Shield, Calculator, TrendingUp, Users, FileCheck, BarChart3, Building2, Globe, Briefcase } from "lucide-react";
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
        "Financial Modeling and projections",
        "Investment Advisory services",
        "Transaction Support services"
      ]
    }
  ];

  const industriesServed = [
    {
      icon: Building2,
      title: "Healthcare & Medical",
      description: "Specialized services for hospitals, clinics, medical practices, and healthcare organizations"
    },
    {
      icon: Globe,
      title: "Banking & Financial Services",
      description: "Comprehensive audit, risk management, and compliance services for financial institutions"
    },
    {
      icon: Briefcase,
      title: "Manufacturing & Trading",
      description: "Cost accounting, inventory management, and operational efficiency solutions for manufacturers"
    },
    {
      icon: Users,
      title: "Development Organizations",
      description: "Audit, compliance, and advisory services for NGOs, INGOs, and development agencies"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90 mb-8">
              Full-service chartered accountancy firm delivering expert audit, taxation, risk advisory, 
              and strategic business consulting services with partner-led engagement oversight
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{service.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 font-lato text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
              Sector-specific expertise and tailored solutions across key industries in Nepal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesServed.map((industry, index) => (
              <Card key={index} className="hover-lift border-border">
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

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why Choose RKACA
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-lift border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-montserrat font-bold mb-4">Partner-Led Engagements</h3>
                <p className="font-lato text-muted-foreground">
                  Every assignment supervised by senior professionals for quality assurance and strategic oversight
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-montserrat font-bold mb-4">Technology-Enabled Solutions</h3>
                <p className="font-lato text-muted-foreground">
                  Cloud-based systems, secure client portals, and real-time reporting for enhanced efficiency
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-montserrat font-bold mb-4">Comprehensive Service Portfolio</h3>
                <p className="font-lato text-muted-foreground">
                  One firm for all your audit, tax, risk advisory, and business consulting needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our comprehensive services can help your business achieve 
            its financial and strategic objectives with professional excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-montserrat font-semibold"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;