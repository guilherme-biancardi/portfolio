import { createRoute } from "./createRoute";

const skillsView = "skills";

const webChildren = createRoute(
  "web-development",
  import("../../views/skills/WebDevelopment.vue"),
  skillsView
);

const vueChildren = createRoute(
  "vue-js",
  import("../../views/skills/VueLanguage.vue"),
  skillsView
);

export const skills = createRoute(
  "/skills",
  import("../../views/SkillsView.vue"),
  "app",
  {
    redirect: "/skills/web-development",
    children: [webChildren, vueChildren],
  }
);
