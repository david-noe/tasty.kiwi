<template>
  <div class="pt-20">
    <div>
      <LayoutHeroImage :img="recipes[0].image[0]" />
      <LayoutTastyBox :title="recipes[0].title" :tagline="recipes[0].excerpt">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
      </LayoutTastyBox>
      <!-- <LayoutCard
        v-for="(item, index) in recipes"
        :key="index"
        :title="item.title"
        :excerpt="item.excerpt"
        :score="item.score"
        :uid="item.uid"
        :img="item.image[0]"
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "page",
  data() {
    return {
      recipes: []
    };
  },
  async asyncData({ $strapi, params }) {
    const recipes = await $strapi.$recipes.find({ uid: params.uid });
    return {
      recipes
    };
  }
};
</script>
