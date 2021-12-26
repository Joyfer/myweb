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
    Footer,
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
.full-width {
  width: 100%;
}
@media (min-width: 1904px) {
  .container {
    max-width: 1385px;
  }
}
</style>