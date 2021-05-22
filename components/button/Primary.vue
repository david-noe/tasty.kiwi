<template>
  <n-link
    class="button text-white bg-primary rounded-xl px-4 py-2"
    :to="link"
    >{{ label }}</n-link
  >
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: "/"
    },
    label: {
      type: String,
      default: "Kiwi"
    }
  }
};
</script>
