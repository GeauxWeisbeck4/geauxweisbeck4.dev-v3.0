import { FunctionComponent } from "preact";

export const Newsletter: FunctionComponent = () => (
  <section id="newsletter" className="bg-gray-800 text-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Subscribe to My Newsletter</h2>
      <form className="max-w-md mx-auto">
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
);
