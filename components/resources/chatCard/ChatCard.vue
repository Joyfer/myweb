<template>
  <v-card
    class=""
    outlined
    width="100%"
    href="https://t.me/JoyferR"
    target="_blank"
    color="primary" dark elevation="5"
      >
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
          <v-img src="https://i.imgur.com/Wz370ut.jpg"></v-img>
        </v-avatar>
      </v-badge>

      <v-list-item-content class="ml-3 text-left">
        <v-list-item-title>Joyfer Ramos</v-list-item-title>
        <v-list-item-subtitle>{{ $t("It") }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action v-show="$vuetify.breakpoint.smAndUp">
        <v-btn plain
          >{{$t('sendMeAMessage')}}<v-icon right>{{ telegramIcon }}</v-icon></v-btn
        >
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