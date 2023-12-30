<template>
    <div class="flex flex-col overflow-x-hidden">
        <Navbar class="fixed top-0 z-10"/>
        <div class="flex flex-col overflow-x-hidden">
            <Hero id="home" class="scroll-mt-8"/>
            <ProjectsSummary id="projects" class="scroll-mt-40"/>
            <WorkSummary id="work" class="scroll-mt-32"/>
            <WritingSummary id="writing" class="scroll-mt-8"/>
            <MusicSummary id="music" class="scroll-mt-10"/>
            <Footer/>
        </div>
    </div>
</template>
<script setup lang="ts">

import AOS from 'aos'

onMounted(() => {
    AOS.init({
        once: true,
        disable: 'phone',
        duration: 500,
        easing: 'ease-out-cubic',
    })
})

</script>
