<template>
  <v-alert text outlined color="primary" :icon="icon"><span v-html="bodyText"></span>
  </v-alert>
</template>

<script>
export default {
  name: "Alert",
  props: {
      bodyText: {
          type: String,
          required: true
      },
      icon: {
          type: String,
          required: true
      }
  }
};
</script>
