<template>
  <div class="full-width">
    <div v-for="({ icon, text }, index) in firstList" :key="index">
      <div class="d-flex align-start">
        <v-icon class="pr-2" color="primary" x-large>{{ icon }}</v-icon>
        <p class="text-body-1 ma-0 text-justify" v-text="text"></p>
      </div>
      <v-divider v-if="index === 0" class="my-3"></v-divider>
    </div>
    <v-card outlined class="mt-4">
      <v-expansion-panels v-model="panel" accordion flat>
        <v-expansion-panel>
          <v-expansion-panel-header
            color="primary"
            class="white--text icon-to-white"
            :expand-icon="mdiArrowDownBoldCircleOutline"
            >Ver más conocimientos...</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <ul>
              <li v-for="item in list" :key="item">{{ item }}</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import {
  mdiArrowDownBoldCircleOutline,
  mdiPuzzle,
  mdiCellphone,
} from "@mdi/js";
export default {
  name: "KnowledgeList",
  data() {
    return {
      panel: [0, 1],
      mdiArrowDownBoldCircleOutline,
      firstList: [
        {
          icon: mdiCellphone,

          text: `Todos mis proyectos adoptan un diseño responsivo para adaptarse
                a todo tipo de pantallas, logrando un mayor público y dando una
                mejor experiencia al usuario tras navegar en ellas.`,
        },
        {
          icon: mdiPuzzle,
          text: `Mucha razón tenía el arquitecto Van der Rohe cuando
                dijo "Menos es más" (Aunque no siempre), opino lo mismo y
                adopto esta misma dinámica en el código y mis proyectos,
                haciendo productos en pequeños modulos, para hacerlos más
                escalables, rápidos y que los diferentes desarrolladores de los
                mismos tengan una mejor experiencia trabajando.`,
        },
      ],
      list: [
        "Express",
        "Laravel",
        "RestAPI",
        "JWT",
        "GIT",
        "GitHub",
        "MongoDB",
        "FireBase",
        "MySQL",
        "SQLite3",
        "PostgreSQL",
        "Bootstrap",
        "Vuetify",
        "MaterialUI",
        "HTML5",
        "SASS/SCSS",
        "CSS3",
      ],
    };
  },
};
</script>

<style scoped>
ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  margin-top: 15px;
}
.icon-to-white >>> .v-icon {
  color: white !important;
}
</style>