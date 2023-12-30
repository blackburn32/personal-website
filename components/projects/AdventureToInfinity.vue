<template>
    <div class="flex flex-col md:flex-row w-full">
        <div v-motion-slide-visible-once-left class="flex flex-col md:w-1/2 m-4 ml-8 justify-center items-center">
            <div class="text-2xl font-semibold mb-8 w-full">
                Adventure to Infinity
            </div>
            <div class="text-xl mb-8 self-start">
                A text based choose your own adventure written and illustrated by AI.
                Written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on AWS Lambda, API Gateway and DynamoDB.
            </div>
            <a
                class="text-lg link-primary self-start underline"
                href="https://adventuretoinfinity.com/"
                target="_blank"
            >
                https://adventuretoinfinity.com
            </a>
        </div>
        <div v-motion-pop-visible-once class="mockup-window bg-base-300 md:w-1/2 m-4 mr-8 overflow-hidden">
            <IFrameWithLoading
                class="h-[780px] w-full"
                src="https://adventuretoinfinity.com/"
                title="Adventure to Infinity"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import IFrameWithLoading from '~/components/IFrameWithLoading.vue';

const iframe = ref<HTMLIFrameElement | null>(null);

const loading = ref(true);

onMounted(() => {
    iframe.value?.addEventListener('load', () => {
        loading.value = false;
    });
});
</script>
