<template>
  <div>
    <section>
      <v-row class="mt-10" justify="center">
        <v-col cols="12" sm="10">
          <TitleAndText
            title="Proyectos"
            bodyText="Mi colección de proyectos, la mayoría de ellos son creados por hobby, 
              si algo te interesa recuerda que puedes comunicarte conmigo sin ningún compromiso, 
              también si quieres algo personalizado y 
              está dentro de mis conocimientos estoy al servicio para ti."
            :header="true"
          />
          <Alert
            bodyText="El contenido mostrado a continuación es desarrollado por mí utlizando diferentes librerías y 
          frameworks. Ningún proyecto ha sido obtenido de cursos o YouTube."
            :icon="schoolIcon"
          />
        </v-col>
      </v-row>
      <v-row class="px-0" justify="center">
        <v-col cols="12" sm="10">
          <v-row dense>
            <v-col v-for="i in 4" :key="i" cols="6" >
              <CardProject title="nadanda" image="https://i.imgur.com/NbhMy4s.png" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import TitleAndText from "../../components/resources/text/TitleAndText";
import Alert from "../../components/resources/alert/Alert";
import CardProject from "../../components/colection/listCards/CardProject";

import { mdiSchool } from "@mdi/js";
export default {
  name: "projectsIndex",
  components: {
    TitleAndText,
    Alert,
    CardProject
  },
  data() {
    return {
      schoolIcon: mdiSchool,
    };
  },
};
</script>

<style>
</style>