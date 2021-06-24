<template>
  <div>
    <div class="d-flex justify-center align-center flex-column">
      <v-col cols="7">
        <h3 class="text-h3 text__title-purple mb-6 primary--text text-center">
          full-stack Road
        </h3>
        <p class="text-justify text-body-1">
          Cada día práctico y aprendo diferentes herramientas para llegar a ser
          un programador completo full-stack. Actualmente aprendo y programo en:
        </p>
      </v-col>
    </div>
    <v-row justify="center" class="px-10">
      <v-col cols="2" v-for="({ name, image }, index) in tools" :key="index">
        <v-card outlined height="100%"
          ><v-card-title class="justify-center">{{ name }}</v-card-title>
          <v-card-text>
            <v-img
              class="mx-auto"
              max-height="60"
              max-width="60"
              :src="image"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CardsTools",
  data() {
    return {
      tools: [
        { name: "Javascript", image: "https://i.imgur.com/aDxpiEw.png" },
        { name: "Typescript", image: "https://i.imgur.com/Efwk74f.png" },
        { name: "NodeJS", image: "https://i.imgur.com/R8UXpEt.png" },
        { name: "Vue", image: "https://i.imgur.com/aNttFmy.png" },
        { name: "React", image: "https://i.imgur.com/1KcCs5E.png" },
        { name: "PHP", image: "https://i.imgur.com/nW7qj0z.png" },
      ],
    };
  },
};
</script>