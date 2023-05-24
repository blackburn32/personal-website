<template>
    <div class="flex flex-col w-full">
        <div class="text-4xl text-center font-semibold m-8">
            Music
        </div>
        <div class="flex flex-row w-full justify-between">
            <div v-motion-slide-visible-left class="flex flex-col m-8 w-1/3">
                <div class="text-3xl text-center font-semibold">
                    The Cult Classics
                </div>
                <div class="mt-2 text-center">Drums</div>
                <div class="flex flex-col items-center">
                    <iframe
                        ref="player"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowfullscreen=""
                        class="shadow-xl rounded-xl mt-16 max-w-md"
                        frameBorder="0"
                        height="352"
                        loading="lazy"
                        src="https://open.spotify.com/embed/track/5wJwNXVz2egidVgmleBPJo?utm_source=generator&theme=0"
                        style="border-radius:16px"
                        width="100%"
                    />
                </div>
            </div>
            <div v-motion-slide-visible-top class="flex flex-col m-8 w-1/3">
                <div class="text-3xl text-center font-semibold">
                    The Shape of Color
                </div>
                <div class="mt-2 text-center">Drums</div>
                <iframe
                    allowfullscreen
                    class="shadow-xl rounded-xl mt-16"
                    frameborder="0"
                    height="315"
                    src="https://www.youtube.com/embed/L88XgB_Ovb8"
                    title="The Shape of Color - Aussie"
                    width="560"
                ></iframe>
            </div>
            <div v-motion-slide-visible-right class="flex flex-col m-8 w-1/3">
                <div class="text-3xl text-center font-semibold">
                    Soundcloud
                </div>
                <div class="mt-2 text-center">Solo Production</div>
                <iframe
                    allow="autoplay"
                    class="shadow-xl rounded-xl mt-16"
                    frameborder="no"
                    height="166"
                    scrolling="no"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/411884631&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    width="100%"
                ></iframe>
                <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                    <a
                        href="https://soundcloud.com/mr-sandvich"
                        style="color: #cccccc; text-decoration: none;"
                        target="_blank"
                        title="LuckyUnlucky"
                    >
                        LuckyUnlucky
                    </a> ·
                    <a
                        href="https://soundcloud.com/mr-sandvich/a-night-under-the-sun"
                        style="color: #cccccc; text-decoration: none;"
                        target="_blank"
                        title="A Night Under The Sun"
                    >
                        A Night Under The Sun
                    </a>
                </div>
                <iframe
                    allow="autoplay"
                    class="shadow-xl rounded-xl mt-4"
                    frameborder="no"
                    height="166"
                    scrolling="no"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346479612&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    width="100%"
                ></iframe>
                <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                    <a
                        href="https://soundcloud.com/mr-sandvich"
                        style="color: #cccccc; text-decoration: none;"
                        target="_blank"
                        title="LuckyUnlucky"
                    >
                        LuckyUnlucky
                    </a> ·
                    <a
                        href="https://soundcloud.com/mr-sandvich/op1musings2"
                        style="color: #cccccc; text-decoration: none;"
                        target="_blank"
                        title="Op1musings2"
                    >
                        Op1musings2
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>