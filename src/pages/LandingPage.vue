<template>
  <div class="">
    <section>
      <div class="">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://www.cry.org/wp-content/uploads/happier-childhoods.jpg"
          >
            <div
              class="tw-text-white tw-mt-12 tw-p-12 tw-flex tw-flex-col tw-items-end"
            >
              <div class="text-h4 tw-w-1/2 tw-text-black">
                Edushala : Affording Dreams
              </div>
              <div class="text-subtitle-1 tw-w-1/2 tw-text-black">
                ETeaching is one of the bewildering act of humanity, and to
                those who couldn't afford to study in sky-high glass buildings,
                it's a boon. In a world chasing progress, education has become a
                startling, basic need. With rapidly growing spots, we're able to
                share our knowle ge to the unprivileged kids through edushala,
                and giving them a desperation to gain education.
              </div>
            </div></q-carousel-slide
          >
          <q-carousel-slide
            :name="2"
            img-src="https://khushii.org/wp-content/uploads/2020/10/education-top-image.jpg"
          >
            <div
              class="tw-text-white tw-mt-12 tw-h-full tw-w-1/2 tw-p-12 tw-text-center"
            >
              <div class="text-h4">
                Strong She : Bringing
                <span class="tw-font-bold">HER</span> Ahead
              </div>
              <div class="text-subtitle-1">
                Women empowerment has come a long way. Strong She aims to build
                a society where women are appreciatively aware of their rights
                and their socio-economic role in society. <br />
                We're determined to run on the long road of gender equality and
                celebrate womanhood. Working dedicatedly to raise women of
                ambition, determination, and empowerment
              </div>
            </div></q-carousel-slide
          >
          <q-carousel-slide
            :name="3"
            img-src="https://www.cry.org/wp-content/uploads/donate-to-keep-underprivileged-children-safe.jpg"
          >
            <div
              class="tw-text-white tw-mt-12 tw-p-12 tw-flex tw-flex-col tw-items-end"
            >
              <div class="text-h4 tw-w-1/2 tw-text-black">
                Anapurna : I was hungry until you came
              </div>
              <div class="text-subtitle-1 tw-w-1/2 tw-text-black">
                God cannot appear to feed the needy, but our bread can. Hunger
                has always remained a challenging issue for the people in the
                world, and we have pledged to do justice with all those hungry
                stomachs and become their 'hunger healers'. Be it cold or storm
                our team works strategically and doable to fulfill the basic
                need of food of those who wait for it.
              </div>
            </div></q-carousel-slide
          >
          <q-carousel-slide :name="4" class="tw-relative">
            <q-img
              fit="cover"
              style="transform: rotateY(180deg)"
              class="tw-h-full tw-w-full"
              src="https://www.cry.org/wp-content/uploads/protect-children-in-covid-world-resilience-recovery.jpg"
            ></q-img>
            <div
              class="tw-absolute tw-top-0 tw-text-black tw-mt-12 tw-h- tw-w-1/2 tw-p-12 tw-text-center"
            >
              <div class="text-h4">
                Strong She : Bringing
                <span class="tw-font-bold">HER</span> Ahead
              </div>
              <div class="text-subtitle-1">
                Women empowerment has come a long way. Strong She aims to build
                a society where women are appreciatively aware of their rights
                and their socio-economic role in society. <br />
                We're determined to run on the long road of gender equality and
                celebrate womanhood. Working dedicatedly to raise women of
                ambition, determination, and empowerment
              </div>
            </div></q-carousel-slide
          >
        </q-carousel>
      </div>
    </section>

    <!-- OUR CAMPGAIN -->
    <section class="">
      <div class="tw-text-2xl tw-text-center tw-font-bold tw-my-3 tw-mt-6">
        Our Campaigns
      </div>
      <div>
        <div class="tw-justify-center q-pa-md row q-gutter-md">
          <q-card
            v-for="index in projects"
            class="my-card tw-rounded-2xl tw-border"
            flat
          >
            <div>
              <q-img
                style="height: 200px"
                class="tw-rounded-t-2xl"
                :src="index.image"
              />
            </div>

            <q-card-section class="">
              <div class="tw-text-base q-mt-sm q-mb-xs">
                {{ index.name
                }}<span class="tw-text-gray-500">{{ index.sub_heading }}</span>
              </div>
              <div class="text-caption text-grey">
                {{ index.detail }}
              </div>
            </q-card-section>

            <q-card-actions>
              <q-btn
                no-caps
                unelevated
                color=""
                class="tw-rounded-xl tw-bg-red-600 tw-font-bold tw-border tw-w-full q-mx-xs"
                label="View More"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>
    <section class="tw-bg-black tw-mt-9">
      <div class="tw-bg-black tw-py-12 sm:tw-py-12">
        <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div class="tw-mx-auto tw-max-w-2xl lg:tw-max-w-none">
            <div class="tw-text-center">
              <h2
                class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl"
              >
                Our Impact
              </h2>
              <p class="tw-mt-4 tw-text-lg tw-leading-8 tw-text-gray-300">
                At Kind Beings, we are driven by a relentless pursuit of creating meaningful and sustainable impact in the communities we serve. Through our dedicated efforts and collaborative initiatives, we have achieved significant milestones and transformed lives. Here are some highlights of our impact:
              </p>
            </div>
            <div class="tw-text-center">
              <dl
              class="tw-mt-16 tw-grid tw-gap-0.5 tw-rounded-2xl sm:tw-grid-cols-3 lg:tw-grid-cols-3"
            >
              <div
                v-for="stat in stats"
                :key="stat.id"
                class="tw-flex tw-flex-col tw-text-center bg-white/5 tw-p-8"
              >
                <dt
                  class="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-300"
                >
                  {{ stat.name }}
                </dt>
                <dd
                  class="tw-order-first tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-white"
                >
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="tw-bg-white tw-py-12">
        <div class="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div class="tw-mx-auto tw-max-w-xl tw-text-center">
            <h2
              class="tw-text-lg tw-font-semibold tw-leading-8 tw-tracking-tight tw-text-red-600"
            >
              Testimonials
            </h2>
            <p
              class="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl"
            >
              We have worked with thousands of amazing people
            </p>
          </div>
          <div class="tw-mx-auto tw-flow-root tw-max-w-2xl tw-max-w-none">
            <div class="tw-grid tw-grid-cols-3 tw--mx-4">
              <div
                v-for="testimonial in testimonials"
                :key="testimonial.author.handle"
                class="tw-pt-8 tw-inline-block tw-w-full tw-px-4"
              >
                <figure
                  class="tw-rounded-2xl tw-bg-gray-100 tw-p-8 tw-text-sm tw-leading-6"
                >
                  <blockquote class="tw-text-gray-900">
                    <p>{{ `“${testimonial.body}”` }}</p>
                  </blockquote>
                  <figcaption
                    class="tw-mt-6 tw-flex tw-items-center tw-gap-x-4"
                  >
                    <img
                      class="tw-h-10 tw-w-10 tw-rounded-full tw-bg-gray-50"
                      :src="testimonial.author.imageUrl"
                      alt=""
                    />
                    <div>
                      <div class="tw-font-semibold tw-text-gray-900">
                        {{ testimonial.author.name }}
                      </div>
                      <div class="tw-text-gray-600">
                        {{ `@${testimonial.author.handle}` }}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, h } from "vue";

export default defineComponent({
  name: "",
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      expanded: ref(false),
      stats: ref([
        { id: 1, name: "Beneficiary", value: "9,000+" },
        { id: 2, name: "Volunteers", value: "1200+" },
        { id: 3, name: "States", value: "9+" },
      ]),
      projects: ref([
        {
          name: "Edushala : ",
          sub_heading: "Affording Dreams",
          image: "public/icons/study.jpeg",
          detail:
            "Teaching is one of the bewildering act of humanity, and to those who couldn't afford to study in sky-high glass buildings, we're able to share our knowlege to the unprivileged kids through edushala, and giving them a desperation to gain education.",
        },
        {
          name: "Strong She : ",
          sub_heading: "Bringing her Ahead",
          image: "public/icons/strong_she.png",
          detail:
            "Women empowerment has come a long way.Strong She aims to build a society where women are appreciatively aware of their rights and their socio-economic role in society. Working dedicatedly to raise women of ambition, determination, and empowerment",
        },
        {
          name: "World's Makeover : ",
          sub_heading: "Work on Waste",
          image: "public/icons/clean.jpeg",
          detail:
            "We live in a relational world where everything is interconnected, therefore taking care of others means taking care of oneself.We embrace the beauty of nature by taking care of, cleaning, and conserving it as part of our ongoing commitment to the mother planet.",
        },
        {
          name: "Be kind to animals : ",
          sub_heading: "Speak for the Unheard.",
          image: "public/icons/event_republic.jpeg",
          detail:
            "Its high time for the prevalence of kindness in society. Animals, those who can't express themselves through speech. We, at kind beings, make sure to feed the wandering, ignorant animals.",
        },
      ]),
      testimonials: ref([
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        {
          body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
          author: {
            name: "Leslie Alexander",
            handle: "lesliealexander",
            imageUrl:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          },
        },
        // More testimonials...
      ]),
      navigation: ref({
        solutions: [
          { name: "Marketing", href: "#" },
          { name: "Analytics", href: "#" },
          { name: "Commerce", href: "#" },
          { name: "Insights", href: "#" },
        ],
        support: [
          { name: "Pricing", href: "#" },
          { name: "Documentation", href: "#" },
          { name: "Guides", href: "#" },
          { name: "API Status", href: "#" },
        ],
        company: [
          { name: "About", href: "#" },
          { name: "Blog", href: "#" },
          { name: "Jobs", href: "#" },
          { name: "Press", href: "#" },
          { name: "Partners", href: "#" },
        ],
        legal: [
          { name: "Claim", href: "#" },
          { name: "Privacy", href: "#" },
          { name: "Terms", href: "#" },
        ],
        social: [
          {
            name: "Facebook",
            href: "#",
            icon: defineComponent({
              render: () =>
                h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                  h("path", {
                    "fill-rule": "evenodd",
                    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                    "clip-rule": "evenodd",
                  }),
                ]),
            }),
          },
          {
            name: "Instagram",
            href: "#",
            icon: defineComponent({
              render: () =>
                h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                  h("path", {
                    "fill-rule": "evenodd",
                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    "clip-rule": "evenodd",
                  }),
                ]),
            }),
          },
          {
            name: "Twitter",
            href: "#",
            icon: defineComponent({
              render: () =>
                h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                  h("path", {
                    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                  }),
                ]),
            }),
          },
          {
            name: "GitHub",
            href: "#",
            icon: defineComponent({
              render: () =>
                h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                  h("path", {
                    "fill-rule": "evenodd",
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                    "clip-rule": "evenodd",
                  }),
                ]),
            }),
          },
          {
            name: "YouTube",
            href: "#",
            icon: defineComponent({
              render: () =>
                h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
                  h("path", {
                    "fill-rule": "evenodd",
                    d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
                    "clip-rule": "evenodd",
                  }),
                ]),
            }),
          },
        ],
      }),
    };
  },
});
</script>
<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
.my-card {
  width: 60%;
  max-width: 300px;
}
</style>
