type NavList = {
  id: string;
  title: string;
  path: string;
}[];
export const nav: NavList = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];
