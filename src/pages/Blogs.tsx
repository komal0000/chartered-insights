import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Understanding Nepal's Digital Payment Regulations",
      excerpt: "A comprehensive guide to digital payment compliance requirements for businesses in Nepal and their impact on financial reporting.",
      author: "CA Roshan Kumar Yadav",
      date: "January 20, 2024",
      category: "Regulation",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Cost Management Strategies for Manufacturing Units",
      excerpt: "Practical approaches to optimize costs and improve profitability in Nepal's manufacturing sector.",
      author: "CA Sunil Shrestha",
      date: "January 12, 2024",
      category: "Manufacturing",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Internal Audit Best Practices for SMEs",
      excerpt: "Essential internal audit procedures that small and medium enterprises can implement to strengthen their governance.",
      author: "RKACA Team",
      date: "December 30, 2023",
      category: "Audit",
      readTime: "5 min read",
      featured: false
    }
  ];

  const categories = ["All", "Taxation", "Audit", "Regulation", "Manufacturing", "Technology"];

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
          "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
          Our Blog
        </h1>
        <p className="text-xl font-lato text-white/90">
          Expert insights, industry updates, and practical guidance from our team of chartered accountants
        </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`font-lato ${index === 0 ? 'bg-secondary text-secondary-foreground' : 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card key={index} className="hover-lift border-secondary/30 mb-12">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-secondary font-lato mb-2">
                  <span className="bg-secondary/10 px-2 py-1 rounded-full">Featured</span>
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="font-montserrat text-2xl lg:text-3xl">{post.title}</CardTitle>
                <CardDescription className="font-lato text-lg">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-lato">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button className="btn-primary font-montserrat font-semibold">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">
            Recent Posts
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={index} className="hover-lift h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-secondary font-lato mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="font-montserrat">{post.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-lato">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="btn-secondary font-montserrat font-semibold w-full">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl font-lato mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights and updates directly in your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-primary-foreground font-lato"
            />
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-montserrat font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Blogs;