import { FunctionComponent } from "preact";

export const Sidebar: FunctionComponent = () => (
  <aside className="w-64 h-screen bg-gray-100 fixed left-0 top-0 overflow-y-auto">
    <div className="p-4">
      <img
        src="/static/logo.svg"
        alt="Your Name"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center mb-4">Andrew Weisbeck</h2>
      <nav className="mb-8">
        <ul className="space-y-2">
          {["Home", "About", "Notes", "Projects", "Content", "Resources", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Main Websites & Blogs</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">Website 1</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Blog 1</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Social Media</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">Twitter</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">GitHub</a></li>
        </ul>
      </div>
    </div>
  </aside>
);
