<template>
  <div>
    <div class="text-center">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" icon dark v-bind="attrs" v-on="on">
            <v-icon dark>
              {{ mdiTranslate }}
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item dense v-for="locale in availableLocales" :key="locale.code">
            <nuxt-link :to="switchLocalePath(locale.code)">{{
              locale.name
            }}</nuxt-link>
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
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>