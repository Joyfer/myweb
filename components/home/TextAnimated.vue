<template>
  <div class="text-center d-flex flex-column">
    <client-only>
      <vue-typer
        class="text-h5"
        :text="textList"
        erase-style="select-back"
        :erase-delay="60"
      ></vue-typer>
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