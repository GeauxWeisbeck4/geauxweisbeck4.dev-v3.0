import { FunctionComponent } from "preact";

export const StatusUpdate: FunctionComponent = () => (
  <section id="status" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Current Status</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-xl">
          Currently working on an exciting new project involving AI and web development.
          Stay tuned for updates!
        </p>
      </div>
    </div>
  </section>
);
