import { FunctionComponent } from "preact";

export const FeaturedBlogPosts: FunctionComponent = () => (
  <section id="blog" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Blog Posts</h2>
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/static/logo.svg" alt={`Blog ${i}`} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Blog Post {i}</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="mt-4 inline-block text-blue-600 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
