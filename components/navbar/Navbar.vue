<template>
  <div>
    <v-app-bar elevation="0" color="transparent">
      <v-app-bar-nav-icon class="d-block d-sm-none" @click="drawer = true"
        ><v-icon>{{ menuIcon }}</v-icon></v-app-bar-nav-icon
      >
      <PrimaryButton
        v-for="({ sectionName, icon, link }, index) in sections"
        :text="sectionName"
        :textButton="true"
        :icon="icon"
        :class="`${indexMargin(index)} d-none d-sm-flex`"
        :nuxtLink="`/${link}`"
        :key="index"
        :header="true"
      >
      </PrimaryButton>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <DarkLight />
        <v-divider vertical class="mx-2"></v-divider>
        <ContactsButtons />
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <v-list-item
            v-for="({ sectionName, icon, link }, index) in sections"
            :key="index"
            nuxt
            :to="`/${link}`"
            class="link__remove-underline"
          >
            <v-list-item-title>{{ sectionName }}</v-list-item-title>
            <v-list-item-icon
              ><v-icon>{{ icon }}</v-icon></v-list-item-icon
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import PrimaryButton from "../resources/buttons/PrimaryButton";
import DarkLight from "../resources/buttons/DarkLight";
import ContactsButtons from "../resources/buttons/Contacts";

import {
  mdiAccount,
  mdiFolderHeart,
  mdiCommentQuestion,
  mdiMenu,
} from "@mdi/js";

export default {
  name: "Navbar",
  components: {
    PrimaryButton,
    ContactsButtons,
    DarkLight,
  },
  data() {
    return {
      menuIcon: mdiMenu,
      sections: [
        { icon: mdiAccount, sectionName: "Sobre mí", link: "" },
        { icon: mdiFolderHeart, sectionName: "Colección", link: "colection" },
        { icon: mdiCommentQuestion, sectionName: "Acerca", link: "about" },
      ],
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    indexMargin(index) {
      if (index === 0) {
        return "mr-1";
      } else {
        return "mx-1";
      }
    },
  },
};
</script>

<style scoped>
.section__current-section {
  text-decoration: underline;
}
.link__remove-underline {
  text-decoration: none;
}
</style>