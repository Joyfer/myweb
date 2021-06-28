<template>
  <div>
    <v-progress-circular
      :size="60"
      color="primary"
      indeterminate
      class="mr-3 mb-2"
    ></v-progress-circular>
    <h1 class="text__title-purple text-h3">Cargando...</h1>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
</style>