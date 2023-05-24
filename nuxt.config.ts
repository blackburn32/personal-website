export default defineNuxtConfig({
    app: {
        baseURL: '/personal-website/',
        head: {
            title: 'Alex Blackburn',
            meta: [
                {
                    name: 'description',
                    content: 'Alex Blackburn is a software engineer, writer, and musician based in Seattle, Washington.',
                },
            ]
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: false,
    modules: ['@vueuse/motion/nuxt', 'nuxt-icon'],
});
