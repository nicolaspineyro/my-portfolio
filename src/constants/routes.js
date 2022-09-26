import { About, Contact, Home } from "src/pages";

export const RoutesArray = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About & Experience",
    path: "/about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];
