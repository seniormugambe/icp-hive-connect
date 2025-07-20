import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, User, Menu, Wallet, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWallet } from "@/hooks/useWallet";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isConnected, principal, balance, isLoading, connectWallet, disconnectWallet, formatPrincipal } = useWallet();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IC</span>
            </div>
            <span className="text-xl font-bold">ICP Connect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/discover" 
              className={`transition-colors ${
                isActive('/discover') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Discover
            </Link>
            <Link 
              to="/events" 
              className={`transition-colors ${
                isActive('/events') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/learning" 
              className={`transition-colors ${
                isActive('/learning') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Learning
            </Link>
            <Link 
              to="/community" 
              className={`transition-colors ${
                isActive('/community') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Community
            </Link>
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
            {isConnected ? (
              <div className="hidden md:flex items-center gap-2">
                <div className="flex flex-col items-end text-xs">
                  <span className="text-muted-foreground">{formatPrincipal(principal!)}</span>
                  <span className="text-icp-primary font-semibold">{balance.toFixed(2)} ICP</span>
                </div>
                <Button variant="outline" size="sm" onClick={disconnectWallet}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                variant="hero" 
                size="sm" 
                className="hidden md:flex" 
                onClick={connectWallet}
                disabled={isLoading}
              >
                <Wallet className="mr-2 h-4 w-4" />
                {isLoading ? "Connecting..." : "Connect Wallet"}
              </Button>
            )}
            
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
                <Link 
                  to="/discover" 
                  className={`py-2 transition-colors ${
                    isActive('/discover') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Discover
                </Link>
                <Link 
                  to="/events" 
                  className={`py-2 transition-colors ${
                    isActive('/events') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
                <Link 
                  to="/learning" 
                  className={`py-2 transition-colors ${
                    isActive('/learning') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Learning
                </Link>
                <Link 
                  to="/community" 
                  className={`py-2 transition-colors ${
                    isActive('/community') ? 'text-icp-primary font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community
                </Link>
              </div>
              <div className="flex gap-2 pt-2">
                {isConnected ? (
                  <>
                    <div className="flex-1 text-center p-2 bg-muted/50 rounded text-xs">
                      <div className="text-muted-foreground">{formatPrincipal(principal!)}</div>
                      <div className="text-icp-primary font-semibold">{balance.toFixed(2)} ICP</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={disconnectWallet}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" className="flex-1">
                      Sign In
                    </Button>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="flex-1"
                      onClick={connectWallet}
                      disabled={isLoading}
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      {isLoading ? "Connecting..." : "Connect"}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;