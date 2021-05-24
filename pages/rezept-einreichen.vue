<template>
  <div class="bg-secondary min-h-screen pt-20">
    <div class="max-h-[37vh] overflow-hidden">
      <img
        src="~/assets/img/cooking-background.jpeg"
        alt="Ein Koch"
        class="h-full object-cover w-full"
      />
    </div>
    <LayoutTastyBox
      title="rezept einreichen"
      tagline="Sende uns dein Lieblingsrezept"
    >
      <FunctionalitySubmitform />
    </LayoutTastyBox>
  </div>
</template>

<script>
export default {
  layout: "page"
};
</script>
