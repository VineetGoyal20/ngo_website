<template>
<q-page class="tw-pb-8">
  <div class="tw-relative isolate tw-bg-white">
    <div class="tw-mx-auto tw-grid tw-max-w-7xl tw-grid-cols-1 lg:tw-grid-cols-2">
      <div class="tw-relative tw-px-6 tw-pb-20 tw-pt-24 sm:tw-pt-32 lg:tw-static lg:tw-px-8 lg:tw-py-48">
        <div class="tw-mx-auto tw-max-w-xl lg:tw-mx-0 lg:tw-max-w-lg">
          <div class="tw-absolute tw-inset-y-0 tw-left-0 tw--z-10 tw-w-full tw-overflow-hidden tw-bg-gray-100 tw-ring-1 ring-gray-900/10 lg:tw-w-1/2">
            <svg class="tw-absolute tw-inset-0 tw-h-full tw-w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="white" />
              <svg x="100%" y="-1" class="tw-overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
          </div>
          <h2 class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900">Get in touch</h2>
          <p class="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-600">Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>
          <dl class="tw-mt-10 tw-space-y-4 tw-text-base tw-leading-7 tw-text-gray-600">
            <div class="tw-flex tw-gap-x-4">
              <dt class="tw-flex-none">
                <span class="tw-sr-only">Address</span>
                <BuildingOffice2Icon class="tw-h-7 tw-w-6 tw-text-gray-400" aria-hidden="true" />
              </dt>
              <dd>545 Mavis Island<br />Chicago, IL 99191</dd>
            </div>
            <div class="tw-flex tw-gap-x-4">
              <dt class="tw-flex-none">
                <span class="tw-sr-only">Telephone</span>
                <PhoneIcon class="tw-h-7 tw-w-6 tw-text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:tw-text-gray-900" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
            </div>
            <div class="tw-flex tw-gap-x-4">
              <dt class="tw-flex-none">
                <span class="tw-sr-only">Email</span>
                <EnvelopeIcon class="tw-h-7 tw-w-6 tw-text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:tw-text-gray-900" href="mailto:hello@example.com">hello@example.com</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <form action="#" method="POST" class="tw-px-6 tw-pb-24 tw-pt-20 sm:tw-pb-32 lg:tw-px-8 lg:tw-py-48">
        <div class="tw-mx-auto tw-max-w-xl lg:tw-mr-0 lg:tw-max-w-lg">
          <div class="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-6 sm:tw-grid-cols-2">
            <div>
              <label for="first-name" class="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">First name</label>
              <div class="tw-mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6" />
              </div>
            </div>
            <div>
              <label for="last-name" class="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">Last name</label>
              <div class="tw-mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6" />
              </div>
            </div>
            <div class="sm:tw-col-span-2">
              <label for="email" class="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">Email</label>
              <div class="tw-mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6" />
              </div>
            </div>
            <div class="sm:tw-col-span-2">
              <label for="phone-number" class="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">Phone number</label>
              <div class="tw-mt-2.5">
                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6" />
              </div>
            </div>
            <div class="sm:tw-col-span-2">
              <label for="message" class="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">Message</label>
              <div class="tw-mt-2.5">
                <textarea name="message" id="message" rows="4" class="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6" />
              </div>
            </div>
          </div>
          <div class="tw-mt-8 tw-flex tw-justify-end">
            <button type="submit" class="tw-rounded-md tw-bg-indigo-600 tw-px-3.5 tw-py-2.5 tw-text-center tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  </q-page>
</template>



<script>
import { defineComponent } from 'vue'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
export default defineComponent({
  name: 'ContactUs'
})
</script>
