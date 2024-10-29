import { FunctionComponent } from "preact";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ href, variant = "primary", children }) => (
  <a
    href={href}
    className={`inline-block px-6 py-2 rounded-lg font-semibold ${
      variant === "primary"
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "border border-blue-600 text-blue-600 hover:bg-blue-50"
    }`}
  >
    {children}
  </a>
);
