<template>
  <article>
    <ul class="files-tab-list">
      <li v-for="(tab, index) in fileTabs" :key="index">
        <RouterLink :to="tab.route">
          <FileTabComponent
            :file-type="tab.type"
            :file-name="tab.name"
            :selected="currentRoute === tab.route"
          ></FileTabComponent>
        </RouterLink>
      </li>
    </ul>
    <RouterView v-slot="{ Component }" :name="routerViewName">
      <Transition name="route" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </article>
</template>

<script setup>
import { computed } from "vue";
import FileTabComponent from "./FileTabComponent.vue";
import { useRoute } from "vue-router";

const currentRoute = computed(() => useRoute().fullPath);

defineProps({
  fileTabs: Array,
  routerViewName: String,
});
</script>

<style scoped>
article {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
.files-tab-list {
  display: flex;
  align-items: center;
  column-gap: 4px;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>
