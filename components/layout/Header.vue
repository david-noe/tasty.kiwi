<template>
  <header class="bg-secondary shadow-md inline-flex w-full fixed">
    <div
      class="p-4 md:p-6 max-w-6xl container mx-auto flex justify-between items-center"
    >
      <n-link to="/"><BrandLogo class="h-10"/></n-link>
      <nav>
        <ul class="list-style-none flex">
          <li class="ml-4">
            <ButtonPrimary
              link="/rezept-einreichen"
              label="rezept einreichen"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
