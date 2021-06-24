<template>
  <v-app light>
    <v-main>
      <div>
        <v-app-bar elevation="0" color="transparent">
          <Navbar />
        </v-app-bar>
      </div>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/navbar/Navbar";
export default {
  name: "layout",
  components: {
    Navbar,
  },
};
</script>

<style>
.text__title-purple {
  font-family: "Fredoka One", cursive !important;
}
</style>