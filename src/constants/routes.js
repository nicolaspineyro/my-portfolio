import { About, Contact, Intro } from "src/pages";

export const RoutesArray = [
  {
    name: "Intro",
    path: "/",
    element: <Intro />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];
