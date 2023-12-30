<template>
    <div class="flex flex-col md:flex-row w-full">
        <div v-motion-slide-visible-once-left class="flex flex-col md:w-1/2 m-4 ml-8 justify-center">
            <div class="text-2xl font-semibold mb-8">
                The Cult Classics
            </div>
            <div class="text-xl mb-8">
                A showcase website for my band, The Cult Classics. Written in typescript, using Nuxt 3 and Tailwind CSS.
                Hosted on Github Pages and ImageKit.
            </div>
            <a
                class="text-lg link-primary"
                href="https://www.thecultclassics.band/"
                target="_blank"
            >
                https://www.thecultclassics.band
            </a>
            <a
                class="text-lg link-primary"
                href="https://github.com/blackburn32/the-cult-classics"
                target="_blank"
            >
                Source Code
            </a>
        </div>
        <div v-motion-pop-visible-once class="flex flex-col md:w-1/2 m-4 justify-center items-center">
            <div class="mockup-phone">
                <div class="camera"></div>
                <IFrameWithLoading
                    class="display artboard artboard-demo phone-3"
                    src="https://www.thecultclassics.band/"
                    title="The Cult Classics"
                />
            </div>
        </div>
    </div>
</template>
