<template>
  <div class="text-center mb-6 d-flex flex-column">
    <span class="text-h2 mb-4">Joyfer Ramos</span>
    <client-only>
      <div class="primary rounded elevation-6">
        <vue-typer
          class="text-h5"
          :text="textList"
          erase-style="select-back"
          :erase-delay="60"
        ></vue-typer>
      </div>
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
        "Programador web",
        "Fullstack",
        "Javascript - Typescript",
        "PHP - Laravel",
        "Vue and React lover",
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.vue-typer >>> span {
  color: #fff;
}
</style>