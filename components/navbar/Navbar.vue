<template>
  <div>
    <v-app-bar elevation="0" color="transparent">
      <v-app-bar-nav-icon class="d-block d-sm-none" @click="drawer = true"
        ><v-icon>{{ menuIcon }}</v-icon></v-app-bar-nav-icon
      >
      <PrimaryButton
        v-for="({ icon, link }, index) in sections"
        :text="getSectionName(index)"
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
        <ChangeLangButton />
        <v-divider vertical class="mx-2"></v-divider>
        <ContactsButtons />
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <v-list-item
            v-for="({ icon, link }, index) in sections"
            :key="index"
            nuxt
            :to="localePath(link)"
            class="link__remove-underline"
          >
            <v-list-item-title>{{ getSectionName(index) }}</v-list-item-title>
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
import ChangeLangButton from "../resources/buttons/ChangeLang";

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
    ChangeLangButton,
  },
  data() {
    return {
      menuIcon: mdiMenu,
      sections: [
        { icon: mdiAccount, link: "/" },
        { icon: mdiFolderHeart, link: "colection" },
        { icon: mdiCommentQuestion, link: "about" },
      ],
      drawer: false,
      group: null,
      idk: this.$t("aboutMeNav")
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
    getSectionName(el) {
      if (el === 0) {
        return this.$t("aboutMeNav")
      } else if (el === 1) {
        return this.$t("projectsNav")
      } else if (el === 2) {
        return this.$t("about")
      }
    }
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