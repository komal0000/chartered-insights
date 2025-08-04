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
      <section className="bg-primary text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/90">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300BFB2' fill-opacity='0.1'%3E%3Cpath d='M30 15l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
                  Industries We Serve
                </h1>
                <p className="text-xl font-lato text-primary-foreground/90 mb-8">
                  Sector-specific expertise and tailored solutions across key industries in Nepal, 
                  with deep understanding of unique challenges and opportunities in each sector.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat text-primary-foreground">Healthcare</span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat text-primary-foreground">Banking</span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat text-primary-foreground">Manufacturing</span>
                  <span className="bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-montserrat text-primary-foreground">Development</span>
                </div>
              </div>

              {/* Industries Visual */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20">
                    <Heart className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">Healthcare</h3>
                    <p className="text-sm text-primary-foreground/80">Hospitals & clinics</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 mt-8">
                    <Landmark className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">Banking</h3>
                    <p className="text-sm text-primary-foreground/80">Financial institutions</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 -mt-4">
                    <Factory className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">Manufacturing</h3>
                    <p className="text-sm text-primary-foreground/80">Production & trading</p>
                  </div>
                  
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 mt-4">
                    <Globe className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="font-montserrat font-semibold text-primary-foreground mb-2">Development</h3>
                    <p className="text-sm text-primary-foreground/80">NGOs & INGOs</p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Ready to Partner with Industry Experts?
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Contact us to learn how our sector-specific expertise can benefit your organization
          </p>
        </div> */}
      {/* </section> */}
    </div>
  );
};

export default Industries;
