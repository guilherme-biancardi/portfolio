<template>
  <div class="dev-information-content">
    <img src="../assets/dev-photo.webp" alt="">
    <div class="dev-text">
        <h2>{{ state.name }}</h2>
        <p>{{ lang?.office }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useAppStore } from "../stores/appStore";

const { getLanguageFile } = useAppStore()

const lang = computed(() => getLanguageFile?.devInformation)

const state = reactive({
  name: "guilherme biancardi",
})
</script>

<style scoped>
.dev-information-content{
    width: max-content;
    position: absolute;
    left: 12px;
    top: 8px;
    display: flex;
    align-items: center;
    column-gap: 14px;
}

.dev-text{
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    text-transform: capitalize;
}

.dev-text h2{
    color: var(--syntax-guide);
    font-size: 1.1em;
    font-weight: 600;
    /* text-transform: capitalize; */
}

.dev-text p{
    font-size: 0.95em;
}

img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    image-rendering: optimizeQuality;
}
</style>
