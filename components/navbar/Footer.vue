<template>
  <v-footer padless>
    <v-card
      :color="$vuetify.theme.dark === true ? '#121212' : 'white'"
      flat
      tile
      width="100%"
      class="text-center py-4"
    >
      <v-card-text>
        <ContactsButtons
          :color="$vuetify.theme.dark === true ? 'white' : 'primary'"
        />
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import ContactsButtons from "../resources/buttons/Contacts";

export default {
  name: "Footer",
  components: {
    ContactsButtons
  }
};
</script>
