
import { BlogHeader } from "@/components/BlogHeader";
import { BlogHero } from "@/components/BlogHero";
import { BlogGrid } from "@/components/BlogGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
    </div>
  );
};

export default Index;
