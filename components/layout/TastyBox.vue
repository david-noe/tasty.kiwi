<template>
  <div
    class="bg-primary max-w-6xl w-[95%] container mx-auto -top-20 relative shadow-xl py-8 px-10 text-white rounded-xl"
  >
    <h2 class="text-6xl mb-4 inline-block font-black mr-2">tasty</h2>
    <h2 class="text-6xl mb-4 inline-block font-thin">{{ title }}</h2>
    <h3 class="text-3xl mb-10 text-brown">{{ tagline }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "tasty",
      required: true
    },
    tagline: {
      type: String,
      default: "kiwikiwi",
      required: true
    }
  }
};
</script>
