<template>
  <v-btn
    :color="$vuetify.theme.dark === true ? 'white' : 'primary'"
    @click="toggleTheme"
    icon
  >
    <v-icon v-if="this.$vuetify.theme.dark">{{ sunIcon }}</v-icon>
    <v-icon v-else>{{ moonIcon }}</v-icon>
  </v-btn>
</template>df

<script>
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";

export default {
  name: "DarkLight",
  data() {
    return {
      sunIcon: mdiWhiteBalanceSunny,
      moonIcon: mdiWeatherNight,
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
    },
  },
  mounted() {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else if (theme === "false") {
        this.$vuetify.theme.dark = false;
      } else this.$vuetify.theme.dark = true;
    }
  },
};
</script>

<style>
</style>