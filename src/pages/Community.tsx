import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Heart, Share2, Search, Plus, TrendingUp, Globe, Star } from "lucide-react";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "12,450", change: "+15%" },
    { label: "Projects Shared", value: "3,280", change: "+8%" },
    { label: "Help Requests", value: "1,560", change: "+22%" },
    { label: "Success Stories", value: "840", change: "+12%" }
  ];

  const discussionTopics = [
    {
      id: 1,
      title: "Best practices for canister architecture",
      author: "Alex Chen",
      category: "Development",
      replies: 23,
      likes: 45,
      lastActivity: "2 hours ago",
      tags: ["Architecture", "Canisters", "Best Practices"],
      pinned: true
    },
    {
      id: 2,
      title: "Building a DeFi protocol on ICP - Need feedback",
      author: "Maria Rodriguez", 
      category: "Projects",
      replies: 18,
      likes: 32,
      lastActivity: "4 hours ago",
      tags: ["DeFi", "Feedback", "Protocol"],
      pinned: false
    },
    {
      id: 3,
      title: "How to optimize Motoko code for performance",
      author: "David Kim",
      category: "Help",
      replies: 15,
      likes: 28,
      lastActivity: "6 hours ago",
      tags: ["Motoko", "Performance", "Optimization"],
      pinned: false
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      name: "WaterDAO",
      description: "Decentralized water management system for African communities",
      author: "Sarah M.",
      stars: 156,
      contributors: 12,
      tags: ["DAO", "Infrastructure", "Africa"],
      status: "Active",
      image: "water-project"
    },
    {
      id: 2,
      name: "EduChain",
      description: "Blockchain-based education credential verification platform",
      author: "Marcus T.",
      stars: 89,
      contributors: 8,
      tags: ["Education", "Credentials", "Verification"],
      status: "Beta",
      image: "edu-project"
    },
    {
      id: 3,
      name: "GreenNFT",
      description: "Carbon-neutral NFT marketplace with environmental impact tracking",
      author: "Elena R.",
      stars: 234,
      contributors: 15,
      tags: ["NFT", "Environmental", "Marketplace"],
      status: "Live",
      image: "green-project"
    }
  ];

  const communityGroups = [
    {
      id: 1,
      name: "ICP Developers",
      members: 3420,
      description: "Technical discussions and code sharing",
      category: "Development",
      isJoined: true
    },
    {
      id: 2,
      name: "DeFi on ICP",
      members: 1890,
      description: "Building decentralized finance applications",
      category: "DeFi",
      isJoined: false
    },
    {
      id: 3,
      name: "ICP Africa",
      members: 856,
      description: "Growing the ICP ecosystem in Africa",
      category: "Regional",
      isJoined: true
    },
    {
      id: 4,
      name: "NFT Creators",
      members: 2340,
      description: "NFT projects and marketplace discussions",
      category: "NFTs",
      isJoined: false
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
              ICP <span className="text-icp-primary">Community</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect, collaborate, and contribute to the Internet Computer ecosystem
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {communityStats.map((stat, index) => (
              <Card key={index} className="p-4 bg-gradient-card border-border/50 text-center">
                <div className="text-2xl font-bold text-icp-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-green-400">{stat.change}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Discussion Topics */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Community Discussions</h2>
                  <Button variant="hero">
                    <Plus className="mr-2 h-4 w-4" />
                    New Topic
                  </Button>
                </div>

                <div className="space-y-4">
                  {discussionTopics.map((topic) => (
                    <Card key={topic.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{topic.title}</h3>
                            {topic.pinned && (
                              <Badge variant="outline" className="bg-icp-primary/20 text-icp-primary border-icp-primary/30">
                                Pinned
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span>by {topic.author}</span>
                            <Badge variant="outline" className="text-xs">{topic.category}</Badge>
                            <span>{topic.lastActivity}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {topic.tags.map((tag) => (
                              <span key={tag} className="text-xs bg-muted/50 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <MessageCircle className="h-4 w-4" />
                              <span className="text-sm">{topic.replies} replies</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Heart className="h-4 w-4" />
                              <span className="text-sm">{topic.likes} likes</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Featured Community Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredProjects.map((project) => (
                    <Card key={project.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">by {project.author}</p>
                        </div>
                        <Badge variant="outline" className={`text-xs ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                          'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {project.status}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted/50 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            <span>{project.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{project.contributors}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Project
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card className="p-4 bg-gradient-card border-border/50">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search community..." 
                    className="pl-10 bg-background/50"
                  />
                </div>
              </Card>

              {/* Community Groups */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="font-semibold text-lg mb-4">Community Groups</h3>
                <div className="space-y-3">
                  {communityGroups.map((group) => (
                    <div key={group.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{group.name}</h4>
                        <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
                        <p className="text-xs text-muted-foreground">{group.description}</p>
                      </div>
                      <Button 
                        variant={group.isJoined ? "outline" : "ghost"} 
                        size="sm"
                        className="ml-2"
                      >
                        {group.isJoined ? "Joined" : "Join"}
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Groups
                </Button>
              </Card>

              {/* Trending Topics */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="font-semibold text-lg mb-4">
                  <TrendingUp className="inline mr-2 h-5 w-5" />
                  Trending Topics
                </h3>
                <div className="space-y-2">
                  {["DeFi Integration", "NFT Marketplaces", "DAO Governance", "Motoko Patterns", "IC Infrastructure"].map((topic) => (
                    <div key={topic} className="text-sm text-icp-primary hover:underline cursor-pointer">
                      #{topic.toLowerCase().replace(/ /g, '')}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Global Impact */}
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="font-semibold text-lg mb-4">
                  <Globe className="inline mr-2 h-5 w-5" />
                  Global Impact
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Countries Active</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Help Actions</span>
                    <span className="font-semibold">12,340</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ICP Rewarded</span>
                    <span className="font-semibold">45,670</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;