<template>
    <ProjectBase
        projectName="Goats R Us"
        projectDescription="A community built for goat farmers and property owners to connect and feed goats with unwanted vegetation. Currently just front pages and a sign up form. Written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on AWS Lambda, API Gateway and DynamoDB."
        projectUrl="https://goats-r-us.vercel.app/"
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
