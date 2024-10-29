import { FunctionComponent } from "preact";
import { Button } from "../components/Button.tsx";

export const Hero: FunctionComponent = () => (
  <section id="hero" className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 flex items-center">
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-xl mb-6">
          I'm a passionate developer and content creator. I love building web applications
          and sharing my knowledge with others.
        </p>
        <div className="space-x-4">
          <Button href="/contact">Contact Me</Button>
          <Button href="/resume" variant="outline">View Resume</Button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/static/logo.svg"
          alt="Your Name"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
);
