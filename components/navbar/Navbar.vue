<template>
  <v-app-bar elevation="0" color="transparent">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <NuxtLink
      v-for="({ sectionName, icon, link }, index) in sections"
      :to="`/${link}`"
      :key="index"
    >
      <PrimaryButton
        :text="sectionName"
        :textButton="true"
        :icon="icon"
        :class="`${indexMargin(index)} ${currentSection(sectionName)}`"
      >
      </PrimaryButton>
    </NuxtLink>
    <v-spacer></v-spacer>
    <ContactsButtons />
  </v-app-bar>
</template>

<script>
import PrimaryButton from "../resources/buttons/PrimaryButton";
import ContactsButtons from "../resources/buttons/Contacts";

import { mdiAccount, mdiFolderHeart, mdiCommentQuestion } from "@mdi/js";

export default {
  name: "Navbar",
  components: {
    PrimaryButton,
    ContactsButtons,
  },
  data() {
    return {
      sections: [
        { icon: mdiAccount, sectionName: "Sobre mí", link: "" },
        { icon: mdiFolderHeart, sectionName: "Colección", link: "" },
        { icon: mdiCommentQuestion, sectionName: "Acerca", link: "about" },
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
      } else if (
        this.$route.fullPath === "/about" &&
        sectionName === "Acerca"
      ) {
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