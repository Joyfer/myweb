<template>
  <v-row class="full-height" align="center" justify="center">
    <div class="mb-15 full-width">
      
        <v-img
          max-height="300"
          max-width="400"
          min-width="200"
          width="100%"
          class="mx-auto"
          src="/svg/undraw_Playful_cat_re_bxiu.svg"
          lazy-src="/svg/undraw_Playful_cat_re_bxiu.svg"
        />
     
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
  head() {
    return {
      title: "Acerca",
    };
  },
};
</script>

<style scoped>
.full-width{
  width: 100vw;
}
</style>