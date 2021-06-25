<template>
  <div>
    <v-container>
      <v-row>
        <v-btn to="/colection" nuxt icon color="primary" class="ml-2">
          <v-icon>mdi-arrow-left-thick</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-col cols="12" md="7" class="fadeIn first"
          ><Carousel :imagenes="filtrado[0].imagenes"></Carousel>
        </v-col>
        <v-col cols="12" md="5" class="fadeIn second"
          ><h3 class="text-h3" v-text="filtrado[0].name"></h3>
          <p class="text-body-2 my-5" v-text="filtrado[0].descripcion"></p>
          <div class="mb-5">
            <v-btn class="mx-1" outlined color="primary" href="" target="_blank"
              >¡Visitar!<v-icon right>mdi-web</v-icon></v-btn
            >
            <v-btn class="mx-1" color="primary" href="" target="_blank"
              >Envíame un correo<v-icon right>mdi-gmail</v-icon></v-btn
            >
          </div>
          <Alert
            v-if="filtrado[0].heroku"
            icon="mdi-clock-alert"
            bodyText="Esta aplicación está subida a Heroku, lo que hará que tarde un poco en iniciar la primera vez."
          />
          <List :characteristic="filtrado[0].caracteristicas"></List>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from "../../components/colection/carousel/Carousel";
import Alert from "../../components/resources/alert/Alert";
import List from "../../components/colection/list/List";

import { mapState } from "vuex";
export default {
  name: "projectDetails",
  components: {
    Carousel,
    Alert,
    List,
  },
  computed: {
    ...mapState(["proyectos"]),
    filtrado: function () {
      return this.proyectos.filter((el) => el.id === this.$route.params.id);
    },
  },
  head() {
    return {
      title: this.filtrado[0].name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
      link: [
        {
          href:
            "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
          rel: "stylesheet",
        },
      ],
    };
  },
};
</script>

<style>
</style>