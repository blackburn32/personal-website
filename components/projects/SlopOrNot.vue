<template>
    <ProjectBase
        projectName="Slop or Not"
        projectDescription="A small, educational game designed to help users recognize and identify AI-generated slop. Test your ability to distinguish between authentic content and AI-generated material through interactive challenges."
        projectUrl="https://slop-or-not.info/"
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
