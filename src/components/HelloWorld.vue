<template>
  <v-container>
    <v-row justify="center" class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/simbolo_RGB-150x150.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Seja um parceiro da Comissão 2023!
        </h1>

        <p class="subheading font-weight-regular">
          Ajude a realizar sonhos e a formar pessoas melhores!
        </p>
      </v-col>

      <v-col cols="12" class="mb-5">
        <Carousel />
      </v-col>

      <v-col class="mb-5 mt-5" cols="12" v-if="mostrarCodigo">
        <h2 class="headline font-weight-bold mb-3">
          Digite o seu código aqui!
        </h2>

        <v-row justify="center">
          <v-col align="center" lg='3'>
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
  </v-container>
</template>

<script>

import Carousel from "./Carousel.vue";

export default {
  name: "HelloWorld",

  components: {
    Carousel
  },


  data() {
    return {
      codigoParceiro: null,
      mostrarCodigo: true,
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
  },
};
</script>
