<template>
  <div>
    <section>
      <v-row class="mt-10" justify="center">
        <v-col cols="12" sm="10">
          <TitleAndText :title="$t('projectsTitle')" class="mb-4"
            ><template v-slot:body>{{
              $t("projectsTextHead")
            }}</template></TitleAndText
          >
          <Alert :icon="schoolIcon"
            ><template v-slot:body>{{
              $t("projectAlertHead")
            }}</template></Alert
          >
        </v-col>
      </v-row>
      <v-row class="px-0" justify="center">
        <v-col cols="12" sm="10">
          <v-row dense>
            <v-col
              v-for="{ id, name, imagenes } in regularProjects()"
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
              v-for="{ id, name, imagenes } in gameZoneProjects()"
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
import projects from "/static/projects.js";

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
      projects,
    };
  },
  methods: {
    regularProjects() {
      return this.projects.filter((el) => el.gameZone === undefined);
    },
    gameZoneProjects() {
      return this.projects.filter((el) => el.gameZone === true);
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