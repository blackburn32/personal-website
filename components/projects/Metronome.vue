<template>
    <ProjectBase
        projectName="Metronome"
        projectDescription="A simple metronome written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages."
        projectUrl="https://blackburn32.github.io/metronome/"
        sourceCodeUrl="https://github.com/blackburn32/metronome"
        mockupType="mockup-window"
        height="h-[300px]"
        :flexDirection="flexDirection"
    />
</template>
<script setup lang="ts">
import ProjectBase from '~/components/projects/ProjectBase.vue';

const props = defineProps({
    flexDirection: String
})
</script>

