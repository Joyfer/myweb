<template>
  <v-hover v-slot="{ hover }">
    <v-card
      outlined
      elevation="0"
      height="300"
      v-ripple
      nuxt
      :to="`/colection/${id}`"
    >
      <v-img
        :lazy-src="image"
        :src="image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
        height="100%"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out primary v-card--reveal text-h2 white--text"
            style="height: 20%"
          >
            <v-card-title v-text="title"></v-card-title>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
</style>