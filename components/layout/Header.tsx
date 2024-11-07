import { FunctionComponent } from "preact";
import { Icon } from "./Icon.tsx";

export const Header: FunctionComponent = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-2 text-center text-sky-600"><a href="/about" className="hover:text-orange-600">GeauxWeisbeck4.dev</a> <br/><span className="text-2xl font-bold text-teal-500">Wiki, Journal, and Content for Indie Devs</span></h1>
      <nav>
        <ul className="flex justify-center items-center space-x-4">
          {[
            { name: "Home", href: "/", icon: "home" },
            { name: "Blog", href: "/blog", icon: "blog" },
            { name: "Projects", href: "/projects", icon: "projects" },
            { name: "Status", href: "/status", icon: "status" },
            { name: "Newsletter", href: "/newsletter", icon: "newsletter" },
          ].map((item, index, array) => (
            <li key={item.name} className="flex items-center">
              {/* {index !== 0 && <div className="w-px h-6 bg-gray-300 mr-4"></div>} */}
              <a href={item.href} className="text-gray-600 hover:text-gray-900 flex items-center">
                <span>{item.name}</span>
                <Icon name={item.icon} className="ml-2" />
              </a>
              {index !== array.length - 1 && <div className="w-[1.5px] h-6 bg-gray-300 ml-4"></div>}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
