import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProofOfHelp from "@/components/ProofOfHelp";
import CommunityMap from "@/components/CommunityMap";
import LearningPaths from "@/components/LearningPaths";
import CollaborativeBuilding from "@/components/CollaborativeBuilding";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProofOfHelp />
      <CommunityMap />
      <LearningPaths />
      <CollaborativeBuilding />
      <Footer />
    </div>
  );
};

export default Index;
