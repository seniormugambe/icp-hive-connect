import Navigation from "@/components/Navigation";
import LearningPaths from "@/components/LearningPaths";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Filter, Play, Star, Clock, Users, Trophy, Zap } from "lucide-react";

const Learning = () => {
  const learningCategories = ["All", "Beginner", "Intermediate", "Advanced", "Motoko", "Rust", "Frontend"];
  
  const tutorials = [
    {
      id: 1,
      title: "Your First Motoko dApp",
      description: "Build a simple counter application to learn Motoko basics",
      duration: "45 min",
      level: "Beginner",
      rating: 4.9,
      students: 2340,
      instructor: "Alex Chen",
      topics: ["Motoko", "Smart Contracts", "Deployment"],
      thumbnail: "motoko-tutorial",
      type: "Video",
      price: "Free"
    },
    {
      id: 2,
      title: "Advanced Canister Patterns", 
      description: "Learn sophisticated patterns for building scalable canisters",
      duration: "2h 15min",
      level: "Advanced",
      rating: 4.8,
      students: 856,
      instructor: "Maria Rodriguez",
      topics: ["Architecture", "Scalability", "Best Practices"],
      thumbnail: "canister-patterns",
      type: "Course",
      price: "$49"
    },
    {
      id: 3,
      title: "ICP Frontend Integration",
      description: "Connect your React app to Internet Computer canisters",
      duration: "1h 30min",
      level: "Intermediate",
      rating: 4.7,
      students: 1456,
      instructor: "David Kim",
      topics: ["Frontend", "React", "Agent-js"],
      thumbnail: "frontend-integration",
      type: "Workshop",
      price: "Free"
    }
  ];

  const achievements = [
    { id: 1, title: "First dApp Deployed", icon: "🚀", earned: true },
    { id: 2, title: "Motoko Master", icon: "⚡", earned: true },
    { id: 3, title: "Community Contributor", icon: "🤝", earned: false },
    { id: 4, title: "Hackathon Winner", icon: "🏆", earned: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn <span className="text-icp-primary">Internet Computer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master ICP development with AI-curated learning paths, tutorials, and hands-on projects
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search tutorials, courses, and resources..." 
                  className="pl-10 bg-background/50"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {learningCategories.map((category) => (
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

      {/* Progress Dashboard */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-icp-primary/20 rounded-lg">
                  <BookOpen className="h-6 w-6 text-icp-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-icp-secondary/20 rounded-lg">
                  <Clock className="h-6 w-6 text-icp-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">47h</p>
                  <p className="text-sm text-muted-foreground">Learning Time</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-icp-accent/20 rounded-lg">
                  <Trophy className="h-6 w-6 text-icp-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Progress</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Tutorials</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="p-0 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center border-b border-border/30">
                  <Play className="h-12 w-12 text-muted-foreground" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">{tutorial.level}</Badge>
                    <Badge variant="outline" className="text-xs">{tutorial.type}</Badge>
                    <span className="text-sm font-semibold text-icp-primary ml-auto">{tutorial.price}</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{tutorial.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tutorial.description}</p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{tutorial.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{tutorial.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {tutorial.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-xs bg-muted/50 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">by {tutorial.instructor}</span>
                    <Button variant="hero" size="sm">
                      Start Learning
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Your Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`p-4 text-center ${
                  achievement.earned ? 'bg-gradient-card border-icp-primary/30' : 'bg-muted/20 border-muted'
                }`}>
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className={`font-medium text-sm ${
                    achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {achievement.title}
                  </h4>
                  {achievement.earned && (
                    <Badge variant="outline" className="mt-2 bg-green-500/20 text-green-400 border-green-500/30">
                      Earned
                    </Badge>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Component */}
      <LearningPaths />

      <Footer />
    </div>
  );
};

export default Learning;