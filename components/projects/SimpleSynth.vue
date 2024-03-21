<template>
    <ProjectBase
        projectName="Simple Synth"
        projectDescription="A minimal synthesizer written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages."
        projectUrl="https://blackburn32.github.io/simple-synth/"
        height="h-[600px]"
        frameWidth="w-2/3"
        descriptionWidth="w-1/3"
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
