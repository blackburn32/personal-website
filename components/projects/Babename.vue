<template>
    <ProjectBase
        projectName="babename"
        projectDescription="Official website for babename the band. A showcase of our music, upcoming shows, and band information."
        projectUrl="https://www.babenametheband.com"
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
