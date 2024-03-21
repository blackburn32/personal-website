<template>
    <div class="flex w-full" :class="`flex-col md:${flexDirection}`">
        <div v-motion-slide-visible-once-left class="flex flex-col m-4 ml-8 justify-center items-center" :class="`w-full md:${descriptionWidth}`">
            <div class="text-2xl font-semibold mb-8 w-full">
                {{ projectName }}
            </div>
            <div class="text-xl mb-8 self-start">
                {{ projectDescription }}
            </div>
            <a
                class="text-lg link-primary self-start underline"
                :href="projectUrl"
                target="_blank"
            >
                {{ projectUrl }}
            </a>
            <a v-if="sourceCodeUrl" class="text-lg link link-primary self-start underline" :href="sourceCodeUrl" target="_blank">
                Source Code
            </a>
        </div>
        <div v-motion-pop-visible-once class="bg-base-300 m-4 mr-8 overflow-hidden" :class="`w-full md:${frameWidth} ${mockupType}`">
            <IFrameWithLoading
                class="w-full"
                :class="height"
                :src="projectUrl"
                :title="projectName"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    projectName: String,
    projectDescription: String,
    projectUrl: String,
    sourceCodeUrl: String || undefined,
    frameWidth: String,
    descriptionWidth: String,
    flexDirection: String,
    height: String,
    mockupType: String
})
</script>
