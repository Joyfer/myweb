<template>
  <main>
    <section>
      <v-row class="full-height align-center justify-center">
        <v-col class="d-flex flex-column align-center" cols="12" sm="6">
          <TitleAndText
            title="Bienvenido"
            bodyText="Me llamo Joyfer y me dedico a hacer páginas y aplicaciones web, en este
      sitio encontrarás mi perfil y parte de mi trabajo. No dudes en contáctarte
      conmigo si estás interesado."
            :header="true"
          />
          <div>
            <PrimaryButton
              text="Ver perfil"
              :icon="AccountIcon"
              :outlined="true"
              class="my-1 my-md-0"
              :large="true"
            />
            <PrimaryButton
              text="Ver colección"
              :icon="FolderIcon"
              class="my-1 my-md-0"
              :large="true"
            />
          </div>
        </v-col>
        <v-col cols="12" sm="5">
          <v-img
            max-height="400"
            max-width="500"
            class="mx-auto"
            src="/svg/undraw_building_websites_i78t.svg"
            lazy-src="/svg/undraw_building_websites_i78t.svg"
          />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-icon class="object" color="primary" x-large>{{
            ArrowDownicon
          }}</v-icon>
        </v-col>
      </v-row>
    </section>
    <section class="mt-15 mt-sm-4">
      <v-row class="align-center justify-center">
        <v-col cols="12">
          <v-img
            class="mx-auto"
            max-height="320"
            max-width="570"
            src="/svg/undraw_Profile_re_4a55.svg"
            lazy-src="/svg/undraw_Profile_re_4a55.svg"
        /></v-col>
        <v-col class="text-center" cols="12" sm="7">
          <TitleAndText
            title="¡Hola!"
            bodyText="Soy un programador web apasionado por todo lo relacionado 
          con la industria. Actualmente resido en Caracas, Venezuela. En mi tiempo 
          libre programo, o quizá jugando... Hay muchas cosas que me faltan por aprender, 
          pero lo que nunca me faltará es la motivación para aprenderlas."
          />
        </v-col>
      </v-row>
    </section>
    <section class="mb-15">
      <v-row class="align-center justify-center">
        <CardsTools />
      </v-row>
    </section>
    <section class="mt-15">
      <v-row class="align-center justify-center">
        <v-col cols="12">
          <v-img
            class="mx-auto mt-15"
            max-height="320"
            max-width="570"
            src="/svg/undraw_quick_chat_re_bit5.svg"
            lazy-src="/svg/undraw_quick_chat_re_bit5.svg"
        /></v-col>
        <v-col class="text-center" cols="12" sm="7">
          <TitleAndText
            title="Contáctame"
            bodyText="Si quieres comunicarte conmigo, puedes hacerlo a través de 
            <a href='https://t.me/JoyferR' target='_blank'>Telegram</a> , 
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

import { mdiAccountOutline, mdiFolderHeart, mdiArrowDownBold } from "@mdi/js";
export default {
  name: "index",
  components: {
    TitleAndText,
    PrimaryButton,
    CardsTools,
  },
  data() {
    return {
      AccountIcon: mdiAccountOutline,
      FolderIcon: mdiFolderHeart,
      ArrowDownicon: mdiArrowDownBold,
    };
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