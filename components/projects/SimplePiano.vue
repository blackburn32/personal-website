<template>
    <ProjectBase
        projectName="Simple Piano"
        projectDescription="A minimal piano written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages."
        projectUrl="https://blackburn32.github.io/simple-piano/"
        sourceCodeUrl="https://github.com/blackburn32/simple-piano"
        height="h-[600px]"
        frameWidth="w-2/3"
        descriptionWidth="w-1/3"
        mockupType="mockup-window"
        :flexDirection="flexDirection"
    />
</template>
<script setup lang="ts">
import ProjectBase from '~/components/projects/ProjectBase.vue';

const props = defineProps({
    flexDirection: String
})
</script>
