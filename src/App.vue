<template>
  <v-app>
    <v-app-bar app color="rgb(34 6 6 / 90%)" >
      <div class="d-flex align-center">
        <v-img
          width="60"
          class="shrink mr-2"
          transition="scale-transition"
          contain
          src="./assets/logo_comissao_bege.png"
        />

        <h2 class="bege-text">Comissão 2023</h2>
      </div>
    </v-app-bar>

    <v-main>
      <HelloWorld />
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

<style scoped>
.bege-text{
  color: #a28041;
}
</style>
