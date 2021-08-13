<template>
  <v-alert text outlined :color="$vuetify.theme.dark === true ? 'white' : 'primary'" :icon="icon">
    <span><slot name="body"></slot></span>
  </v-alert>
</template>

<script>
export default {
  name: "Alert",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
