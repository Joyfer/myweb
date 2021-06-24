<template>
  <v-row class="full-height" align="center" justify="center">
    <div class="mb-15">
      <v-col cols="12">
        <v-img
          max-height="400"
          max-width="500"
          class="mx-auto"
          src="/svg/undraw_Playful_cat_re_bxiu.svg"
          lazy-src="/svg/undraw_Playful_cat_re_bxiu.svg"
        />
      </v-col>
      <v-col class="text-center mx-auto" cols="12" sm="7">
        <TitleAndText
          title="Acerca"
          bodyText="Construido en Vue 2 con Nuxt, utilizando el framework css Vuetify, ilustraciones
          provistas gratutitamente por <a href='https://undraw.co/' target='_blank'>https://undraw.co/</a>
          iconos gratuitos por <a href='https://materialdesignicons.com/' target='_blank'>https://materialdesignicons.com/.</a>
          Diseñado y maquetado por mi persona."
        />
      </v-col>
    </div>
  </v-row>
</template>

<script>
import TitleAndText from "../components/resources/text/TitleAndText";
export default {
  name: "about",
  components: {
    TitleAndText,
  },
};
</script>

<style>
</style>