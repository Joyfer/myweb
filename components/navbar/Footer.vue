<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="primary text-center">
      <v-card-text>
        <ContactsButtons color="white" />
      </v-card-text>
      <v-divider dark></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify - Joyfer Ramos</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import ContactsButtons from "../resources/buttons/Contacts";

export default {
  name: "Footer",
  components: {
    ContactsButtons,
  },
};
</script>
