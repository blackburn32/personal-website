<template>
    <ProjectBase
        projectName="The Book of Infinite Rhythms"
        projectDescription="A rhythm generator for practice and inspiration. Creates an infinite number of unique rhythms with configurable complexity. Written in Typescript, using Nuxt 3, Tailwind CSS, Auth0 and Neon. Hosted on Vercel."
        projectUrl="https://www.the-book-of-infinite-rhythms.com/"
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
    flexDirection: String || 'flex-row'
})
</script>
