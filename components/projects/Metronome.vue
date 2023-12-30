<template>
    <div class="flex flex-col md:flex-row-reverse w-full">
        <div v-motion-slide-visible-once-right class="flex flex-col md:w-1/2 m-4 ml-8 justify-center">
            <div class="text-2xl font-semibold mb-8">
                Metronome
            </div>
            <div class="text-xl mb-8">
                A simple metronome written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages.
            </div>
            <a
                class="text-lg link link-primary underline"
                href="https://blackburn32.github.io/metronome/"
                target="_blank"
            >
                https://blackburn32.github.io/metronome/
            </a>
            <a class="text-lg link link-primary" href="https://github.com/blackburn32/metronome" target="_blank">
                Source Code
            </a>
        </div>
        <div v-motion-fade-visible v-motion-slide-visible-once-left class="mockup-window bg-base-300 md:w-1/2 m-4 ml-8">
            <IFrameWithLoading
                class="w-full h-[300px]"
                src="https://blackburn32.github.io/metronome/"
                title="Metronome"
            />
        </div>
    </div>
</template>
