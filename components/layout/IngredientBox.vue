<template>
  <div>
    <div class=" rounded-xl bg-white p-8 inline-block">
      <ul>
        <li
          v-for="(item, index) in ingredients"
          :key="index"
          class="grid grid-cols-2 gap-x-6 text-black"
        >
          <p class="inline-block font-semibold">{{ item.measure }}</p>
          <p class="inline-block">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingredients: {
      type: Array,
      default: [],
      required: true
    }
  }
};
</script>
