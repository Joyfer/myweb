<template>
  <div>
    <section>
      <v-row class="mt-10" justify="center">
        <v-col cols="12" sm="10">
          <TitleAndText title="Proyectos" class="mb-4"
            ><template v-slot:body
              >Mi colección de proyectos, la mayoría de ellos son creados por
              hobby. Si quieres contratarme y
              está dentro de mis conocimientos estoy al servicio para
              ti, solo escribeme a alguno de mis contactos.</template
            ></TitleAndText
          >
          <Alert
            bodyText="El contenido mostrado a continuación es desarrollado por mí utlizando diferentes librerías y 
          frameworks."
            :icon="schoolIcon"
          />
        </v-col>
      </v-row>
      <v-row class="px-0" justify="center">
        <v-col cols="12" sm="10">
          <v-row dense>
            <v-col
              v-for="{ id, name, imagenes } in regularProjects"
              :key="id"
              cols="12"
              sm="6"
              md="6"
            >
              <CardProject :title="name" :image="imagenes[0]" :id="id" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-10" justify="center">
        <v-col cols="12" sm="10">
          <TitleAndText title="Zona de juego" />
        </v-col>
      </v-row>
      <v-row class="px-0" justify="center">
        <v-col cols="12" sm="10">
          <v-row dense>
            <v-col
              v-for="{ id, name, imagenes } in gameZoneProjects"
              :key="id"
              cols="12"
              sm="6"
              md="6"
            >
              <CardProject :title="name" :image="imagenes[0]" :id="id" />
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
import { mapState } from "vuex";

import { mdiSchool } from "@mdi/js";
export default {
  name: "projectsIndex",
  components: {
    TitleAndText,
    Alert,
    CardProject,
  },
  data() {
    return {
      schoolIcon: mdiSchool,
    };
  },
  computed: {
    ...mapState(["proyectos"]),
    regularProjects() {
      return this.proyectos.filter((el) => el.gameZone === undefined);
    },
    gameZoneProjects() {
      return this.proyectos.filter((el) => el.gameZone === true);
    },
  },
  head() {
    return {
      title: "Colección",
    };
  },
};
</script>

<style>
</style>