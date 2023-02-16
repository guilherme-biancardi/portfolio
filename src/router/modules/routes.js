import { createRoute } from "./createRoute";
import { aboutMe } from "./aboutMeRoute";
import { skills } from "./SkillsRoute";

const projects = createRoute(
  "/projects",
  import("../../views/ProjectsView.vue"),
  "app"
);

export const useRoutes = () => [
  {
    path: "/",
    redirect: "/about-me",
  },
  aboutMe,
  skills,
  projects
];
