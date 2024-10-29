import { FunctionComponent } from "preact";

export const Header: FunctionComponent = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
          <li><a href="#status" className="text-gray-600 hover:text-gray-900">Status</a></li>
          <li><a href="#newsletter" className="text-gray-600 hover:text-gray-900">Newsletter</a></li>
        </ul>
      </nav>
    </div>
  </header>
);
