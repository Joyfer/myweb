<template>
  <v-app-bar elevation="0" color="transparent">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <PrimaryButton
      v-for="({ sectionName, icon }, index) in sections"
      :key="index"
      :text="sectionName"
      :textButton="true"
      :icon="icon"
      :class="`${indexMargin(index)} ${currentSection(sectionName)}`"
    >
    </PrimaryButton>
    <v-spacer></v-spacer>
    <v-btn
      v-for="({ icon, link }, index) in contacts"
      :key="index + 100"
      icon
      color="primary"
      :href="link"
      target="_blank"
    >
      <v-icon dark> {{ icon }} </v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
import PrimaryButton from "../resources/buttons/PrimaryButton";

import {
  mdiAccount,
  mdiFolderHeart,
  mdiCommentQuestion,
  mdiTelegram,
  mdiWeb,
  mdiGmail,
} from "@mdi/js";

export default {
  name: "Navbar",
  components: {
    PrimaryButton,
  },
  data() {
    return {
      sections: [
        { icon: mdiAccount, sectionName: "Sobre mí" },
        { icon: mdiFolderHeart, sectionName: "Colección" },
        { icon: mdiCommentQuestion, sectionName: "Acerca" },
      ],
      contacts: [
        { icon: mdiTelegram, link: "https://getbootstrap.com/" },
        { icon: mdiWeb, link: "https://getbootstrap.com/" },
        { icon: mdiGmail, link: "https://getbootstrap.com/" },
      ],
    };
  },
  methods: {
    indexMargin(index) {
      if (index === 0) {
        return "mr-1";
      } else {
        return "mx-1";
      }
    },
    currentSection(sectionName) {
      if (this.$route.fullPath === "/" && sectionName === "Sobre mí") {
        return "section__current-section";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.section__current-section {
  text-decoration: underline;
}
</style>