<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="card"
      elevation="4"
      v-ripple
      nuxt
      :to="localePath(`/colection/${id}`)"
    >
      <v-img
        :src="image"
        :lazy-src="image"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)"
        height="100%"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="
              d-flex
              transition-fast-in-fast-out
              primary
              v-card--reveal
              text-h2
              white--text
            "
            style="height: 20%"
          >
            <v-card-title v-text="title"></v-card-title>
          </div>
        </v-expand-transition>
        <v-card-title
          class="d-block d-sm-none bg-black"
          v-text="title"
        ></v-card-title>
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
.bg-black {
  background-color: rgba(22, 22, 22, 0.623);
}
.card {
  height: 40vh;
}
</style>