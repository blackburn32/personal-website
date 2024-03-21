<template>
    <ProjectBase
        projectName="Adventure to Infinity"
        projectDescription="A text based choose your own adventure written and illustrated by AI. Written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on AWS Lambda, API Gateway and DynamoDB."
        projectUrl="https://adventuretoinfinity.com/"
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
