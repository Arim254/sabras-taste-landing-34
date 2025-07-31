import { Phone, Mail, Instagram, Facebook, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sabras Kitchen</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing authentic taste and elegant presentation to every plate. 
              Creating memorable culinary experiences for life's special moments.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">hello@sabraskitchen.com</span>
              </div>
            </div>
          </div>
          
          {/* Social & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-sm text-primary-foreground/80">
              <p className="mb-1">Wedding Catering</p>
              <p className="mb-1">Private Dinners</p>
              <p>Corporate Events</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm mb-2">
            © 2024 Sabras Kitchen. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 fill-current" /> for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;