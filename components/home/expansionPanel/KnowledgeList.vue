<template>
  <div class="full-width">
    <v-card outlined color="primary" dark class="mt-4 pa-3" elevation="6">
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </v-card>
  </div>
</template>

<script>
import { mdiArrowDownBoldCircleOutline } from "@mdi/js";
export default {
  name: "KnowledgeList",
  data() {
    return {
      panel: [0, 1],
      mdiArrowDownBoldCircleOutline,
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
        "Responsive design"
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