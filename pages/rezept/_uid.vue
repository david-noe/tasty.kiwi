<template>
  <div class="pt-20 bg-secondary">
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
        <div>
          <LayoutImageSlider />
        </div>
        <div class="w-auto overflow-hidden mt-8">
          <div class="bg-white p-4 pt-2 flex flex-col rounded-xl">
            <div class="w-full text-black pb-6">
              <h4>Bewertung</h4>
            </div>
            <div class="flex flex-row w-full">
              <div class="flex">
                <BrandKiwi
                  v-for="n in recipes[0].score"
                  :key="n.x"
                  class="h-6 ml-1"
                />
                <BrandKiwi
                  v-for="n in 5 - recipes[0].score"
                  :key="n.x"
                  class="h-6 ml-1 filter grayscale opacity-40"
                />
              </div>
              <div class="pl-12 text-black">
                <p class="font-bold inline-block">
                  {{ recipes[0].score }} von 5 Kiwis
                </p>
                <p class="font-light inline-block" v-if="recipes[0].score == 1">
                  - Das war leider nichts!
                </p>
                <p class="font-light inline-block" v-if="recipes[0].score == 2">
                  - Immerhin, der Teller war am Schluss leer!
                </p>
                <p class="font-light inline-block" v-if="recipes[0].score == 3">
                  - Würde ich wieder einmal essen!
                </p>
                <p class="font-light inline-block" v-if="recipes[0].score == 4">
                  - Da schöpfe ich doch gerne noch einmal nach!
                </p>
                <p class="font-light inline-block" v-if="recipes[0].score == 5">
                  - Davon bin ich so überzeugt, das koche ich für mein nächstes
                  Date!
                </p>
              </div>
            </div>
          </div>
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
