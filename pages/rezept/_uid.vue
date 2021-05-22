<template>
  <div class="pt-20">
    <div>
      <LayoutHeroImage :img="recipes[0].image[0]" />
      <LayoutTastyBox :title="recipes[0].title" :tagline="recipes[0].excerpt">
        <div class="flex justify-between">
          <div
            class="max-w-xl font-light text-xl"
            v-html="recipes[0].content"
          ></div>
          <LayoutIngredientBox :ingredients="recipes[0].ingredients" />
        </div>
      </LayoutTastyBox>
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
    try {
      const recipes = await $strapi.$recipes.find({ uid: params.uid });
      return {
        recipes
      };
    } catch {
      console.log("not found");
    }
  }
};
</script>
