import {
  Building2,
  Heart,
  Factory,
  GraduationCap,
  Landmark,
  Globe,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Specialized services for hospitals, clinics, and healthcare organizations",
      services: [
        "Financial audits",
        "Compliance reviews",
        "Cost management",
        "Strategic planning",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Supporting manufacturing units with financial and operational excellence",
      services: [
        "Inventory management",
        "Cost accounting",
        "Process optimization",
        "Tax planning",
      ],
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      description:
        "Expert advisory for financial institutions and banking sectors",
      services: [
        "Risk assessment",
        "Regulatory compliance",
        "Internal audits",
        "Capital adequacy",
      ],
    },
    {
      icon: Building2,
      title: "Trading Houses",
      description:
        "Comprehensive solutions for import/export and trading businesses",
      services: [
        "Trade finance",
        "Customs compliance",
        "Working capital",
        "Foreign exchange",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Financial management for educational institutions and training centers",
      services: [
        "Budget planning",
        "Grant management",
        "Fee optimization",
        "Compliance audits",
      ],
    },
    {
      icon: Globe,
      title: "Development Organizations",
      description:
        "Specialized support for NGOs and international development projects",
      services: [
        "Project audits",
        "Donor compliance",
        "Fund management",
        "Impact assessment",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-40 text-white overflow-hidden"
        style={{ maxHeight: 600 }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
          Industries We Serve
        </h1>
        <p className="text-xl font-lato text-white/90">
          Sector-specific expertise for healthcare, manufacturing, banking, education, development, and more—empowering organizations with tailored financial solutions.
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
                  <CardTitle className="font-montserrat">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="font-lato">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="flex items-center gap-2 font-lato text-sm"
                      >
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
