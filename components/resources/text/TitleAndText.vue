<template>
  <div>
    <h3
      v-if="title"
      class="text-h3 text__title-purple mb-6 primary--text text-center"
    >
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
      required: false,
    },
    bodyText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>