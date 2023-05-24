<template>
    <footer class="footer items-center p-4 text-neutral-content">
        <div class="items-center grid-flow-col">
            <p>Copyright © 2023 - Alex Blackburn</p>
        </div>
        <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <NuxtLink
                class="hover:scale-125 transition-transform"
                external="external"
                target="_blank"
                to="https://github.com/blackburn32"
            >
                <Icon name="mdi:github-box" size="32"/>
            </NuxtLink>
        </div>
    </footer>
</template>