<template>
  <v-container>
    <v-row justify="center" class="text-center">
      <v-col>
        <v-row>
          <v-img
            :src="require('../assets/textura_bg.png')"
            class="cover-bg"
            height="364"
          />
          <v-img
            :src="require('../assets/logo_comissao_bege.png')"
            class="my-3"
            contain
            height="300"
          />
        </v-row>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Comissão de formatura turma 2023 - Unifei
        </h1>
      </v-col>

      <v-col cols="12" class="mb-5">
        <Carousel />
      </v-col>

      <v-col class="mb-5 mt-5" cols="12" v-if="mostrarCodigo">
        <h2 class="headline font-weight-bold mb-3">
          Digite o seu código aqui!
        </h2>

        <v-row justify="center">
          <v-col align="center" lg="3">
            <v-text-field outlined v-model="codigoParceiro"></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn @click="checkParceiro()" color="primary">
            Pesquisar Código!
          </v-btn>
        </v-row>
      </v-col>

      <v-col cols="12" v-if="selectedParceiro">
        <v-row class="mb-5" justify="center">
          <h1>{{ this.selectedParceiro.nome }}</h1>
        </v-row>
        <v-row class="mt-5" justify="center">
          <h1>{{ this.selectedParceiro.proposta }}</h1>
        </v-row>
        <v-row class="pt-5" justify="center">
          <v-btn color="primary" @click="voltar()">
            Voltar
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-footer dark padless color="#a28041" class="nav-menu-bottom">
      <v-col align="center" class="mt-2">
        <v-row>
          <v-col v-for="(icon, idx) in icons" :key="icon">
            <v-row justify="center">
              <v-btn class="white--text" icon>
                <v-icon
                  @click="redirectToSocialMedia(icon)"
                  class="mb-2"
                  size="24px"
                >
                  {{ icon }}
                </v-icon>
              </v-btn>
              <h3>{{ socialMediaText[idx] }}</h3>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "HelloWorld",

  components: {
    Carousel,
  },

  data() {
    return {
      codigoParceiro: null,
      mostrarCodigo: true,
      icons: ["mdi-facebook", "mdi-instagram", "mdi-email"],
      socialMediaText: [
        "/comissao23unifei",
        "@comissao23unifei",
        "comissao2023unifei@gmail.com",
      ],
      selectedParceiro: null,
      parceiros: [
        {
          id: 12556,
          nome: "Rei Burgão",
          proposta: "Ajude com 1000 Reais e ganhe um banner na festa!",
        },
        {
          id: 12456,
          nome: "Speaking",
          proposta:
            "Ajude com 4500 Reais e ganhe um banner na festa, além de copos com a logo Speaking!",
        },
      ],
    };
  },
  methods: {
    checkParceiro() {
      this.selectedParceiro = this.parceiros.find(
        (parceiro) => parceiro.id == this.codigoParceiro
      );
      this.mostrarCodigo = false;
      console.log(this.selectedParceiro);
    },
    voltar() {
      this.mostrarCodigo = true;
      this.selectedParceiro = null;
    },
    redirectToSocialMedia(icon) {
      if (icon == "mdi-facebook") {
        window.open("https://www.facebook.com/comissao23unifei");
      } else if (icon == "mdi-instagram") {
        window.open("https://www.instagram.com/comissao23unifei/");
      }
    },
  },
};
</script>

<style scoped>
.cover-bg {
  position: absolute;
  right: 0;
  left: 0;
  top: -64px;
  bottom: -128px;
}

.nav-menu-bottom {
  position: absolute;
  right: 0;
  left: 0;
}
</style>
