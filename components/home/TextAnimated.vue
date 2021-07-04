<template>
  <div class="d-flex justify-center flex-column full-width text-center">
    <span class="text-h4 mb-3">¿Pensando en...</span>

    <transition-group name="list" mode="in-out" class="height">
      <h2
        v-for="(el, index) in textList"
        :key="el"
        class="text-h2 text__title-purple mb-3 primary--text pb-3 height"
        v-text="`${el}?`"
        v-show="i === index"
      ></h2>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TextAnimated",
  data() {
    return {
      text: "aaaa",
      textList: ["dominar la web", "llegar más lejos", "traspasar fronteras", "invertir en ti"],
      i: 0,
    };
  },
  methods: {},
  mounted() {
    let interval = setInterval(() => {
      if (this.i > 2) {
        return;
      }
      console.log(this.i);
      this.text = this.textList[this.i];
      this.i++;
    }, 3000);
  },
};
</script>

<style scoped>
.full-width {
  width: 100%;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active {
  transition: all 1s;
}
.list-leave-active {
  transition: all 0s;
}
.list-leave-to {
  opacity: 0;
}
.list-enter /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
.height {
  height: 80px;
}
</style>