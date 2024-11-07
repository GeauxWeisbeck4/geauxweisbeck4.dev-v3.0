import { FunctionComponent } from "preact";

export const Footer: FunctionComponent = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <p className="text-center">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
  </footer>
);
