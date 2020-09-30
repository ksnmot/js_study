<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"> </v-app-bar-nav-icon>

      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <sideNav />

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import sideNav from "@/components/sideNav.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    sideNav,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["toggleSideMenu"]),
  },
};
</script>
