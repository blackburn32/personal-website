<template>
    <ProjectBase
        projectName="Pulsecheck"
        projectDescription="A sentiment tracking application designed to help users monitor and analyze public opinion on various societal topics. Track trends and gauge the pulse of community sentiment over time."
        projectUrl="https://pulsecheck-navy.vercel.app/"
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
