<template>
    <div class="flex flex-col w-full bg-neutral pb-16">
        <div class="text-center text-4xl m-16 font-semibold">
            Writing
        </div>
        <div class="flex flex-col md:flex-row items-center">
            <div class="mx-8 mt-8 md:w-1/2 flex flex-col self-start">
                <div class="text-3xl font-semibold mb-4">
                    SLUG Magazine
                </div>
                <div class="text-lg">Writer, 2014 - 2020</div>
                <div>I spent years writing for SLUG Magazine, mostly album or concert reviews, but also some of the
                     larger features on topics like biking an adaptive skiing. What started as just a way get free
                     concert tickets for a short page of words, evolved into interviews with bands, early access to
                     albums for review, and numerous other opportunities to connect more deeply with Salt Lake City.
                     SLUG Magazine opened a lot of doors for me, and having nearly 100 articles published in
                     print or online is one of my prouder accomplishments.
                </div>
                <div class="mt-4">
                    <NuxtLink
                        class="link"
                        external="external"
                        href="https://www.slugmag.com/authors/alex-blackburn/"
                        target="_blank"
                    >
                        Check out my articles here,
                    </NuxtLink>
                    or click one of these links to read more!
                </div>
            </div>
            <WritingCarousel title="SLUG Magazine" :items="slugArticles" carousel="slug-carousel" prev="slug-prev" next="slug-next"/>
        </div>
        <div class="flex flex-col md:flex-row-reverse w-full items-start">
            <div class="mx-8 mt-8 md:w-1/2">
                <div class="text-3xl font-semibold mb-4">
                    Salt Lake Magazine
                </div>
                <div class="text-lg">Writer, 2019</div>
                <div>
                    I was fortunate enough to have the opportunity to write a series of concert previews / reviews of the
                    2019 Red Butte concert series for Salt Lake Magazine. Our neighbor at the time was the
                    editor-in-chief of SLMag and needed someone to fill the shoes of the previous journalist for a
                    season. As usual, I'm easy to convince with a free concert ticket being waved in my face, and
                    getting a few more published articles under my belt was a nice bonus.
                </div>
                <div class="mt-4">
                    <NuxtLink
                        class="link"
                        external="external"
                        href="https://www.saltlakemagazine.com/author/ablackburn/"
                        target="_blank"
                    >
                        Check out my articles here,
                    </NuxtLink>
                    or click one of these links to read more!
                </div>
            </div>
            <WritingCarousel title="Salt Lake Magazine" :items="slMagArticles" carousel="sl-carousel" prev="sl-prev" next="sl-next"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
const slugArticles = [
    {
        'title': 'Review: TTNG – Animals Acoustic',
        'link': 'https://www.slugmag.com/music/national-music-reviews/review-ttng-animals-acoustic/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/10/a2221033669_10.jpg',
    }, {
        'title': 'Getting the Beat Right with Jack DeJohnette',
        'link': 'https://www.slugmag.com/music/interviews/music-interviews/getting-the-beat-right-with-jack-dejohnette/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/jackdejohnette-William-Semeraro.jpg',
    }, {
        'title': 'Review: CHON – CHON',
        'link': 'https://www.slugmag.com/music/national-music-reviews/chon-chon/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/06/366-ED-NMR-CHON.jpg',
    }, {
        'title': 'Review: Pink Frost – Gargoyle Days',
        'link': 'https://www.slugmag.com/music/national-music-reviews/pink-frost-gargoyle-days/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/a1846121252_10.jpg',
    }, {
        'title': 'Review: Twin Ponies – Friendly Pet Mass Graves',
        'link': 'https://www.slugmag.com/music/national-music-reviews/twin-ponies-friendly-pet-mass-graves/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/09/TwinPonies.jpg',
    }, {
        'title': 'Review: Twin Trances – Self-Titled',
        'link': 'https://www.slugmag.com/music/national-music-reviews/twin-trances-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/10/Twin-Trances.jpg',
    }, {
        'title': 'Review: TTNG – Disappointment Island',
        'link': 'https://www.slugmag.com/music/national-music-reviews/ttng-disappointment-island/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/06/a3888090651_10.jpg',
    }, {
        'title': 'Review: The Bronzed Chorus – Summering',
        'link': 'https://www.slugmag.com/music/national-music-reviews/bronzed-chorus-summering/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/08/TBC-cover.jpg',
    }, {
        'title': 'Review: Sunder – Self Titled',
        'link': 'https://www.slugmag.com/music/national-music-reviews/sunder-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/sunder-sunder.jpg',
    }, {
        'title': 'Review: Parquet Courts – Wide Awake!',
        'link': 'https://www.slugmag.com/music/national-music-reviews/parquet-courts-wide-awake/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/05/rt0001_parquet_courts_wide_awake.jpg',
    }, {
        'title': 'Review: Not Blood Paint – Believing is Believing',
        'link': 'https://www.slugmag.com/music/national-music-reviews/not-blood-paint-believing-believing/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/05/download.jpg',
    }, {
        'title': 'Review: Media Jeweler – $99 R/T Hawaii',
        'link': 'https://www.slugmag.com/music/national-music-reviews/media-jeweler-99-rt-hawaii/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/09/MediaJeweler.jpg',
    }, {
        'title': 'Review: Maserati – Rehumanizer',
        'link': 'https://www.slugmag.com/music/national-music-reviews/maserati-rehumanizer/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/Maserati-.jpg',
    }, {
        'title': 'Review: Le Butcherettes – A Raw Youth',
        'link': 'https://www.slugmag.com/music/national-music-reviews/le-butcherettes-a-raw-youth/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/10/Le-Butcherettes.jpg',
    }, {
        'title': 'Review: Guides – Abstract Mind',
        'link': 'https://www.slugmag.com/music/national-music-reviews/guides-abstract-mind/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/09/Guides.jpg',
    }, {
        'title': 'Local Review: Will Baxter Band – Believe',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-review-will-baxter-band-believe/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/03/Image_Unavailable2.jpg',
    }, {
        'title': 'Local Review: Your Meteor – Byzantium',
        'link': 'https://www.slugmag.com/music/local-music-reviews/your-meteor-byzantium/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/03/a0754887466_10.jpg',
    }, {
        'title': 'Local Review: Westward – Empire of Deception',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-westward-empire-deception/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/12/Westward.jpg',
    }, {
        'title': 'Local Review: Vid Nelson – Taste Test Pity City',
        'link': 'https://www.slugmag.com/music/local-music-reviews/vid-nelson-taste-test-pity-city/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/07/vid.nelson.jpg',
    }, {
        'title': 'Local Review: Vid Nelson – Millenials',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-vid-nelson-millenials/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/03/338-Ed-LMR-Vid-Nelson-Millenials-1.jpg',
    }, {
        'title': 'Local Review: The Statuettes – Modern Despondence',
        'link': 'https://www.slugmag.com/music/local-music-reviews/statuettes-modern-despondence/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/08/statuettes.jpg',
    }, {
        'title': 'Local Review: Talia Keys – Fool’s Gold',
        'link': 'https://www.slugmag.com/music/local-music-reviews/talia-keys-fools-gold/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/09/Talia-Keys-Fools-Gold.jpg',
    }, {
        'title': 'Local Review: Super Bubble – Self-Titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-super-bubble-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/06/Super-Bubble.jpg',
    }, {
        'title': 'Local Review: Sky as Skin – 10000 beautiful lakes',
        'link': 'https://www.slugmag.com/music/local-music-reviews/sky-as-skin/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/09/600x600bb.jpg',
    }, {
        'title': 'Local Review: Slow No – Wake',
        'link': 'https://www.slugmag.com/music/local-music-reviews/slow-no-wake/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/02/351-Ed-LMR-Slow-No-Wake.jpg',
    }, {
        'title': 'Local Review: Scarlet Rain – Eleventh Hour',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-scarlet-rain-eleventh-hour/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/07/Scarlet-Rain-Eleventh-Hour.jpg',
    }, {
        'title': 'Local Review: Second Anchor Line – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/second-anchor-line/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/11/Second-Anchor-Line.jpg',
    }, {
        'title': 'Local Review: PINE – Nibiru',
        'link': 'https://www.slugmag.com/music/local-music-reviews/pine-nibiru/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/09/358-LMR-PINE.jpg',
    }, {
        'title': 'Local Review: My Private Island – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/my-private-island-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/02/Screen-Shot-2016-02-29-at-10.08.56-AM.png',
    }, {
        'title': 'Local Review: Morgan and The Mountain – Pieces of Cadence',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-review-morgan-mountain-pieces-cadence/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/11/a1514151730_10.jpg',
    }, {
        'title': 'Local Review: Night Marcher – Us & Them',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-review-night-marcher-us/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/11/FullImage-e1543855997116.jpg',
    }, {
        'title': 'Local Review: Mayday RED – Let It Burn',
        'link': 'https://www.slugmag.com/music/local-music-reviews/mayday-red-let-it-burn/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/02/Mayday-RED.jpg',
    }, {
        'title': 'Local Review: Meldrum House – Prototype',
        'link': 'https://www.slugmag.com/music/local-music-reviews/meldrum-house-prototype/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/10/meldrum.house_.jpeg',
    }, {
        'title': 'Local Review: Machines of Man – Dreamstates',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-machines-man-dreamstates/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/07/Machines-of-Man-Dreamstates.jpg',
    }, {
        'title': 'Local Review: Marla Stone – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-marla-stone-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/07/Marla-Stone.jpg',
    }, {
        'title': 'Local Review: Jazz Jagz – Grim Reaper Tunes',
        'link': 'https://www.slugmag.com/music/local-music-reviews/jazz-jagz-grim-reaper-tunes/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/04/a1970580570_16.jpg',
    }, {
        'title': 'Local Review: Hot House West – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-review-hot-house-west-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/03/Hot-House-West.jpg',
    }, {
        'title': 'Local Review: i Like My Trike – Implications',
        'link': 'https://www.slugmag.com/music/local-music-reviews/i-like-my-trike-implications/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/12/i-Like-My-Trike.jpg',
    }, {
        'title': 'Local Review: Follow the Weather – First Light',
        'link': 'https://www.slugmag.com/music/local-music-reviews/follow-weather-first-light/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/09/357-LMR-Follow-the-Weather-First-Light.jpg',
    }, {
        'title': 'Local Review: Emma Park – Backyard Sailing',
        'link': 'https://www.slugmag.com/music/local-music-reviews/emma-park-backyard-sailing/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/03/Emma-Park-BackYard-Sailing.jpg',
    }, {
        'title': 'Local Review: Erebus – On the Shores of Acheron',
        'link': 'https://www.slugmag.com/music/local-music-reviews/erebus-on-the-shores-of-acheron/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/02/a3276514882_10.jpg',
    }, {
        'title': 'Local Review: Dearth – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-dearth-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/07/Dearth.jpg',
    }, {
        'title': 'Local Review: Dawnlit – True North',
        'link': 'https://www.slugmag.com/music/local-music-reviews/dawnlit-true-north/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/09/357-LMR-Dawnlit-True-North.jpg',
    }, {
        'title': 'Local Review: Danger Hailstorm – Singles',
        'link': 'https://www.slugmag.com/music/local-music-reviews/danger-hailstorm-singles/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/11/336-ED-LMR-DangerHailstorm.jpg',
    }, {
        'title': 'Local Review: Big Blue Ox – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/big-blue-ox-big-blue-ox/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/03/352-April-Big-Blue-Ox.jpg',
    }, {
        'title': 'Local Review: Black Jupiter –Transcendentalism in Lofi-Infrared',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-black-jupiter/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/07/356-Ed-LMR-Black-Jupiter.jpg',
    }, {
        'title': 'Local Review: Berlin Breaks – Empty Spaces',
        'link': 'https://www.slugmag.com/music/local-music-reviews/berlin-breaks-empty-spaces/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/m1000x1000.jpg',
    }, {
        'title': 'Local Review: American Hitmen – Give ‘Em What They Want',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-review-american-hitmen-give-em-what-tgey/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/03/img1-lg.jpg',
    }, {
        'title': 'Local Review: ALIENWOLF – Self-titled',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-alienwolf-self-titled/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/05/ALIENWOLF.jpg',
    }, {
        'title': 'Local Review: Adjacent to Nothing – Lessons and Lesions',
        'link': 'https://www.slugmag.com/music/local-music-reviews/local-adjacent-nothing/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/06/adjacent-to-nothing.jpg',
    }, {
        'title': 'Local Review: A Dead Desire – Resurrecting the Mind',
        'link': 'https://www.slugmag.com/music/local-music-reviews/dead-desire-resurrecting-mind/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/03/352-April-A-Dead-Desire.jpeg',
    }, {
        'title': 'Local Review: Ex-Okay – Awkward Silence',
        'link': 'https://www.slugmag.com/music/local-music-reviews/ex-okay-awkward-silence/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/07/Ex-Okay-Awkward-Silence.jpg',
    }, {
        'title': 'Review: Russian Circles – Blood Year',
        'link': 'https://www.slugmag.com/music/national-music-reviews/russian-circles-blood-year/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/07/368-AUG-NMR-Russian-circles-BLOODYEAR-2.04.27-PM.jpg',
    }, {
        'title': 'Local Music Review: Lord Vox – Lord Vox',
        'link': 'https://www.slugmag.com/music/local-music-reviews/lord-vox-4/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/04/365-ED-LMR-Lord-Vox.jpg',
    }, {
        'title': 'Review: Flavor Waster – It’s Always Sunny When You’re Cool',
        'link': 'https://www.slugmag.com/music/national-music-reviews/flavor-waster-its-always-sunny-when-youre-cool/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/fw_album_back.jpg',
    }, {
        'title': 'Review: Creature from Dell Pond – Dirty Deli',
        'link': 'https://www.slugmag.com/music/national-music-reviews/creature-from-dell-pond-dirty-deli/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/09/Creature-From-Dell-Pond.jpg',
    }, {
        'title': 'Review: Cha Wa – Funk’N’Feathers',
        'link': 'https://www.slugmag.com/music/national-music-reviews/cha-wa-funknfeathers/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/03/Cha-Wa2.jpg',
    }, {
        'title': 'Review: Animals as Leaders – The Madness of Many',
        'link': 'https://www.slugmag.com/music/national-music-reviews/animals-leaders-madness-many/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/11/335-ED-NMR-AnimalsAsLeaders.jpg',
    }, {
        'title': 'Review: ABACU5 – A Long Way to Begin',
        'link': 'https://www.slugmag.com/music/national-music-reviews/abacu5-long-way-begin/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/03/Abacu5-A-Long-Way-to-Begin.jpg',
    }, {
        'title': 'Local Review: Black Flak and the Nightmare Fighters – It’s...',
        'link': 'https://www.slugmag.com/music/local-music-reviews/black-flak-and-the-nightmare-fighters-its-only-permanent/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/08/LMR-Black-Flak-and-the-Nightmare-Fighters-Its-Only-Permanent.jpg',
    }, {
        'title': 'Local Review: Noble Bodies – Two Voices',
        'link': 'https://www.slugmag.com/music/local-music-reviews/noble-bodies-two-voices/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/10/Noble-Bodies-Two-Voices.jpeg.jpg',
    }, {
        'title': 'Local Review: Golden Green Funz – The Ballad of Orion...',
        'link': 'https://www.slugmag.com/music/local-music-reviews/golden-green-funz-the-ballad-of-orion-rust/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/11/Golden-Green-Funz-The-Ballad-of-Orion-Rust.jpg',
    }, {
        'title': 'Local Review: The Cold Year – Prey For Me',
        'link': 'https://www.slugmag.com/music/local-music-reviews/the-cold-year-prey-for-me/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2019/11/a2442103855_10.jpg',
    }, {
        'title': 'Review: Squarepusher – Be Up A Hello',
        'link': 'https://www.slugmag.com/music/national-music-reviews/review-squarepusher-be-up-a-hello/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2020/02/WARP309_packshot_1400-9900000000079e3c.jpg',
    }, {
        'title': 'Local Review: Man Meets Bear – Shadow Falls, Echoes Juniper',
        'link': 'https://www.slugmag.com/music/local-music-reviews/man-meets-bear-shadow-falls-echoes-juniper/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2020/02/ManMeetsBear-Artwork.jpg',
    }, {
        'title': 'Local Review: Helichrysum –These Apes Think They Heady',
        'link': 'https://www.slugmag.com/music/local-music-reviews/helichrysum-these-apes-think-they-heady/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2020/04/These-Apes.jpg',
    }, {
        'title': '24MOTOR: 24 Minutes of the Oil Refinery',
        'link': 'https://www.slugmag.com/community/bike-bmx/24motor-24-minutes-of-the-oil-refinery/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2020/04/2020-SLUG-ED-24-Motor-Ride-BARKIPLE-300-0263.jpg',
    }, {
        'title': 'Mastering Gravity: How Brian Castillo and The National Ability Center...',
        'link': 'https://www.slugmag.com/community/mastering-gravity-how-brian-castillo-and-the-national-ability-center-help-anyone-conquer-the-slopes/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2020/01/374-Ed-National-Ability-Center-Serei-Panh-Brian-Castillo-Colton-Bradley-Berin-Klawiter.jpg',
    }, {
        'title': 'Localized: Lord Vox',
        'link': 'https://www.slugmag.com/music/interviews/localized/localized-lord-vox/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/07/356-ED-Localized-Lord-Vox-Randy-Roberts-3.jpg',
    }, {
        'title': 'Localized: Mortigi Tempo',
        'link': 'https://www.slugmag.com/music/interviews/localized/localized-mortigi-tempo/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2018/07/356-ED-Localized-Mortigi-Tempo-RandyRoberts-8.jpg',
    }, {
        'title': 'Time For a Tempo Check With Cathy Foy',
        'link': 'https://www.slugmag.com/music/interviews/music-interviews/time-tempo-check-cathy-foy/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2017/02/338-ED-SLUG-CathyFoy-JessicaBundy-0077.jpg',
    }, {
        'title': 'Talking with TAUK',
        'link': 'https://www.slugmag.com/music/interviews/music-interviews/talking-with-tauk/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2016/09/334-ED-TAUK-Dylan-Langille.jpg',
    }, {
        'title': 'Jiving Jazz with Jeff Hamilton',
        'link': 'https://www.slugmag.com/music/interviews/music-interviews/jiving-jazz-with-jeff-hamilton/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/12/Jeff-Hamilton.jpg',
    }, {
        'title': 'Yukon Blonde @ Kilby 07.28 with CHAPPO',
        'link': 'https://www.slugmag.com/music/concert/show-reviews/yukon-blonde-chappo-kilby/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/07/yukon-blonde.jpg',
    }, {
        'title': 'Marriages @ Kilby 07.16 with Yeti Warlord, No Sun',
        'link': 'https://www.slugmag.com/music/concert/show-reviews/marriages-kilby-yeti-warlord-no-sun/',
        'image': 'https://www.slugmag.com/wp/wp-content/uploads/2015/07/marriages.jpg',
    },

];
const slMagArticles = [
    {
        'title': 'Tash Takes Red Butte',
        'link': 'https://www.saltlakemagazine.com/tash-sultana-red-butte-review/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/IMG_4100-copy.jpg',
    }, {
        'title': 'A Not-So Modest Showing For Modest Mouse',
        'link': 'https://www.saltlakemagazine.com/modest-mouse-red-butte/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/AmandajonesMM.jpg',
    }, {
        'title': 'Review: The Boz At The Butte',
        'link': 'https://www.saltlakemagazine.com/boz-scaggs-red-butte/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/IMG_2876siz.jpg',
    }, {
        'title': 'The Boz Is Back In Town',
        'link': 'https://www.saltlakemagazine.com/boz-skaggs-red-butte-preview/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/Boz-approved-photo_horizonta-2l-copy.jpg',
    }, {
        'title': 'Gary Clark Jr. Brings It At Red Butte',
        'link': 'https://www.saltlakemagazine.com/gary-clark-jr-at-red-butte/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/IMG_2700.jpg',
    }, {
        'title': 'Gov\'t Mule Melts Faces At Red Butte',
        'link': 'https://www.saltlakemagazine.com/govt-mule-at-red-butte-2019/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/IMG_2611-copy.jpg',
    }, {
        'title': 'Gov\'t Mule Rides Into Red Butte',
        'link': 'https://www.saltlakemagazine.com/govt-mule-red-butte/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/09/17.05.17_Mule_Group078.jpg',
    }, {
        'title': 'Umphrey\'s McGee Melts Faces At Red Butte',
        'link': 'https://www.saltlakemagazine.com/umphreys-mcgee-at-red-butte/',
        'image': 'https://saltlakemagazine-webaholics.s3.us-west-2.amazonaws.com/wp-content/uploads/2019/08/Umphreys2.jpg',
    },
];
</script>
