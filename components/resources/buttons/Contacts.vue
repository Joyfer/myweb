<template>
  <div>
    <v-btn
      v-for="({ icon, link }, index) in contacts"
      :key="index + 100"
      icon
      :color="color"
      :href="link"
      target="_blank"
    >
      <v-icon dark> {{ icon }} </v-icon></v-btn
    >
  </div>
</template>

<script>
import { mdiTelegram, mdiGithub, mdiGmail } from "@mdi/js";

export default {
  name: "ContactsButtons",
  data() {
    return {
      contacts: [
        { icon: mdiTelegram, link: "https://getbootstrap.com/" },
        { icon: mdiGithub, link: "https://getbootstrap.com/" },
        { icon: mdiGmail, link: "https://getbootstrap.com/" },
      ],
    };
  },
  props: {
      color: {
          type: String,
          required: false,
          default: "primary"
      }
  }
};
</script>

<style>
</style>