import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IC</span>
            </div>
            <span className="text-xl font-bold">ICP Connect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#discover" className="text-muted-foreground hover:text-foreground transition-colors">
              Discover
            </a>
            <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
              Events
            </a>
            <a href="#learning" className="text-muted-foreground hover:text-foreground transition-colors">
              Learning
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </div>
          
          {/* Search Bar */}
          <div className="hidden lg:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search leaders, events, resources..." 
                className="pl-10 bg-background/50"
              />
            </div>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="hero" size="sm" className="hidden md:flex">
              Connect Wallet
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 bg-background/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <a href="#discover" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  Discover
                </a>
                <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  Events
                </a>
                <a href="#learning" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  Learning
                </a>
                <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                  Community
                </a>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="flex-1">
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;