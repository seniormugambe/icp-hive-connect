import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Wrench, MapPin, Camera, Clock, Trophy, Zap } from "lucide-react";
import { useState } from "react";

const ProofOfHelp = () => {
  const [helpType, setHelpType] = useState("");
  const [location, setLocation] = useState("Jinja, Uganda");
  const [description, setDescription] = useState("");

  const recentHelps = [
    {
      id: 1,
      action: "Water pump repair",
      location: "Jinja, Uganda",
      impact: "Restored water access for 150 families",
      icpReward: 5.2,
      time: "2 hours ago",
      verified: true
    },
    {
      id: 2,
      action: "School network setup",
      location: "Kampala, Uganda", 
      impact: "Connected 500 students to internet",
      icpReward: 8.7,
      time: "1 day ago",
      verified: true
    },
    {
      id: 3,
      action: "Solar panel installation",
      location: "Mbale, Uganda",
      impact: "Powered community health clinic",
      icpReward: 12.3,
      time: "3 days ago",
      verified: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the blockchain
    console.log("Logging Proof of Help:", { helpType, location, description });
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Log Your <span className="text-icp-primary">Proof of Help</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Document real-world impact, earn ICP rewards, and trigger AI-powered 
            community connections and learning opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Log New Help */}
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-icp-primary/20 rounded-lg">
                <Wrench className="h-6 w-6 text-icp-primary" />
              </div>
              <h3 className="text-xl font-semibold">Log New Help Action</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">What did you help with?</label>
                <Input
                  placeholder="e.g., Water pump repair, Network setup, Solar installation..."
                  value={helpType}
                  onChange={(e) => setHelpType(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="City, Country"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Impact Description</label>
                <Textarea
                  placeholder="Describe the impact of your help - who benefited and how..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-background/50 h-24"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" type="button">
                  <Camera className="mr-2 h-4 w-4" />
                  Add Photo
                </Button>
                <Button variant="outline" type="button">
                  <MapPin className="mr-2 h-4 w-4" />
                  Verify Location
                </Button>
              </div>

              <Button variant="hero" type="submit" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Submit Proof of Help
              </Button>
            </form>

            {/* AI-Triggered Notifications */}
            <div className="mt-6 p-4 bg-icp-primary/10 border border-icp-primary/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-icp-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-icp-primary">AI Connect Triggered</span>
              </div>
              <p className="text-sm text-muted-foreground">
                🏁 <strong>Local Web3 Cleanup Hackathon</strong> this weekend in Jinja - 
                Perfect for infrastructure projects! Click to register.
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View Event Details
              </Button>
            </div>
          </Card>

          {/* Recent Help Actions */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">Recent Community Impact</h3>
              
              <div className="space-y-4">
                {recentHelps.map((help) => (
                  <div key={help.id} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{help.action}</h4>
                          {help.verified && (
                            <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-3 w-3" />
                          <span>{help.location}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{help.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{help.impact}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-icp-primary font-semibold">
                          <Trophy className="h-4 w-4" />
                          <span>{help.icpReward} ICP</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-primary/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">Your Impact Score</h4>
                    <p className="text-sm text-muted-foreground">Total ICP earned from verified help</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-icp-primary">26.2 ICP</div>
                    <div className="text-sm text-muted-foreground">Rank #42 in Uganda</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Recommendations */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">AI-Curated for You</h3>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-icp-secondary/10 border border-icp-secondary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-icp-secondary" />
                    <span className="font-medium text-sm">Grant Opportunity</span>
                  </div>
                  <p className="text-sm">
                    <strong>Civic Tech Africa Grant</strong> - Up to $15,000 for infrastructure projects. 
                    Perfect match for your water pump expertise!
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Apply Now
                  </Button>
                </div>

                <div className="p-3 rounded-lg bg-icp-accent/10 border border-icp-accent/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-icp-accent" />
                    <span className="font-medium text-sm">Learning Path</span>
                  </div>
                  <p className="text-sm">
                    <strong>DAO Governance for Infrastructure</strong> - Learn to build voting tools 
                    for community water projects.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Start Learning
                  </Button>
                </div>

                <div className="p-3 rounded-lg bg-icp-primary/10 border border-icp-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-icp-primary" />
                    <span className="font-medium text-sm">Collaboration Match</span>
                  </div>
                  <p className="text-sm">
                    <strong>Sarah M.</strong> is building a DAO voting tool for water management. 
                    She's at the hackathon too!
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Connect
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfHelp;