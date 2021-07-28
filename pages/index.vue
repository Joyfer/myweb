<template>
  <main>
    <section>
      <v-row
        :class="$vuetify.breakpoint.smAndDown ? '' : 'full-height'"
        align="center"
        justify="center"
      >
        <v-col class="d-flex flex-column align-center" cols="12" md="6">
          <div class="mb-4">
            <span class="text-h2 primary--text">Joyfer Ramos</span>
            <TextAnimated />
          </div>
          <TitleAndText
            ><template v-slot:body>{{ $t("welcome") }}</template></TitleAndText
          >

          <div class="full-width d-flex flex-column justify-center">
            <v-row class="my-3">
              <v-col cols="12" sm="6">
                <PrimaryButton
                  :text="$t('seeProfileButton')"
                  :icon="AccountIcon"
                  :outlined="true"
                  class="full-width"
                  @click.native="move"
                  :header="true"
                /> </v-col
              ><v-col cols="12" sm="6">
                <PrimaryButton
                  :text="$t('seeProjectsButton')"
                  :icon="FolderIcon"
                  class="full-width"
                  nuxtLink="/colection"
                />
              </v-col>
            </v-row>
            <ChatCard />
          </div>
        </v-col>
        <v-col cols="12" md="6" v-show="$vuetify.breakpoint.mdAndUp">
          <v-img
            eager
            max-height="400"
            max-width="500"
            class="mx-auto"
            src="/svg/undraw_building_websites_i78t.svg"
          />
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-icon class="object" color="primary" x-large>{{
            ArrowDownicon
          }}</v-icon>
        </v-col>
      </v-row>
    </section>
    <section class="mt-15 mt-sm-4" id="texto-hola"></section>
    <section>
      <v-row align="center" justify="center" class="flex-column">
        <v-col cols="12" md="10" lg="7"
          ><v-responsive
            content-class="my-auto"
            :height="$vuetify.breakpoint.xsOnly ? 220 : 320"
            min-height="100"
          >
            <v-img
              class="mx-auto"
              max-height="320"
              max-width="570"
              src="/svg/undraw_Profile_re_4a55.svg"
              lazy-src="/svg/undraw_Profile_re_4a55.svg" /></v-responsive
        ></v-col>
        <v-col cols="12" md="10" lg="7">
          <p class="text-justify text-body-1">
            {{ $t("aboutMe") }}
          </p>
        </v-col>
        <CardsTools />
        <v-col cols="12" md="10" lg="7">
          <KnowledgeList />
        </v-col>
      </v-row>
    </section>
    <section>
      <v-row class="align-center justify-center">
        <v-col cols="12">
          <v-responsive
            content-class="my-auto"
            :height="$vuetify.breakpoint.xsOnly ? 220 : 320"
            min-height="100"
          >
            <v-img
              class="mx-auto mt-15"
              max-height="320"
              max-width="570"
              src="/svg/undraw_quick_chat_re_bit5.svg" /></v-responsive
        ></v-col>
        <v-col class="text-center" cols="12" md="10" lg="7">
          <TitleAndText :title="$t('contactMeTitle')"
            ><template v-slot:body
              >{{ $t("contactMe") }}
              <a href="https://t.me/JoyferR" target="_blank">Telegram</a>,
              email:
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=joyferramos@gmail.com"
                target="_blank"
                >joyferramos@gmail.com,</a
              >

              <a href="https://discord.com/app" target="_blank">Discord</a> id:
              #6528</template
            ></TitleAndText
          >
        </v-col>
      </v-row>
    </section>
  </main>
</template> 

<script>
import TitleAndText from "../components/resources/text/TitleAndText";
import CardsTools from "../components/resources/text/CardsTools";
import PrimaryButton from "../components/resources/buttons/PrimaryButton";
import TextAnimated from "~/components/home/TextAnimated.vue";
import ChatCard from "../components/resources/chatCard/ChatCard";
import KnowledgeList from "../components/home/expansionPanel/KnowledgeList";

import { mdiAccountOutline, mdiFolderHeart, mdiArrowDownBold } from "@mdi/js";
export default {
  name: "index",
  components: {
    TitleAndText,
    PrimaryButton,
    CardsTools,
    TextAnimated,
    ChatCard,
    KnowledgeList,
  },
  data() {
    return {
      AccountIcon: mdiAccountOutline,
      FolderIcon: mdiFolderHeart,
      ArrowDownicon: mdiArrowDownBold,
    };
  },
  methods: {
    move() {
      this.$vuetify.goTo("#texto-hola", {
        duration: 300,
        easing: "easeInOutCubic",
      });
    },
  },
};
</script>

<style scoped>
.object {
  -webkit-animation: MoveUpDown 1s linear infinite;
  animation: MoveUpDown 1s linear infinite;
}

@keyframes MoveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>