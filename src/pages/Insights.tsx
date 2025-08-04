import { TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Insights = () => {
  const insights = [
    {
      title: "Nepal's New Tax Regulations 2024",
      excerpt: "Understanding the latest changes in corporate taxation and compliance requirements for businesses operating in Nepal.",
      date: "January 15, 2024",
      category: "Taxation",
      readTime: "5 min read"
    },
    {
      title: "Risk Management in Manufacturing Sector",
      excerpt: "Key strategies for identifying and mitigating operational risks in Nepal's growing manufacturing industry.",
      date: "December 28, 2023",
      category: "Risk Advisory",
      readTime: "7 min read"
    },
    {
      title: "Digital Transformation in Accounting",
      excerpt: "How technology is revolutionizing financial reporting and accounting practices for modern businesses.",
      date: "December 15, 2023",
      category: "Technology",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Insights & Analysis
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Expert perspectives on business, finance, and regulatory developments in Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-secondary font-lato mb-2">
                    <span>{insight.category}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <CardTitle className="font-montserrat">{insight.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {insight.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-lato">
                    <Calendar className="w-4 h-4" />
                    <span>{insight.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-4">
            More Insights Coming Soon
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
            We're working on expanding our insights section with more expert analysis and industry perspectives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Insights;