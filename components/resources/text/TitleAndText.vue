<template>
  <div>
    <div v-if="title" class="text-h3 text__title-purple mb-6 primary--text text-center">
      {{title}}
    </div>
    <div class="text-body-1 text-justify"><slot name="body"></slot></div>
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
  },
};
</script>

<style>
</style>