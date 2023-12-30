<template>
    <div class="flex flex-col md:flex-row w-full">
        <div v-motion-slide-visible-once-left class="flex flex-col md:w-1/2 m-4 ml-8 justify-center items-center">
            <div class="text-2xl font-semibold mb-8 w-full">
                Simple Piano
            </div>
            <div class="text-xl mb-8 self-start">
                A minimal piano written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages.
            </div>
            <a
                class="text-lg link-primary self-start underline"
                href="https://blackburn32.github.io/simple-piano/"
                target="_blank"
            >
                https://blackburn32.github.io/simple-piano/
            </a>
            <a class="text-lg link link-primary underline self-start" href="https://github.com/blackburn32/simple-piano" target="_blank">
                Source Code
            </a>
        </div>
        <div v-motion-pop-visible-once class="mockup-window bg-base-300 md:w-1/2 m-4 mr-8 overflow-hidden">
            <IFrameWithLoading
                class="h-[600px] w-full"
                src="https://blackburn32.github.io/simple-piano/"
                title="Simple Piano"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
