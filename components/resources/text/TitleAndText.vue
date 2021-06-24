<template>
  <div>
    <h2 v-if="header" class="text-h2 text__title-purple mb-3 primary--text">
      {{ title }}
    </h2>
    <h3 v-else class="text-h3 text__title-purple mb-6 primary--text">
      {{ title }}
    </h3>
    <p class="text-body-1 text-justify" v-html="bodyText"></p>
  </div>
</template>

<script>
export default {
  name: "TitleAndText",
  props: {
    title: {
      type: String,
      required: true,
    },
    bodyText: {
      type: String,
      required: true,
    },
    header: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style>
</style>