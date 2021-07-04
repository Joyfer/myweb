<template>
  <main>
    <section>
      <v-row class="full-height" align="center" justify="center">
        <v-col class="d-flex flex-column align-center" cols="12" sm="6">
          <TextAnimated />
          <TitleAndText
            bodyText="Me llamo Joyfer y soy técnico en informática, me dedico a hacer páginas 
            y aplicaciones web, en este
      sitio encontrarás mi perfil y parte de mi trabajo. No dudes en contáctarte
      conmigo si así lo quieres, estaré muy complacido de leerte y si cabe, construir algo genial
      juntos."
          />
          <div>
            <PrimaryButton
              text="Ver perfil"
              :icon="AccountIcon"
              :outlined="true"
              class="my-1 my-md-0"
              @click.native="move"
              :header="true"
            />
            <PrimaryButton
              text="Ver colección"
              :icon="FolderIcon"
              class="my-1 my-md-0"
              nuxtLink="/colection"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            eager
            max-height="400"
            max-width="500"
            class="mx-auto"
            src="/svg/undraw_building_websites_i78t.svg"
          />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-icon class="object" color="primary" x-large>{{
            ArrowDownicon
          }}</v-icon>
        </v-col>
      </v-row>
    </section>
    <section class="mt-15 mt-sm-4" id="texto-hola">
      <v-row class="align-center justify-center">
        <v-col cols="12" class="mt-12 mt-sm-0">
          <v-responsive
            content-class="my-auto"
            :height="$vuetify.breakpoint.xsOnly ? 220 : 320"
            min-height="100"
          >
            <v-img
              class="mx-auto"
              max-height="320"
              max-width="570"
              src="/svg/undraw_Profile_re_4a55.svg"
              lazy-src="/svg/undraw_Profile_re_4a55.svg" /></v-responsive
        ></v-col>
        <v-col class="text-center" cols="12" sm="7">
          <TitleAndText
            title="¡Hola!"
            bodyText="Soy un programador web apasionado por todo lo relacionado 
          con la industria y actualmente resido en Caracas, Venezuela. Me dedico
          tiempo completo a  programar y en mi tiempo 
          libre también lo hago, o quizá esté jugando a algun videojuego... Me encanta el feedback así que si crees tener algo que podría aportarme
          me gustaría leer tu mensaje en alguno de mis contactos que dejo más abajo."
          />
        </v-col>
      </v-row>
    </section>
    <section class="mb-15">
      <v-row class="align-center justify-center">
        <v-col cols="12" sm="7">
          <p class="text-justify text-body-1">
            Nunca pierdo la motivación y las ganas para seguir aprendiendo cada
            día más, ayudar a otros programadores y mejorar mis aplicaciones. Es
            por eso que siempre práctico y aprendo diferentes herramientas para
            llegar a ser un programador completo
            <span class="text-h6 text__title-purple primary--text">
              full-stack</span
            >. Actualmente trabajo y sigo mejorando en:
          </p>
        </v-col>
        <CardsTools />
      </v-row>
    </section>
    <section class="mt-15">
      <v-row class="align-center justify-center">
        <v-col cols="12">
          <v-responsive
            content-class="my-auto"
            :height="$vuetify.breakpoint.xsOnly ? 220 : 320"
            min-height="100"
          >
            <v-img
              class="mx-auto mt-15"
              max-height="320"
              max-width="570"
              src="/svg/undraw_quick_chat_re_bit5.svg" /></v-responsive
        ></v-col>
        <v-col class="text-center" cols="12" sm="7">
          <TitleAndText
            title="Contáctame"
            bodyText="Si quieres comunicarte conmigo, puedes hacerlo a través de 
            <a href='https://t.me/JoyferR' target='_blank'>Telegram</a>, 
            correo electrónico 
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com' target='_blank'>joyferramos@gmail.com</a> o 
            <a href='https://discord.com/app' target='_blank'>Discord</a> id: #6528"
          />
        </v-col>
      </v-row>
    </section>
  </main>
</template> 

<script>
import TitleAndText from "../components/resources/text/TitleAndText";
import CardsTools from "../components/resources/text/CardsTools";
import PrimaryButton from "../components/resources/buttons/PrimaryButton";
import TextAnimated from "~/components/home/TextAnimated.vue";

import { mdiAccountOutline, mdiFolderHeart, mdiArrowDownBold } from "@mdi/js";
export default {
  name: "index",
  components: {
    TitleAndText,
    PrimaryButton,
    CardsTools,
    TextAnimated,
  },
  data() {
    return {
      AccountIcon: mdiAccountOutline,
      FolderIcon: mdiFolderHeart,
      ArrowDownicon: mdiArrowDownBold,
    };
  },
  methods: {
    move() {
      this.$vuetify.goTo("#texto-hola", {
        duration: 300,
        easing: "easeInOutCubic",
      });
    },
  },
};
</script>

<style scoped>
.object {
  -webkit-animation: MoveUpDown 1s linear infinite;
  animation: MoveUpDown 1s linear infinite;
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>