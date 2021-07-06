<template>
  <v-app light>
    <Loading class="loading" v-if="loading"></Loading>
    <v-main v-show="loading === false">
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
import Loading from "../components/loading/loading";
export default {
  name: "layout",
  components: {
    Navbar,
    Footer,
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.loading = false;
    });
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
.loading {
  background: rgb(75, 65, 204);
  background: linear-gradient(
    180deg,
    rgba(47, 39, 172, 1) 0%,
    rgba(29, 25, 106, 1) 100%
  );
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
}
.full-width {
  width: 100%;
}
</style>