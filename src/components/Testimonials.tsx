import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Miriam W.",
    review: "The food was stunning and full of flavor—our guests are still talking about it! Sabras Kitchen made our wedding day absolutely perfect.",
    rating: 5,
    event: "Wedding Reception"
  },
  {
    name: "David S.",
    review: "Professional, delicious, and beautifully presented. The corporate lunch was a huge success and impressed all our clients.",
    rating: 5,
    event: "Corporate Event"
  },
  {
    name: "Sarah M.",
    review: "From the first bite to the last, everything was exceptional. The personal touch and attention to detail made our anniversary dinner unforgettable.",
    rating: 5,
    event: "Private Dinner"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families and businesses who trusted us with their special moments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-warm border-border hover:shadow-warm-hover transition-all duration-300">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Review Text */}
                <blockquote className="text-foreground/90 italic leading-relaxed mb-4">
                  "{testimonial.review}"
                </blockquote>
                
                {/* Client Info */}
                <div className="border-t border-border/30 pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-accent/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-lg mb-2">
              Ready to create your own memorable experience?
            </p>
            <p className="text-muted-foreground">
              Join our family of satisfied clients and let us make your event extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;