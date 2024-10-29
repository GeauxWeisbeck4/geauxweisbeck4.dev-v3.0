import { Head } from "$fresh/runtime.ts";
import { Sidebar } from "../components/Sidebar.tsx";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Hero } from "../islands/Hero.tsx";
import { FeaturedBlogPosts } from "../islands/FeaturedBlogPosts.tsx";
import { FeaturedProjects } from "../islands/FeaturedProjects.tsx";
import { StatusUpdate } from "../islands/StatusUpdate.tsx";
import { Newsletter } from "../islands/Newsletter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name - Home</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Hero />
            <FeaturedBlogPosts />
            <FeaturedProjects />
            <StatusUpdate />
            <Newsletter />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
