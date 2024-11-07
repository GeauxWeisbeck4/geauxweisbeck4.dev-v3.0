import { Head } from "$fresh/runtime.ts";
import { Sidebar } from "../../components/layout/Sidebar.tsx";
import { Header } from "../../components/layout/Header.tsx";
import { Footer } from "../../components/layout/Footer.tsx";


// This function would typically fetch project data from a database or API
const getProjects = () => {
  // Placeholder data
  return [
    { id: 1, title: "Project 1", description: "This is the first project.", technologies: ["React", "Node.js"] },
    { id: 2, title: "Project 2", description: "This is the second project.", technologies: ["Vue", "Express"] },
    { id: 3, title: "Project 3", description: "This is the third project.", technologies: ["Angular", "Django"] },
  ];
};

export default function Projects() {
  const projects = getProjects();

  return (
    <>
      <Head>
        <title>Your Name - Projects</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="/static/logo.svg" alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={`/projects/${project.id}`} className="text-blue-600 hover:underline">View project</a>
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
