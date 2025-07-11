import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Code, Trophy, Handshake, Zap } from "lucide-react";

const CollaborativeBuilding = () => {
  const activeProjects = [
    {
      id: 1,
      title: "Uganda Water DAO",
      description: "Decentralized voting system for community water management decisions",
      stage: "Development",
      contributors: 4,
      location: "Jinja, Uganda",
      icpStaked: 125.8,
      skills: ["Motoko", "React", "DAO Governance"],
      progress: 65,
      nextMilestone: "Deploy testnet voting contracts",
      hackathon: "Web3 Cleanup Hackathon"
    },
    {
      id: 2, 
      title: "Solar Grid Optimizer",
      description: "AI-powered energy distribution for rural solar installations",
      stage: "Research",
      contributors: 3,
      location: "Mbale, Uganda",
      icpStaked: 89.2,
      skills: ["Python", "IoT", "Smart Contracts"],
      progress: 30,
      nextMilestone: "Complete energy flow algorithm",
      hackathon: null
    }
  ];

  const collaborationRewards = [
    { action: "Code contribution", reward: 2.1, time: "30 mins ago" },
    { action: "Technical review", reward: 1.5, time: "2 hours ago" },
    { action: "Documentation", reward: 0.8, time: "5 hours ago" },
    { action: "Bug fix", reward: 3.2, time: "1 day ago" }
  ];

  const teamMembers = [
    { name: "Sarah M.", role: "DAO Architect", avatar: "SM", online: true },
    { name: "James K.", role: "Frontend Dev", avatar: "JK", online: true },
    { name: "Aisha N.", role: "Community Lead", avatar: "AN", online: false },
    { name: "You", role: "Infrastructure Expert", avatar: "YU", online: true }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build Together, <span className="text-icp-primary">Earn Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborate on ICP projects, track contributions with micro-actions, 
            and share rewards based on verified impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold">Active Collaborations</h3>
            
            {activeProjects.map((project) => (
              <Card key={project.id} className="p-6 bg-gradient-card border-border/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold">{project.title}</h4>
                      <Badge variant="outline" className="bg-icp-primary/20 text-icp-primary border-icp-primary/30">
                        {project.stage}
                      </Badge>
                      {project.hackathon && (
                        <Badge variant="outline" className="bg-icp-secondary/20 text-icp-secondary border-icp-secondary/30">
                          🏁 {project.hackathon}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{project.contributors} contributors</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="h-4 w-4 text-icp-primary" />
                        <span>{project.icpStaked} ICP staked</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Code className="h-4 w-4 text-muted-foreground" />
                        <span>{project.progress}% complete</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-icp-primary font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-muted/50 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 bg-background/50 rounded-lg border border-border/30">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="h-4 w-4 text-icp-accent" />
                        <span className="font-medium text-sm">Next Milestone</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.nextMilestone}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="hero" className="flex-1">
                    <Code className="mr-2 h-4 w-4" />
                    Continue Building
                  </Button>
                  <Button variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Team Chat
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar: Team & Rewards */}
          <div className="space-y-6">
            {/* Team Members */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">Project Team</h3>
              
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {member.avatar}
                      </div>
                      {member.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{member.name}</span>
                        {member.name === "You" && (
                          <Badge variant="outline" className="bg-icp-primary/20 text-icp-primary border-icp-primary/30 text-xs">
                            You
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Handshake className="mr-2 h-4 w-4" />
                Invite Collaborator
              </Button>
            </Card>

            {/* Collaboration Rewards */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">Recent Rewards</h3>
              
              <div className="space-y-3">
                {collaborationRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30">
                    <div>
                      <p className="font-medium text-sm">{reward.action}</p>
                      <p className="text-xs text-muted-foreground">{reward.time}</p>
                    </div>
                    <div className="flex items-center gap-1 text-icp-primary font-semibold">
                      <Trophy className="h-3 w-3" />
                      <span className="text-sm">+{reward.reward} ICP</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-gradient-primary/10 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Session Total</span>
                  <span className="text-icp-primary font-bold">+7.6 ICP</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Code className="mr-2 h-4 w-4" />
                  Commit Code
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Schedule Standup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Create Demo
                </Button>
                <Button variant="hero" className="w-full justify-start">
                  <Trophy className="mr-2 h-4 w-4" />
                  Submit Milestone
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborativeBuilding;