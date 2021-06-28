<template>
  <v-app light>
    <v-main>
      <div>
        <Navbar />
      </div>
      <v-container>
        <nuxt />
      </v-container>
      <div class="mt-16">
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/Footer";
export default {
  name: "layout",
  components: {
    Navbar,
    Footer
  },
};
</script>

<style>
.full-height {
  height: 95vh;
  min-height: 600px;
}
.text__title-purple {
  font-family: "Fredoka One", cursive !important;
}
</style>