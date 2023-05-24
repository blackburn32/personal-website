<template>
    <div class="flex flex-row-reverse w-full">
        <div v-motion-slide-visible-right class="flex flex-col w-1/2 m-4 ml-8 justify-center">
            <div class="text-2xl font-semibold mb-8">
                Serverless Is Even
            </div>
            <div class="text-xl mb-8">
                A serverless application which determines if numbers are even. Written in javascript and Terraform.
                Hosted with AWS Lambda, API Gateway and DynamoDB.
            </div>
            <a class="text-lg link-primary" href="https://github.com/blackburn32/serverlessIsEven" target="_blank">Source
                                                                                                                   Code</a>
        </div>
        <div v-motion-slide-visible-top class="mockup-code bg-base-100 w-1/2 m-4 ml-8">
            <pre data-prefix="$"><code>curl baseURL/1234</code></pre>
            <pre class="text-warning" data-prefix=">"><code>{"isEven":"true","query":"1234", "ad":"Ads come from DynamoDB!"}</code></pre>
            <pre data-prefix="$"><code>curl baseURL/167</code></pre>
            <pre class="text-warning" data-prefix=">"><code>{"isEven":"false","query":"167", "ad":"You can use it for odd numbers too!"}</code></pre>
            <pre data-prefix="$"><code>curl baseURL/abc</code></pre>
            <pre class="text-warning" data-prefix=">"><code>{"message":"Invalid query","query":"abc"}</code></pre>
        </div>
    </div>
</template>