<template>
  <v-row class="full-height align-center justify-center">
    <v-col class="d-flex flex-column" cols="5">
      <TitleAndText />
      <div>
        <PrimaryButton text="Ver perfil" :icon="AccountIcon" :outlined="true" />
        <PrimaryButton text="Ver colección" :icon="FolderIcon" />
      </div>
    </v-col>
    <v-col cols="5">
      <v-img src="/svg/undraw_building_websites_i78t.svg" />
    </v-col>
  </v-row>
</template> 

<script>
import TitleAndText from "../components/text/TitleAndText";
import PrimaryButton from "../components/resources/buttons/PrimaryButton";

import { mdiAccountOutline, mdiFolderHeart } from "@mdi/js";
export default {
  name: "index",
  components: {
    TitleAndText,
    PrimaryButton,
  },
  data() {
    return {
      AccountIcon: mdiAccountOutline,
      FolderIcon: mdiFolderHeart
    };
  },
};
</script>

<style scoped>
.full-height {
  height: 80vh;
}
</style>