import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Briefcase } from "lucide-react";

const services = [
  {
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our elegant wedding menus designed to delight every guest.",
    icon: Heart,
    features: ["Custom menu design", "Elegant presentation", "Full service staff", "Dietary accommodations"]
  },
  {
    title: "Private Dinners",
    description: "Intimate gatherings deserve intimate attention. Let us create a memorable dining experience in your home.",
    icon: Users,
    features: ["Personal chef service", "Intimate settings", "Custom courses", "Wine pairings available"]
  },
  {
    title: "Corporate Events",
    description: "Professional catering that impresses clients and colleagues while maintaining the highest standards.",
    icon: Briefcase,
    features: ["Business lunch menus", "Conference catering", "Office parties", "Professional presentation"]
  }
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring exceptional cuisine to every occasion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card shadow-warm border-border hover:shadow-warm-hover transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    onClick={scrollToContact}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Get a Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;