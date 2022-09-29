const createRoute = (path, component) => ({
    path,
    component: () => component
})

export { createRoute }