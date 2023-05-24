<template>
    <div v-motion-slide-visible-bottom class="flex flex-row w-full">
        <div class="flex flex-col w-1/2 m-4 ml-8 justify-center">
            <div class="text-3xl font-semibold">
                Epic Systems
            </div>
            <div class="text-lg mb-4">Software Engineer Intern (Summer of 2017)</div>
            <div class="text-xl mb-8 self-start">
                I designed a system for extracting patient eligibility requirement from clinical trials listed on
                <a
                    class="link"
                    href="https://clinicaltrials.gov/"
                    target="_blank"
                >
                    clinicaltrials.gov
                </a>. The system used natural language processing techniques, a suite of trained
                classifiers, and a medical ontology to identify allergies, medications, treatments, and conditions that
                were required to be eligible for each trial. The system scored 80% accuracy on a random selection of 100
                trials.
            </div>
        </div>
        <img
            alt="Epic Systems"
            class="w-1/2 m-4 mr-8"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Epic_Systems.svg"
        />
    </div>
</template>