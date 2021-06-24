<template>
  <v-row> 
    <v-col cols="6">
      <TitleAndText />
    </v-col>
    <v-col>
      <div>hola</div>
    </v-col>
  </v-row>
</template> 

<script>
import TitleAndText from '../components/text/TitleAndText';
export default {
  name: "index",
  components: {
    TitleAndText
  },
};
</script>

<style scoped>
</style>