<template>
  <v-card outlined width="100%" href="https://t.me/JoyferR" target="_blank">
    <v-list-item two-line>
      <v-badge dot bottom overlap color="green" class="blob-green">
        <v-avatar rounded
          ><v-img src="https://i.imgur.com/rYY3N9g.png"></v-img
        ></v-avatar>
      </v-badge>

      <v-list-item-content class="ml-3">
        <v-list-item-title>Joyfer Ramos</v-list-item-title>
        <v-list-item-subtitle>Téc.Informático</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <PrimaryButton
          text="Envíame un mensaje"
          :icon="telegramIcon"
          textButton
        />
      </v-list-item-action>
    </v-list-item>
  </v-card>
</template>

<script>
import PrimaryButton from "~/components/resources/buttons/PrimaryButton";
import { mdiTelegram } from "@mdi/js";
export default {
  name: "ChatCard",
  components: {
    PrimaryButton,
  },
  data() {
    return {
      telegramIcon: mdiTelegram,
    };
  },
};
</script>

<style scoped>
.blob-green >>> .v-badge__badge {
  animation: pulse-green 2s infinite;
}

@keyframes pulse-green {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(51, 217, 178, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
  }
}
</style>