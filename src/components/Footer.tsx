import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, MessageCircle, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IC</span>
              </div>
              <span className="text-xl font-bold">ICP Connect</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Connecting the Internet Computer community through geolocation-powered discovery, 
              AI-curated learning, and collaborative networking.
            </p>
            
            {/* Newsletter */}
            <div className="max-w-md">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/50"
                />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <a href="#discover" className="block text-muted-foreground hover:text-foreground transition-colors">
                Discover
              </a>
              <a href="#events" className="block text-muted-foreground hover:text-foreground transition-colors">
                Events
              </a>
              <a href="#learning" className="block text-muted-foreground hover:text-foreground transition-colors">
                Learning Paths
              </a>
              <a href="#grants" className="block text-muted-foreground hover:text-foreground transition-colors">
                Grants
              </a>
              <a href="#tools" className="block text-muted-foreground hover:text-foreground transition-colors">
                Developer Tools
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Community Guidelines
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 ICP Connect. Part of the Proof of Help platform.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;