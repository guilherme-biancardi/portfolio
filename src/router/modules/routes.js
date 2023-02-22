import { createRoute } from "./createRoute";
import { aboutMe } from "./aboutMeRoute";
import { skills } from "./SkillsRoute";

const welcome = createRoute(
  "/welcome",
  import("../../views/WelcomeView.vue"),
  "app"
);

const projects = createRoute(
  "/projects",
  import("../../views/ProjectsView.vue"),
  "app"
);

export const useRoutes = () => [
  {
    path: "/",
    redirect: "/welcome",
  },
  welcome,
  aboutMe,
  skills,
  projects,
];
