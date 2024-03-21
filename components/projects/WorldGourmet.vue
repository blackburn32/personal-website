<template>
    <ProjectBase
        projectName="World Gourmet"
        projectDescription="An AI written food blog which explores ingredients and recipes from around the world. Written in Typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages."
        projectUrl="https://www.worldgourmet.us/"
        sourceCodeUrl="https://github.com/blackburn32/world-gourmet"
        frameWidth="w-1/2"
        descriptionWidth="w-1/2"
        height="h-[600px]"
        mockupType="mockup-window"
        :flex-direction="flexDirection"
    />
</template>
<script setup lang="ts">
import ProjectBase from '~/components/projects/ProjectBase.vue';

const props = defineProps({
    flexDirection: String
})
</script>
