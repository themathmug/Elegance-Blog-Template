
import { cn } from "@/lib/utils";

interface BlogHeaderProps {
  className?: string;
}

export function BlogHeader({ className }: BlogHeaderProps) {
  return (
    <header className={cn("w-full py-6 mb-12", className)}>
      <div className="container px-4 mx-auto">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-2xl font-playfair font-semibold tracking-tight">
            Elegance
          </a>
          <div className="hidden md:flex items-center space-x-8 font-inter text-sm">
            <a href="/" className="text-blog-text hover:text-black transition-colors">Home</a>
            <a href="#featured" className="text-blog-text hover:text-black transition-colors">Featured</a>
            <a href="#latest" className="text-blog-text hover:text-black transition-colors">Latest</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
