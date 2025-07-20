import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy, Zap, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LearningPaths = () => {
  const [enrolledPaths, setEnrolledPaths] = useState<number[]>([2]); // Mock: already enrolled in Motoko
  const [appliedGrants, setAppliedGrants] = useState<number[]>([]);
  const { toast } = useToast();
  
  const learningPaths = [
    {
      id: 1,
      title: "ICP Fundamentals",
      description: "Master the basics of Internet Computer Protocol",
      level: "Beginner",
      duration: "4 weeks",
      modules: 8,
      rating: 4.8,
      enrollees: 1240,
      tags: ["Blockchain", "Basics", "Theory"],
      progress: 0,
      color: "bg-icp-primary/20 text-icp-primary border-icp-primary/30"
    },
    {
      id: 2,
      title: "Motoko Development",
      description: "Build smart contracts with Motoko programming language",
      level: "Intermediate",
      duration: "6 weeks",
      modules: 12,
      rating: 4.9,
      enrollees: 856,
      tags: ["Programming", "Smart Contracts", "Motoko"],
      progress: 35,
      color: "bg-icp-secondary/20 text-icp-secondary border-icp-secondary/30"
    },
    {
      id: 3,
      title: "dApp Architecture",
      description: "Design and deploy decentralized applications on ICP",
      level: "Advanced",
      duration: "8 weeks",
      modules: 16,
      rating: 4.7,
      enrollees: 432,
      tags: ["Architecture", "Frontend", "Backend"],
      progress: 0,
      color: "bg-icp-accent/20 text-icp-accent border-icp-accent/30"
    }
  ];

  const grants = [
    {
      id: 1,
      title: "Developer Grant Program",
      amount: "$50,000",
      deadline: "April 15, 2024",
      category: "Development",
      description: "Fund innovative ICP applications and tools"
    },
    {
      id: 2,
      title: "Community Building Grant",
      amount: "$25,000",
      deadline: "March 30, 2024",
      category: "Community",
      description: "Support local ICP community initiatives"
    }
  ];

  const tools = [
    { name: "DFX CLI", description: "Internet Computer SDK", category: "Development" },
    { name: "Internet Identity", description: "Secure authentication", category: "Authentication" },
    { name: "IC Network Status", description: "Real-time network monitoring", category: "Monitoring" },
    { name: "Vessel", description: "Package manager for Motoko", category: "Development" }
  ];

  const handleEnrollPath = (pathId: number, pathTitle: string) => {
    if (enrolledPaths.includes(pathId)) return;
    
    setEnrolledPaths(prev => [...prev, pathId]);
    toast({
      title: "Enrolled Successfully! 🎓",
      description: `Started learning path: ${pathTitle}`,
    });
  };

  const handleApplyGrant = (grantId: number, grantTitle: string) => {
    if (appliedGrants.includes(grantId)) return;
    
    setAppliedGrants(prev => [...prev, grantId]);
    toast({
      title: "Application Submitted! 💰",
      description: `Applied for: ${grantTitle}`,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Curated <span className="text-icp-primary">Learning Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized learning paths, development tools, and funding opportunities 
            tailored to your location and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Paths */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Recommended Learning Paths</h3>
              <Button variant="outline">
                <Zap className="mr-2 h-4 w-4" />
                AI Personalize
              </Button>
            </div>
            
            <div className="space-y-6">
              {learningPaths.map((path) => (
                <Card key={path.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold">{path.title}</h4>
                        <Badge variant="outline" className={path.color}>
                          {path.level}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{path.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {path.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {path.modules} modules
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {path.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy className="h-3 w-3" />
                          {path.enrollees.toLocaleString()} learners
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {path.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted/50 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {path.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-icp-primary font-medium">{path.progress}%</span>
                          </div>
                          <div className="w-full bg-muted/50 rounded-full h-2">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${path.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant={enrolledPaths.includes(path.id) ? "default" : "hero"} 
                      className="flex-1"
                      onClick={() => handleEnrollPath(path.id, path.title)}
                      disabled={enrolledPaths.includes(path.id) && path.progress === 0}
                    >
                      {enrolledPaths.includes(path.id) && path.progress > 0 ? "Continue Learning" : 
                       enrolledPaths.includes(path.id) ? "Enrolled" : "Start Learning"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      Preview
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar: Grants & Tools */}
          <div className="space-y-6">
            {/* Grants */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">Available Grants</h3>
              <div className="space-y-4">
                {grants.map((grant) => (
                  <div key={grant.id} className="p-4 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{grant.title}</h4>
                      <span className="text-lg font-bold text-icp-primary">{grant.amount}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{grant.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span className="bg-muted/50 px-2 py-1 rounded">{grant.category}</span>
                      <span>Due: {grant.deadline}</span>
                    </div>
                    <Button 
                      variant={appliedGrants.includes(grant.id) ? "secondary" : "outline"} 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleApplyGrant(grant.id, grant.title)}
                      disabled={appliedGrants.includes(grant.id)}
                    >
                      {appliedGrants.includes(grant.id) ? "Application Submitted" : "Apply Now"}
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Grants
              </Button>
            </Card>

            {/* Developer Tools */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="text-xl font-semibold mb-4">Essential Tools</h3>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <div key={tool.name} className="p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{tool.name}</h4>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </div>
                      <span className="text-xs bg-muted/50 px-2 py-1 rounded">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Explore Tools
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;