<template>
  <v-row class="full-height" align="center" justify="center">
    <div class="mb-15 full-width">
      <v-responsive height="150">
        <v-img
          max-height="300"
          max-width="400"
          min-width="200"
          width="100%"
          class="mx-auto"
          src="/svg/undraw_Playful_cat_re_bxiu.svg"
          lazy-src="/svg/undraw_Playful_cat_re_bxiu.svg"
        />
      </v-responsive>
      <v-col class="text-center mx-auto" cols="12" sm="7">
        <TitleAndText :title="$t('about')"
          ><template v-slot:body 
            ><div v-html="$t(`aboutText`)"></div></template
          ></TitleAndText
        >
      </v-col>
    </div>
  </v-row>
</template>

<script>
import TitleAndText from "../components/resources/text/TitleAndText";

export default {
  name: "about",
  components: {
    TitleAndText,
  },
  head() {
    return {
      title: "Acerca",
    };
  },
};
</script>

<style scoped>
.full-width {
  width: 100vw;
}
</style>