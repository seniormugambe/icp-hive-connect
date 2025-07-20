import Navigation from "@/components/Navigation";
import CommunityMap from "@/components/CommunityMap";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Users, Star, Clock } from "lucide-react";

const Discover = () => {
  const categories = ["All", "Developers", "Community Leaders", "Researchers", "Entrepreneurs"];
  const skills = ["Motoko", "Rust", "JavaScript", "Smart Contracts", "DeFi", "NFTs", "DAOs"];

  const discoveredMembers = [
    {
      id: 1,
      name: "Elena Rodriguez",
      title: "Senior Blockchain Developer",
      location: "Barcelona, Spain",
      distance: "1.2 km",
      avatar: "ER",
      rating: 4.9,
      projects: 15,
      skills: ["Motoko", "Smart Contracts", "DeFi"],
      bio: "Building the future of decentralized finance on Internet Computer",
      isOnline: true,
      verified: true
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "ICP Community Organizer",
      location: "Singapore",
      distance: "2.8 km",
      avatar: "MC",
      rating: 4.8,
      projects: 8,
      skills: ["Community Building", "Events", "Education"],
      bio: "Connecting developers and growing the ICP ecosystem in Asia",
      isOnline: false,
      verified: true
    },
    {
      id: 3,
      name: "Sarah Kim",
      title: "dApp Architect",
      location: "Seoul, South Korea", 
      distance: "4.1 km",
      avatar: "SK",
      rating: 4.9,
      projects: 12,
      skills: ["Rust", "JavaScript", "Frontend"],
      bio: "Creating intuitive user experiences for Web3 applications",
      isOnline: true,
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover <span className="text-icp-primary">ICP Community</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find developers, leaders, and innovators in the Internet Computer ecosystem near you
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name, skills, or location..." 
                  className="pl-10 bg-background/50"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"} 
                  className="cursor-pointer hover:bg-primary/20"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Map Section */}
      <CommunityMap />

      {/* Discovered Members */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Nearby Community Members</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <MapPin className="mr-2 h-4 w-4" />
                Map View
              </Button>
              <Button variant="outline" size="sm">List View</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discoveredMembers.map((member) => (
              <Card key={member.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {member.avatar}
                    </div>
                    {member.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-background" />
                    )}
                    {member.verified && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">{member.name}</h3>
                    <p className="text-icp-primary text-sm">{member.title}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{member.location}</span>
                      <span>•</span>
                      <span>{member.distance}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{member.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{member.projects} projects</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="text-xs bg-muted/50 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{member.skills.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="hero" size="sm" className="flex-1">
                    Connect
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">Load More Members</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Discover;