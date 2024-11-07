import { FunctionComponent } from "preact";
import { Button } from "../components/Button.tsx";

export const Hero: FunctionComponent = () => (
  <section id="hero" className="bg-gray-50 py-20 px-10">
    <div className="container mx-auto px-4 flex items-center">
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Digital Garden of Andrew Weisbeck!</h2>
        <p className="text-xl mb-6">
          Welcome to my home on the internet! This digital garden is a place where I work in
          public, share my knowledge, and let you get to know a bit more about me as a developer
          and a human.
        </p>
        <div className="space-x-4">
          <Button href="/contact">Contact Me</Button>
          <Button href="/resume" variant="outline">View Resume</Button>
        </div>
      </div>
      <div className="w-1/2 pl-20 pr-10">
        <img
          src="https://res.cloudinary.com/tar-heel-dev-studio/image/upload/v1727364042/codingatnight_hagssc.png"
          alt="Coding at night"
          className="w-auto h-auto rounded-3xl shadow-lg"
        />
      </div>
    </div>
  </section>
);
