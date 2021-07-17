<template>
  <v-row>
    <v-col v-for="(slide, idx) in slides" :key="idx">
      <v-card elevation="24" :width="$vuetify.breakpoint.mobile ? '350' : '425'" :height="$vuetify.breakpoint.mobile ? '625' : '500'" class="mx-auto">
        <v-col class="fill-height" align="center" justify="center">
         <v-row justify="center" class="mb-5 mt-1 text-h5" style="font-weight: bold">
           <v-col style="z-index: 1" cols="10">
              <h3>{{ slide.name }}</h3>
           </v-col>
         </v-row>
         <v-row justify="center" class="text-justify">
             <v-col cols="9">
                 {{slide.content}}
             </v-col>
         </v-row >
         <img class="watermarked"  height="120px"
            src="../assets/logo_comissao_bege.png">
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: false,
      slides: [
        {
          name: "No que estamos envolvidos?",
          content: '- Social - campanha do agasalho (colocar fotos da campanha) - Arrecadação de dinheiro (rifa, sorteios…) (colocar o engajamento no sorteio) - Pesquisa de mercado (com relação a formatura, fotos, empresas), - Fechamento da empresa de arrecadação para iniciar as adesões - Início da estruturação da adesão solidária, - Engajamento nas redes sociais (para atrair público, bbb da 23, templates, contato com ex alunos…) (colocar os insights dos vídeos da escolha do nome e outros insights bons)'
        },
        {
          name: "Nossas próximas realizações",
          content: '- Continuar criando conteúdos diferentes em nossas redes sociais, que estão atraindo bastante atenção - Abrir a adesão em nossa assembleia em julho - Realizar todos os eventos clássicos e criar novos eventos (dr/2, 500 dias, 300 dias, 100 dias...) - Finalizar a escolha do nome que já está sendo realizada + do mascote - Continuar a estruturação do evento da formatura (fechamento com empresas)'
        },
        {
          name: "Parcerias",
          content: '- Objetivo: primeiro contato com as empresas locais, sem pedir nada, e sim fidelizar o contato, oferecendo algum benefício inicial para eles (divulgação de alguma novidade deles, divulgação da marca deles, realização de sorteios para eles), mostrando o potencial da comissão, do alcance do instagram. - Como fazer: a partir da definição do que vamos realizar pra empresa, engajar a comissão + potenciais aderidos + família na divulgação da empresa para que eles entendam nosso potencial.'
        },
      ],
    };
  },
};
</script>

<style scoped>
.watermarked {
  position: absolute;
  right: 0;
  top: 0;
  background-image: url(../assets/logo_comissao_bege.png);
  opacity: 0.7;
}
</style>
