<template>
  <v-btn
    :color="
      $vuetify.theme.dark === true && header === true
        ? 'white'
        : color
    "
    :outlined="outlined"
    :text="textButton"
    class=""
    :large="large"
    :nuxt="typeof nuxtLink === 'string'"
    :to="localePath(nuxtLink)"
    :href="href"
    :target="href ? '_blank' : undefined"
    :tile="outlined"
    exact
    :rel="href != undefined ? 'noopener' : ''"
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
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    href: {
      type: String,
      required: false,
      default: undefined
    },
    header: {
      type: Boolean,
      required: false,
      default: false
    }
  },
};
</script>

<style>
</style>