import "@/app/md.css";
import type { MDXComponents } from "mdx/types";

// TODO: Devise a layout solution here that does not require raw-dogging HTML

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <div className="md">{children}</div>,
    ...components,
  };
}
