<template>
  <n-link :to="`/rezept/${uid}`">
    <div
      class="card h-full bg-white shadow-md text-black rounded-xl overflow-hidden transition hover:shadow-xl hover:outline cursor-pointer"
    >
      <div class="flex flex-col h-full justify-between">
        <div>
          <img
            :src="img.url"
            :alt="img.alt"
            class="h-[12rem] object-cover w-full"
          />

          <div class="p-4">
            <h3>{{ title }}</h3>
            <p>{{ excerpt }}</p>
          </div>
        </div>
        <div class="bg-gray-100 p-4 flex justify-between">
          <div>
            <h4>
              Bewertung
            </h4>
          </div>
          <div class="flex">
            <BrandKiwi v-for="n in score" :key="n" class="h-6 ml-1" />
            <BrandKiwi
              v-for="n in 5 - score"
              :key="n"
              class="h-6 ml-1 filter grayscale opacity-40"
            />
          </div>
        </div>
      </div></div
  ></n-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "tasty rezept",
      required: false
    },
    excerpt: {
      type: String,
      default: "tasty aufzug",
      required: false
    },
    uid: {
      type: String
    },
    img: {
      type: Object,
      required: false
    },
    score: {
      type: Number,
      required: true
    }
  }
};
</script>
