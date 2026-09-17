export interface IProjects {
  src: string;
  alt: string;
  title: string;
  with: string;
  height: string;
  description: string;
  category?: string;
  links: {
    name: string;
    href: string;
  }[];
}
