<template>
  <v-card class="" outlined width="100%" href="https://t.me/JoyferR" target="_blank">
    <v-list-item two-line>
      <v-badge
        bordered
        bottom
        color="green"
        dot
        offset-x="10"
        offset-y="10"
        class="blob-green"
      >
        <v-avatar size="40">
          <v-img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-1/p160x160/50820905_2217295705159022_2230307161680904192_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=S1L3ZMBgWCIAX8W4YlI&_nc_ht=scontent-mia3-1.xx&tp=6&oh=dd3042bf3903a2ab838774e684ff750a&oe=60E7C2E6"></v-img>
        </v-avatar>
      </v-badge>

      <v-list-item-content class="ml-3">
        <v-list-item-title>Joyfer Ramos</v-list-item-title>
        <v-list-item-subtitle>Téc.Informático</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action v-show="$vuetify.breakpoint.smAndUp">
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