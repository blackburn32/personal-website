<template>
    <div class="swiper-slide h-auto flex flex-col">
        <img class="w-full aspect-[7/4] object-cover" :src="item.image" width="259" height="148" :alt="item.title" />
        <div class="grow bg-white/20 px-4 pb-6">
            <div class="flex items-start -space-x-3 -ml-0.5 mb-4 -mt-5">
                <img class="rounded-full border-2 border-white/40 box-content" :src="avatar" width="32" height="32" alt="Alex Blackburn" />
            </div>
            <NuxtLink class="inline-block font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" :to="item.link">{{item.title}}</NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
import type {PropType} from 'vue';
import type {CarouselItemProps} from '~/utils/types';

const avatar = 'https://gravatar.com/userimage/78576139/1438eb4cd6ce90600701701c22a9c117.jpeg?size=32'

const props = defineProps({
  item: {
    type: Object as PropType<CarouselItemProps>,
    required: true
  }
})
</script>
