
import { CalendarDays } from "lucide-react";

const posts = [
  {
    title: "The Future of Remote Work",
    excerpt: "Exploring the evolving landscape of remote work and its impact on company culture.",
    category: "Technology",
    date: "April 14, 2024",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "Sustainable Living Guide",
    excerpt: "Simple steps towards a more eco-friendly lifestyle in your daily routine.",
    category: "Lifestyle",
    date: "April 13, 2024",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Modern Web Development",
    excerpt: "The latest trends and best practices in web development for 2024.",
    category: "Programming",
    date: "April 12, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export function BlogGrid() {
  return (
    <section className="container px-4 mx-auto mb-24" id="latest">
      <h2 className="text-3xl font-playfair font-semibold mb-12 text-center">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="group animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[3/2] mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-blog-accent text-gray-900">
                {post.category}
              </div>
              <h3 className="text-xl font-playfair font-semibold group-hover:text-gray-700 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center text-blog-meta text-sm">
                <CalendarDays className="w-4 h-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <p className="text-blog-text font-inter text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
