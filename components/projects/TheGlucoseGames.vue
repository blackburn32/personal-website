<template>
    <ProjectBase
        projectName="The Glucose Games"
        projectDescription="An interactive web application built to help users understand and improve their blood sugar control through engaging visualizations and tracking tools."
        projectUrl="https://glucose.games"
        frameWidth="w-1/2"
        descriptionWidth="w-1/2"
        height="h-[600px]"
        mockupType="mockup-window"
        :flex-direction="flexDirection"
    />
</template>
<script lang="ts" setup>
import ProjectBase from '~/components/projects/ProjectBase.vue';

const props = defineProps({
    flexDirection: String
})
</script>
