import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Insights", path: "/insights" },
    { name: "Events", path: "/events" },
    { name: "Offices", path: "/offices" },
    { name: "Careers", path: "/careers" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-primary shadow-medium sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-montserrat font-bold text-xl">R</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-primary-foreground font-montserrat font-bold text-xl">
                Roshan Kumar & Associates
              </h1>
              <p className="text-primary-foreground/80 text-sm">Chartered Accountants</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-lato transition-all duration-300 ${
                  isActivePath(item.path)
                    ? "bg-secondary text-secondary-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10 hover:text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-md text-sm font-lato transition-all duration-300 ${
                    isActivePath(item.path)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;