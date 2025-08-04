import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">RKACA</h3>
            <p className="font-lato text-primary-foreground/80 mb-4">
              Roshan Kumar & Associates - Your trusted Chartered Accountancy firm 
              delivering expert financial and advisory services across Nepal.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-lato text-sm">Biratnagar, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="font-lato text-sm">+977-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="font-lato text-sm">info@rkaca.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Audit & Assurance</Link></li>
              <li><Link to="/services" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Taxation Services</Link></li>
              <li><Link to="/services" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Business Consulting</Link></li>
              <li><Link to="/services" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Risk Advisory</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Insights</Link></li>
              <li><Link to="/careers" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blogs" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link to="/events" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Events</Link></li>
              <li><Link to="/offices" className="font-lato text-primary-foreground/80 hover:text-secondary transition-colors">Offices</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-lato text-primary-foreground/80">
            © 2024 Roshan Kumar & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;