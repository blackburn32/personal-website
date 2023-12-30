<template>
  <section class="bg-neutral">

    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div :class="carousel" class="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
          <div class="swiper-wrapper">
            <WritingCarouselItem
              v-for="item in items"
              :item="item"
            />
          </div>
        </div>

        <div class="flex mt-12 space-x-4 justify-end">
          <button :class="prev" class="relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
            <span class="sr-only">Previous</span>
            <svg class="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button :class="next" class="relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
            <span class="sr-only">Next</span>
            <svg class="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {Swiper} from 'swiper'
import {Navigation} from "swiper/modules";
import type {PropType} from 'vue';
import type {CarouselItemProps} from '~/utils/types';
import 'swiper/css'



Swiper.use([Navigation]);

const props = defineProps({
  title: String,
  items: Array as PropType<CarouselItemProps[]>,
  next: String,
  prev: String,
  carousel: String,
})

onMounted(() => {
  // eslint-disable-next-line no-unused-vars
  const carousel = new Swiper(`.${props.carousel}`, {
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 4
      }
    },
    grabCursor: true,
    loop: false,
    centeredSlides: false,
    initialSlide: 0,
    spaceBetween: 24,
    watchSlidesProgress: true,
    navigation: {
      nextEl: `.${props.next}`,
      prevEl: `.${props.prev}`,
    },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
  })
})
</script>
