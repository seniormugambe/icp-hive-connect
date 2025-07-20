import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Search, Filter, Plus } from "lucide-react";

const Events = () => {
  const eventCategories = ["All", "Meetups", "Workshops", "Hackathons", "Conferences", "Webinars"];
  
  const events = [
    {
      id: 1,
      title: "ICP Developer Meetup Berlin",
      date: "March 25, 2024",
      time: "18:00 - 21:00",
      location: "Tech Hub Berlin, Germany",
      type: "In-person",
      category: "Meetup",
      attendees: 45,
      maxAttendees: 60,
      price: "Free",
      organizer: "Berlin ICP Community",
      description: "Join fellow ICP developers for networking, talks, and code reviews. This month we'll cover advanced Motoko patterns and dApp architecture.",
      image: "tech-meetup",
      tags: ["Networking", "Motoko", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "Web3 Cleanup Hackathon",
      date: "March 28-30, 2024",
      time: "All day",
      location: "Jinja Innovation Hub, Uganda",
      type: "In-person",
      category: "Hackathon",
      attendees: 28,
      maxAttendees: 50,
      price: "Free",
      organizer: "ICP Africa",
      description: "Build solutions for environmental and infrastructure challenges using ICP technology. Prizes up to $5,000!",
      image: "hackathon",
      tags: ["Hackathon", "Environmental", "Prizes"],
      featured: true
    },
    {
      id: 3,
      title: "Smart Contract Security Workshop",
      date: "April 2, 2024",
      time: "14:00 - 17:00",
      location: "Virtual Event",
      type: "Virtual",
      category: "Workshop",
      attendees: 156,
      maxAttendees: 200,
      price: "$25",
      organizer: "ICP Security Guild",
      description: "Learn best practices for securing your smart contracts on Internet Computer. Hands-on exercises included.",
      image: "security-workshop",
      tags: ["Security", "Smart Contracts", "Education"],
      featured: false
    },
    {
      id: 4,
      title: "ICP DeFi Summit 2024",
      date: "April 15-16, 2024",
      time: "09:00 - 18:00",
      location: "Singapore Convention Center",
      type: "In-person",
      category: "Conference",
      attendees: 234,
      maxAttendees: 500,
      price: "$150",
      organizer: "DeFi Alliance Asia",
      description: "The premier DeFi event in Asia focusing on Internet Computer ecosystem innovations and partnerships.",
      image: "defi-summit",
      tags: ["DeFi", "Conference", "Asia"],
      featured: true
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
              ICP <span className="text-icp-primary">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover, join, and create events in the Internet Computer community
            </p>
          </div>

          {/* Search & Actions */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search events by title, location, or organizer..." 
                  className="pl-10 bg-background/50"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="hero">
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"} 
                  className="cursor-pointer hover:bg-primary/20"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Events</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {events.filter(event => event.featured).slice(0, 2).map((event) => (
              <Card key={event.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <Badge variant="outline" className={`${
                        event.type === 'Virtual' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 
                        'bg-green-500/20 text-green-400 border-green-500/30'
                      }`}>
                        {event.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees}/{event.maxAttendees} attendees</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted/50 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-icp-primary">{event.price}</span>
                    <span className="text-sm text-muted-foreground">by {event.organizer}</span>
                  </div>
                  <Button variant="hero">
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* All Events */}
          <h2 className="text-3xl font-bold mb-8">All Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">{event.category}</Badge>
                  <Badge variant="outline" className={`text-xs ${
                    event.type === 'Virtual' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 
                    'bg-green-500/20 text-green-400 border-green-500/30'
                  }`}>
                    {event.type}
                  </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
                
                <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{event.description}</p>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-icp-primary">{event.price}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">Load More Events</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;