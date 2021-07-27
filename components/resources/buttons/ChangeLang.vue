<template>
  <div>
    <v-btn :color="colors" icon dark v-if="preloaded">
      <v-icon dark>
        {{ mdiTranslate }}
      </v-icon>
    </v-btn>
    <div class="text-center">
      <v-menu open-on-hover bottom offset-y eager>
        <template v-slot:activator="{ on, attrs }">
          <v-btn :color="colors" icon dark v-bind="attrs" v-on="on">
            <v-icon dark>
              {{ mdiTranslate }}
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            dense
            v-for="locale in availableLocales"
            :key="locale.code"
          >
            <nuxt-link
              :to="switchLocalePath(locale.code)"
              :class="`${colors}--text`"
              >{{ locale.name }}</nuxt-link
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import { mdiTranslate } from "@mdi/js";
export default {
  name: "ChangeLangButton",
  data() {
    return {
      mdiTranslate,
      preloaded: true
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
    colors() {
      if (this.$vuetify.theme.dark === true) {
        return "white";
      } else {
        return "primary";
      }
    },
  },
  mounted () {
    this.preloaded = false;
  },
};
</script>

<style lang="scss" scoped>
</style>