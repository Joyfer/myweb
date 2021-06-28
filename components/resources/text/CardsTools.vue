<template>
    <v-col cols="12" sm="7">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          lg="4"
          v-for="({ name, image }, index) in tools"
          :key="index"
        >
          <v-card min-height="142" outlined height="100%"
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
    </v-col>
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