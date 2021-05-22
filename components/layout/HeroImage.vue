<template>
  <div>
    <div class="w-full h-[37vh]">
      <img
        v-if="img"
        :src="`${$config.apiURL}${img.url}`"
        :alt="img.alt"
        class="h-full object-cover w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      required: false
    }
  }
};
</script>
