<template>
    <v-col cols="12" md="10" lg="7">
      <v-row justify="center">
        <v-col
          cols="6"
          md="4"
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
        { name: "Angular", image: "https://i.imgur.com/K23WfiX.png" },
      ],
    };
  },
};
</script>