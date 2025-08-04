import { Shield, Calculator, TrendingUp, Users, FileCheck, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Comprehensive audit services ensuring compliance and transparency",
      features: [
        "Statutory Audits",
        "Internal Audits",
        "Tax Audits",
        "Compliance Audits",
        "Due Diligence",
        "Forensic Audits"
      ]
    },
    {
      icon: Calculator,
      title: "Taxation Services",
      description: "Expert tax planning, compliance, and advisory services",
      features: [
        "Corporate Tax Planning",
        "Individual Tax Services",
        "VAT Compliance",
        "Tax Litigation Support",
        "Transfer Pricing",
        "International Taxation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Consulting",
      description: "Strategic insights to drive growth and operational efficiency",
      features: [
        "Business Strategy",
        "Financial Planning",
        "Process Optimization",
        "Performance Management",
        "Market Analysis",
        "Growth Advisory"
      ]
    },
    {
      icon: Users,
      title: "Risk Advisory",
      description: "Identify, assess, and mitigate business risks effectively",
      features: [
        "Risk Assessment",
        "Internal Controls",
        "Governance Advisory",
        "Compliance Management",
        "Operational Risk",
        "Regulatory Risk"
      ]
    },
    {
      icon: FileCheck,
      title: "Accounting Services",
      description: "Complete accounting and bookkeeping solutions",
      features: [
        "Bookkeeping Services",
        "Financial Reporting",
        "Management Accounting",
        "Payroll Processing",
        "Virtual CFO Services",
        "System Implementation"
      ]
    },
    {
      icon: BarChart3,
      title: "Corporate Finance",
      description: "Financial advisory for strategic business decisions",
      features: [
        "Business Valuation",
        "M&A Advisory",
        "Capital Restructuring",
        "Financial Modeling",
        "Investment Advisory",
        "IPO Services"
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
              Our Services
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Comprehensive financial and advisory services tailored to meet your business needs
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business thrive
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;