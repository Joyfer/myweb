<template>
  <v-btn
    color="primary"
    :outlined="outlined"
    :text="textButton"
    class=""
    :large="large"
    :nuxt="typeof nuxtLink === 'string' ? true : false"
    :to="nuxtLink"
  >
    {{ text }}
    <v-icon v-if="icon" right> {{ icon }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    textButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    large: {
      type: Boolean,
      required: false,
      default: false,
    },
    nuxtLink: {
      type: String,
      required: false,
      default: undefined,
    },
  },
};
</script>

<style>
</style>