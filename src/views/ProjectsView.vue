<template>
  <div class="projects-content">
    <h2>alguns projetos</h2>
    <div class="project-grid">
      <CardProject
        v-for="(project, index) in projects"
        :key="index"
        :name="project?.name"
        :text="project?.text"
        :link="project?.link"
        :image="project?.image"
        :repository="project?.repository"
      ></CardProject>
    </div>
  </div>
</template>

<script setup>
import projects from "../components/projects/projects.json";
import CardProject from "@/components/projects/CardProject.vue";
</script>

<style scoped>
.projects-content {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 12px;
}

.projects-content h2 {
  text-transform: uppercase;
  color: var(--yellow);
}

.project-grid {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
