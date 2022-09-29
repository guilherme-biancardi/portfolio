import { createRoute } from "./createRoute";

const aboutMe = createRoute('/about-me', import('@/views/AboutMeView.vue'))
const qualifications = createRoute('/qualifications', import('../../views/QualifiquationsView.vue'))
const projects = createRoute('/projects', import('../../views/ProjectsView.vue'))

export const useRoutes = () => [
    { path: '/', redirect: '/about-me' },
    aboutMe,
    qualifications,
    projects
]