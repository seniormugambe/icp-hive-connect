import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, ExternalLink } from "lucide-react";

const CommunityMap = () => {
  // Mock data for demonstration
  const communityMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "ICP Developer",
      location: "San Francisco, CA",
      distance: "2.3 km",
      avatar: "AC",
      specialties: ["Smart Contracts", "Motoko"],
      isOnline: true
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Community Leader",
      location: "Austin, TX",
      distance: "5.1 km",
      avatar: "MR",
      specialties: ["Community Building", "Events"],
      isOnline: false
    },
    {
      id: 3,
      name: "David Kim",
      role: "Grant Reviewer",
      location: "Seattle, WA",
      distance: "8.7 km",
      avatar: "DK",
      specialties: ["Funding", "Mentorship"],
      isOnline: true
    }
  ];

  const nearbyEvents = [
    {
      id: 1,
      title: "ICP Developer Meetup",
      date: "March 15, 2024",
      time: "6:00 PM",
      location: "Tech Hub Downtown",
      attendees: 32,
      type: "In-person"
    },
    {
      id: 2,
      title: "Smart Contract Workshop",
      date: "March 18, 2024",
      time: "2:00 PM",
      location: "Virtual Event",
      attendees: 128,
      type: "Virtual"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Your Local <span className="text-icp-primary">ICP Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with ICP developers, leaders, and enthusiasts in your area. 
            Join events and collaborate on projects together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Map Placeholder */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Community Map</h3>
              <Button variant="outline" size="sm">
                <MapPin className="mr-2 h-4 w-4" />
                Update Location
              </Button>
            </div>
            
            {/* Map Placeholder - In a real app, this would be an interactive map */}
            <div className="bg-muted/50 rounded-lg h-80 flex items-center justify-center border border-border/30 relative overflow-hidden">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-icp-primary mx-auto mb-3" />
                <p className="text-muted-foreground">Interactive Map View</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Showing 12 community members within 10km
                </p>
              </div>
              
              {/* Mock location pins */}
              <div className="absolute top-20 left-24 w-3 h-3 bg-icp-primary rounded-full animate-pulse" />
              <div className="absolute bottom-24 right-32 w-3 h-3 bg-icp-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-32 right-20 w-3 h-3 bg-icp-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </Card>

          {/* Community Members & Events */}
          <div className="space-y-6">
            {/* Nearby Members */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Nearby Members</h3>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {communityMembers.map((member) => (
                  <div key={member.id} className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                        {member.avatar}
                      </div>
                      {member.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium truncate">{member.name}</h4>
                        <span className="text-xs text-muted-foreground">{member.distance}</span>
                      </div>
                      <p className="text-sm text-icp-primary">{member.role}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {member.specialties.map((specialty) => (
                          <span key={specialty} className="text-xs bg-muted/50 px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm">
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Upcoming Events</h3>
                <Button variant="ghost" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </div>
              
              <div className="space-y-4">
                {nearbyEvents.map((event) => (
                  <div key={event.id} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{event.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            event.type === 'Virtual' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {event.attendees} attending
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMap;