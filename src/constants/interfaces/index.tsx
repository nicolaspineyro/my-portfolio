import { ReactElement } from "react";

interface RouteObject {
  name: string;
  path: string;
  element: ReactElement;
}

interface ExperienceObject {
  id: number;
  icon: string;
  company: string;
  position: string;
  stack: Array<String>;
  date: string;
}

export type { RouteObject, ExperienceObject };
