import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            About Sabras Kitchen
          </h2>
          
          <Card className="bg-card/90 backdrop-blur-sm shadow-warm border-border/50">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Born from family recipes passed down through generations, Sabras Kitchen brings 
                authentic taste and elegant presentation to every plate.
              </p>
              
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Our passion for culinary excellence stems from a deep-rooted tradition of hospitality 
                and love for good food. Every dish we create tells a story of heritage, crafted with 
                the finest ingredients and presented with the care your special moments deserve.
              </p>
              
              <div className="mt-8 pt-8 border-t border-border/30">
                <blockquote className="text-lg italic text-primary/90">
                  "Food is the thread that weaves families together, and we are honored to be part of your story."
                </blockquote>
                <p className="text-sm text-muted-foreground mt-2">- The Sabras Kitchen Family</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;