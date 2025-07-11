import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommunityMap from "@/components/CommunityMap";
import LearningPaths from "@/components/LearningPaths";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CommunityMap />
      <LearningPaths />
      <Footer />
    </div>
  );
};

export default Index;
