<template>
  <main>
    <section>
      <v-row class="full-height align-center justify-center">
        <v-col class="d-flex flex-column" cols="5">
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
            />
            <PrimaryButton text="Ver colección" :icon="FolderIcon" />
          </div>
        </v-col>
        <v-col cols="5">
          <v-img src="/svg/undraw_building_websites_i78t.svg" />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-icon class="object" color="primary" x-large>{{
            ArrowDownicon
          }}</v-icon>
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row class="align-center justify-center">
        <v-col cols="12">
          <v-img
            class="mx-auto"
            max-height="320"
            max-width="570"
            src="/svg/undraw_Profile_re_4a55.svg"
        /></v-col>
        <v-col class="text-center" cols="7">
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
  </main>
</template> 

<script>
import TitleAndText from "../components/text/TitleAndText";
import PrimaryButton from "../components/resources/buttons/PrimaryButton";

import { mdiAccountOutline, mdiFolderHeart, mdiArrowDownBold } from "@mdi/js";
export default {
  name: "index",
  components: {
    TitleAndText,
    PrimaryButton,
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
.full-height {
  height: 95vh;
}
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