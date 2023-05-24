<template>
    <div class="flex flex-col w-full">
        <div class="text-3xl font-semibold m-4 mx-8 mb-16">
            Lucid Software
        </div>
        <ul class="steps">
            <li class="step step-info">May 2018</li>
            <li class="step step-info">March 2020</li>
            <li class="step step-info">March 2021</li>
            <li class="step step-info">July 2022</li>
            <li class="step step-info">Present</li>
        </ul>
        <div class="flex flex-col md:flex-row md:mx-8 mt-4 justify-between">
            <div v-motion-slide-visible-left class="card card-compact md:w-1/6 bg-neutral p-4 mx-4 my-4 h-fit">
                <div class="card-title">Software Engineer I</div>
                <div>I joined Lucid fresh out of school on their Enterprise team. We worked on admin facing
                     functionality like user management. I worked full stack, learning as much as I could, and taking on
                     every opportunity I encountered.
                </div>
            </div>
            <div v-motion-slide-visible-left class="card card-compact md:w-1/6 bg-neutral p-4 mx-4 my-4 h-fit">
                <div class="card-title">Software Engineer II</div>
                <div>I got the opportunity to take over as team lead for the Enterprise team in late 2019. The
                     experience propelled my career forward, giving me countless opportunities to lead high value
                     projects like usage data for account admins, and bulk user search tools using OpenSearch.
                </div>
            </div>
            <div v-motion-slide-visible-left class="card card-compact md:w-1/6 bg-neutral p-4 mx-4 my-4 h-fit">
                <div class="card-title">Sr. Software Engineer I</div>
                <div>After getting my feet wet as a team lead, I took a chance and switched to Lucid's Data Platform
                     team to work on a larger, longer technical project called the Data Sync Framework. I also took
                     charge of generating new interview questions, leading a team of more than 40 engineers to deliver
                     10 new questions.
                </div>
            </div>
            <div v-motion-slide-visible-left class="card card-compact md:w-1/6 bg-neutral p-4 mx-4 my-4 h-fit">
                <div class="card-title">Sr. Software Engineer II</div>
                <div>With the successful delivery of the bulk of the data sync framework, data integrations began
                     getting pumped out. I worked with many teams to help them leverage and extend the data sync
                     framework, and began exposing the framework for external developers to leverage through our
                     Extension Api.
                </div>
            </div>
            <div
                v-motion-slide-visible-left class="card card-compact md:w-1/6 bg-neutral p-4 mx-4 my-4 h-fit"
            >
                <div class="card-title">Present</div>
                <div>After completing the Data Sync Framework, I switched teams and now lead Lucid's Extension API team.
                     We are building out an extension framework that anyone can use to build their own functionality
                     into Lucid's editors.
                </div>
            </div>
        </div>
        <div class="text-xl font-semibold m-4 mx-8 mt-16 mb-8">
            Accomplishments at Lucid
        </div>
        <div class="flex flex-col w-full space-y-32">
            <div v-motion-slide-visible-left class="flex flex-row w-full">
                <div class="flex flex-col w-1/2 m-4 ml-8 justify-center items-center">
                    <div class="text-lg font-semibold mb-4 w-full">
                        Data Sync Framework
                    </div>
                    <div class="text-xl mb-8 self-start">
                        My largest technical accomplishment to date is the design and implementation of a framework for
                        syncing external data with Lucid documents. The framework is now used by many of Lucid's
                        integrations, including Jira, Asana, and Trello, to keep data up to date when it's changed
                        either in Lucid or in the data source. My design centers around a semi-serverless paradigm which
                        decouples the integrations from one another, allowing each to be scaled independently.
                        Externally developed extensions can also leverage the framework by building data connectors,
                        allowing for a rich ecosystem of third-party developed data integrations.
                    </div>
                    <a
                        class="text-lg link link-primary self-start"
                        href="https://developer.lucid.co/extension-api/#connecting-to-external-data"
                        target="_blank"
                    >Learn more about data connectors</a>
                </div>
                <div class="flex flex-row w-1/2 px-8 space-x-8 items-center">
                    <img class="w-3/5" src="/lucid.svg"/>
                    <Icon class="text-white" name="mdi:arrow-left-right" size="128"/>
                    <div class="flex-col space-y-8" style="width: 40%">
                        <Icon class="w-full" name="logos:jira" size="128"/>
                        <Icon class="w-full" name="logos:asana-icon" size="128"/>
                        <Icon class="w-full" name="logos:trello" size="128"/>
                    </div>
                </div>
            </div>
            <div v-motion-slide-visible-right class="flex flex-row-reverse w-full">
                <div class="flex flex-col w-1/2 m-4 ml-8 justify-center items-center">
                    <div class="text-lg font-semibold mb-4 w-full">
                        Group Admins and Distributed License Management
                    </div>
                    <div class="text-xl mb-8 self-start">
                        As team lead for the Enterprise team, I was responsible for developing a system where account
                        admins could delegate management of smaller groups of users to less powerful "Group Admins."
                        Furthermore, each group could be allocated a certain number of licenses which the group admins
                        could assign and manage. I worked with product managers, customers, and other stakeholders to
                        design the system, then led the implementation with a team of engineers. The system was a huge
                        success, and is now used by many of Lucid's largest customers.
                    </div>
                    <a
                        class="text-lg link link-primary self-start"
                        href="https://help.lucid.co/hc/en-us/articles/360049892711-The-Admin-Panel-Group-Management#Assign-the-Group-Admin-Role"
                        target="_blank"
                    >Learn more about group admins</a>
                </div>
                <img class="w-1/2 mx-8 " src="/lucid.svg"/>
            </div>
        </div>
    </div>
</template>