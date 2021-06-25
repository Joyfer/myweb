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
        { icon: mdiTelegram, link: "https://t.me/JoyferR" },
        { icon: mdiGithub, link: "https://github.com/Joyfer" },
        { icon: mdiGmail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com" },
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