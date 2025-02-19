
import { CalendarDays } from "lucide-react";

export function BlogHero() {
  return (
    <section className="container px-4 mx-auto mb-24">
      <div className="relative overflow-hidden rounded-xl aspect-[2/1] mb-8">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Featured post"
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="max-w-2xl mx-auto text-center animate-fade-up">
        <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blog-accent text-gray-900">
          Featured Post
        </div>
        <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-4 tracking-tight">
          The Art of Mindful Living in a Digital Age
        </h1>
        <div className="flex items-center justify-center text-blog-meta text-sm mb-4">
          <CalendarDays className="w-4 h-4 mr-2" />
          <span>April 15, 2024</span>
        </div>
        <p className="text-blog-text font-inter leading-relaxed">
          Discover how to maintain balance and presence in our increasingly connected world, while leveraging technology for personal growth and well-being.
        </p>
      </div>
    </section>
  );
}
