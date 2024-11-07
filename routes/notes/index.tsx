import { Head } from "$fresh/runtime.ts";
import { Sidebar } from "../../components/layout/Sidebar.tsx";
import { Header } from "../../components/layout/Header.tsx";
import { Footer } from "../../components/layout/Footer.tsx";

// This function would typically fetch and parse markdown files from the notes directory
const getNotes = () => {
  // Placeholder data
  return [
    { id: 1, title: "Note 1", excerpt: "This is the first note.", date: "2023-05-01" },
    { id: 2, title: "Note 2", excerpt: "This is the second note.", date:  "2023-05-15" },
    { id: 3, title: "Note 3", excerpt: "This is the third note.", date: "2023-05-30" },
  ];
};

export default function Notes() {
  const notes = getNotes();

  return (
    <>
      <Head>
        <title>Your Name - Notes</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Notes</h1>
            <div className="space-y-6">
              {notes.map((note) => (
                <div key={note.id} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="font-bold text-xl mb-2">{note.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{note.date}</p>
                  <p className="text-gray-700 mb-4">{note.excerpt}</p>
                  <a href={`/notes/${note.id}`} className="text-blue-600 hover:underline">Read more</a>
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
