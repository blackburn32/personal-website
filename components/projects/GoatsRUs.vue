<template>
    <div class="flex flex-col md:flex-row-reverse w-full">
        <div v-motion-slide-visible-once-left class="flex flex-col md:w-1/2 m-4 ml-8 justify-center items-center">
            <div class="text-2xl font-semibold mb-8 w-full">
                Goats R Us
            </div>
            <div class="text-xl mb-8 self-start">
                A community built for goat farmers and property owners to connect and feed goats with unwanted vegetation.
                Currently just front pages and a sign up form.
                Written in typescript, using Nuxt 3 and Tailwind CSS. Hosted on AWS Lambda, API Gateway and DynamoDB.
            </div>
            <a
                class="text-lg link-primary self-start underline"
                href="https://goats-r-us.vercel.app/"
                target="_blank"
            >
                https://goats-r-us.vercel.app
            </a>
        </div>
        <div v-motion-pop-visible-once class="mockup-window bg-base-300 md:w-1/2 m-4 mr-8 overflow-hidden">
            <IFrameWithLoading
                class="h-[640px] w-full"
                src="https://goats-r-us.vercel.app/"
                title="Goats R Us"
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
