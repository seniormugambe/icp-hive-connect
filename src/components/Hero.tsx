import { Button } from "@/components/ui/button";
import { MapPin, Users, BookOpen, Search } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="ICP Connect Network" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-icp-primary/20 text-icp-primary rounded-full border border-icp-primary/30">
              Proof of Help Platform
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            ICP Connect
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Discover local ICP leaders, join vibrant meetups, and access AI-curated learning paths. 
            Connect with the Internet Computer community wherever you are.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
              <div className="p-2 bg-icp-primary/20 rounded-lg">
                <MapPin className="h-5 w-5 text-icp-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Local Discovery</h3>
                <p className="text-sm text-muted-foreground">Find ICP leaders & events nearby</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
              <div className="p-2 bg-icp-secondary/20 rounded-lg">
                <Users className="h-5 w-5 text-icp-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">Network & Collaborate</h3>
                <p className="text-sm text-muted-foreground">Join real-world & virtual meetups</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
              <div className="p-2 bg-icp-accent/20 rounded-lg">
                <BookOpen className="h-5 w-5 text-icp-accent" />
              </div>
              <div>
                <h3 className="font-semibold">AI-Curated Learning</h3>
                <p className="text-sm text-muted-foreground">Personalized paths, tools & grants</p>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Search className="mr-2 h-5 w-5" />
              Discover Community
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Users className="mr-2 h-5 w-5" />
              Join Meetup
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-3 h-3 bg-icp-primary rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-icp-secondary rounded-full opacity-40" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-icp-accent rounded-full opacity-30" />
      </div>
    </div>
  );
};

export default Hero;