import { Building2, Heart, Factory, GraduationCap, Landmark, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Specialized services for hospitals, clinics, and healthcare organizations",
      services: ["Financial audits", "Compliance reviews", "Cost management", "Strategic planning"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Supporting manufacturing units with financial and operational excellence",
      services: ["Inventory management", "Cost accounting", "Process optimization", "Tax planning"]
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      description: "Expert advisory for financial institutions and banking sectors",
      services: ["Risk assessment", "Regulatory compliance", "Internal audits", "Capital adequacy"]
    },
    {
      icon: Building2,
      title: "Trading Houses",
      description: "Comprehensive solutions for import/export and trading businesses",
      services: ["Trade finance", "Customs compliance", "Working capital", "Foreign exchange"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Financial management for educational institutions and training centers",
      services: ["Budget planning", "Grant management", "Fee optimization", "Compliance audits"]
    },
    {
      icon: Globe,
      title: "Development Organizations",
      description: "Specialized support for NGOs and international development projects",
      services: ["Project audits", "Donor compliance", "Fund management", "Impact assessment"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Sector-specific expertise across diverse industries in Nepal and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{industry.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-montserrat font-semibold mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2 font-lato text-sm">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        {service}
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-4">
              Deep Industry Knowledge
            </h2>
            <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto">
              Our team's extensive experience across multiple sectors enables us to provide 
              tailored solutions that address industry-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-montserrat">Regulatory Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">
                  Stay compliant with industry-specific regulations and standards while 
                  optimizing your business operations for maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="font-montserrat">Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-lato text-muted-foreground">
                  Leverage our deep understanding of industry best practices to enhance 
                  your operational efficiency and competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;