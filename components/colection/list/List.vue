<template>
  <v-card outlined color="primary">
    <v-subheader class="white--text">{{$t('characteristics')}}</v-subheader>
    <v-list>
      <template v-for="({ name, icon }, index) in characteristic">
        <v-divider v-if="index != 0" :key="index" inset></v-divider>
        <v-list-item v-if="icon" :key="name">
          <v-list-item-action>
            <v-icon
              :color="$vuetify.theme.dark === true ? 'white' : 'primary'"
              >mdi-{{ icon }}</v-icon
            >
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "List",
  props: {
    characteristic: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>