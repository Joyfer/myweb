<template>
  <div class="fixed">
    <v-carousel
      v-model="model"
      :height="$vuetify.breakpoint.xsOnly ? 250 : 450"
      class="elevation-10 rounded-lg"
    >
      <v-carousel-item
        class="rounded"
        v-for="imagen in imagenes"
        :key="imagen"
        :src="imagen"
        :href="imagen"
        target="_blank"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data: () => ({
    model: 0,
  }),
  props: {
    imagenes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.fixed {
  position: sticky;
  top: 10%;
}
</style>