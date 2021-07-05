<template>
  <div class="d-flex justify-center flex-column full-width text-center">
    <span class="text-h4 mb-3">¿Pensando en...</span>
    <client-only>
    <!-- <vue-typer
      class="text-h2 text__title-purple mb-3 primary--text pb-3 height"
      :text="textList"
      erase-style='select-back'
      :erase-delay='60'
    ></vue-typer> -->
    </client-only>
  </div>
</template>

<script>
export default {
  name: "TextAnimated",
  components: {},
  data() {
    return {
      textList: [
        "dominar la web?",
        "llegar más lejos?",
        "traspasar fronteras?",
        "invertir en ti?",
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.full-width {
  width: 100%;
}
.vue-typer >>> span {
  color: #6b63ff;
}
</style>