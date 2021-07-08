<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          width="60"
          class="shrink mr-2"
          transition="scale-transition"
          contain
          src="./assets/simbolo_RGB-150x150.png"
        />

        <h2>Comissão 2023</h2>
      </div>
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <carousel></carousel>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
