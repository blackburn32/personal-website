<template>
    <div class="flex items-center justify-center">
        <div v-show="loading" class="flex h-full w-full items-center justify-center">
            <Icon name="eos-icons:three-dots-loading" size="256"/>
        </div>
        <iframe
            v-show="!loading"
            ref="iframe"
            :class="{ 'h-0' : loading}"
            :src="src"
            :title="title"
            class="h-full w-full"
        />
    </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from 'vue';

const props = defineProps<{
    src: string; title: string;
}>();

const iframe = ref<HTMLIFrameElement | null>(null);

const loading = ref(true);

onMounted(() => {
    iframe.value?.addEventListener('load', () => {
        loading.value = false;
    });
});
</script>