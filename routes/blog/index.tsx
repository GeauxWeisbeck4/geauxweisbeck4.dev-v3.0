import { Head } from "$fresh/runtime.ts";
import { Sidebar } from "../../components/layout/Sidebar.tsx";
import { Header } from "../../components/layout/Header.tsx";
import { Footer } from "../../components/layout/Footer.tsx";


// This function would typically fetch and parse markdown files from the content/posts directory
const getBlogPosts = () => {
  // Placeholder data
  return [
    { id: 1, title: "First Blog Post", excerpt: "This is the first blog post.", date: "2023-05-01" },
    { id: 2, title: "Second Blog Post", excerpt: "This is the second blog post.", date: "2023-05-15" },
    { id: 3, title: "Third Blog Post", excerpt: "This is the third blog post.", date: "2023-05-30" },
  ];
};

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <>
      <Head>
        <title>Your Name - Blog</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="/static/logo.svg" alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline">Read more</a>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
