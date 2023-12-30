<template>
    <div class="flex flex-col md:flex-row w-full">
        <div v-motion-slide-visible-once-left class="flex flex-col md:w-1/3 m-4 ml-8 justify-center items-center">
            <div class="text-2xl font-semibold mb-8 w-full">
                Simple Synth
            </div>
            <div class="text-xl mb-8 self-start">
                A minimal synthesizer written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on Github Pages.
            </div>
            <a
                class="text-lg link-primary self-start"
                href="https://blackburn32.github.io/simple-synth/"
                target="_blank"
            >
                https://blackburn32.github.io/simple-synth/
            </a>
        </div>
        <div v-motion-pop-visible-once class="mockup-window bg-base-300 md:w-2/3 m-4 mr-8 overflow-hidden">
            <IFrameWithLoading
                class="h-[600px] w-full"
                src="https://blackburn32.github.io/simple-synth/"
                title="Simple Synth"
            />
        </div>
    </div>
</template>
