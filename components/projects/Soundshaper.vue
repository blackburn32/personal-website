<template>
    <ProjectBase
        projectName="Soundshaper"
        projectDescription="A polyrhythm visualizer written in Typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages."
        projectUrl="https://blackburn32.github.io/soundshaper/"
        frameWidth="w-2/3"
        descriptionWidth="w-1/3"
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
