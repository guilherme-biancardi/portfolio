import { createRoute } from "./createRoute";

const childrenView = "about";

const aboutMeChildren = createRoute(
  "/about-me",
  import("../../views/aboutMe/AboutMe.vue"),
  childrenView
);

const formationsChildren = createRoute(
  "formations",
  import("../../views/aboutMe/AboutFormations.vue"),
  childrenView
);

export const aboutMe = createRoute(
  "/about-me",
  import("../../views/AboutMeView.vue"),
  "app",
  {
    children: [aboutMeChildren, formationsChildren],
  }
);
