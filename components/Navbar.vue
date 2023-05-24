<template>
    <div class="navbar bg-white/20 backdrop-blur space-x-8">
        <Icon
            class="hover:scale-105 cursor-pointer"
            name="material-symbols:home"
            size="32"
            @click="scrollIntoView('home')"
        />
        <div class="text-xl hover:scale-105 cursor-pointer" @click="scrollIntoView('projects')">Projects</div>
        <div class="text-xl hover:scale-105 cursor-pointer" @click="scrollIntoView('work')">Work</div>
        <div class="text-xl hover:scale-105 cursor-pointer" @click="scrollIntoView('writing')">Writing</div>
        <div class="text-xl hover:scale-105 cursor-pointer" @click="scrollIntoView('music')">Music</div>
        <NuxtLink class="text-xl hover:scale-105 cursor-pointer" to="/resume">Resume</NuxtLink>
    </div>
</template>
<script lang="ts" setup>
function scrollIntoView(id: string) {
    const element = document.getElementById(id);
    if(element){
        element.scrollIntoView({behavior: 'smooth'});
    }
}
</script>