<template>
  <div class="bg-secondary min-h-screen">
    <BrandPattern class="max-h-[37vh] overflow-hidden" />
    <LayoutTastyBox title="kochkünste" tagline="unsere lieblingsrezepte">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LayoutCard
          v-for="(item, index) in recipes"
          :key="index"
          :title="item.title"
          :excerpt="item.excerpt"
          :score="item.score"
          :uid="item.uid"
          :img="item.image[0]"
        />
      </div>
    </LayoutTastyBox>
  </div>
</template>

<script>
export default {
  layout: "page",
  data() {
    return {
      recipes: [
        /*       {
          title: "Schweröl Mandelpesto",
          uid: "schweroel-mandelpesto",
          excerpt: "Grossartig cremige Mandelpesto fürs Studentenbudget.",
          image: {
            url: "/img/oel-1.jpg",
            alt: "Oel"
          },
          score: 4
        },
        {
          title: "Diabetes Cheesecake",
          uid: "diabetes-cheesecake",
          excerpt:
            "Käsig bis zum Zuckerschock. Ideal zum Verbrauch der Zuckerreserven eines ganzen Studiengangs.",
          image: {
            url: "/img/sugar-1.jpeg"
          },
          score: 2
        } */
      ]
    };
  },
  async mounted() {
    this.recipes = await this.$strapi.$rezepts.find();
    console.log(this.recipes);
  }
};
</script>
