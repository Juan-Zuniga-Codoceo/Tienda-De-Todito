<template>
<v-container>
    <h1 align="center">Nuestros Productos</h1>
    <v-space>
        
    </v-space>
        <v-row justify="space-around">
            <v-col cols="12" sm="6" md="3" v-for="tipoproducto in tiposproductos"
        :key="tipoproducto.name">
                <v-card
        class="mx-auto"
        max-width="400"
        height="700"
    >
        <v-img
        class="white--text align-end"
        height="450px"
        :src="tipoproducto.image"
        >
        </v-img>
        <v-card-title>{{tipoproducto.name}}</v-card-title>
        <v-card-text class="text--primary">
        <div>{{tipoproducto.text}}</div>
        </v-card-text>
    </v-card>
            </v-col>
            </v-row>        
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'card-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['tiposproductos'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>

<!--<template>
  <v-container>
    <h1 align="center">Nuestros Productos</h1>
    <v-row justify="space-around">
      <v-col cols="12" sm="6" md="3" v-for="tipoproducto in tiposproductos" :key="tipoproducto.name">
        <v-card class="mx-auto" max-width="400" height="700">
          <v-img class="white--text align-end" height="450px" :src="tipoproducto.image"></v-img>
          <v-card-title>{{ tipoproducto.name }}</v-card-title>
          <v-card-text class="text--primary">
            <div>{{ tipoproducto.text }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="goToCategory(tipoproducto.category)">Ir</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'CardHome',
  computed: {
    ...mapState(['tiposproductos']),
  },
  methods: {
    goToCategory(category) {
      switch (category) {
        case 'vestuarioHombre':
          this.$router.push({ name: 'RopaHombre' })
          break
        case 'vestuariomujer':
          this.$router.push({ name: 'RopaMujer' })
          break
        case 'electronica':
          this.$router.push({ name: 'Electronica' })
          break
        default:
          break
      }
    },
  },
}
</script>

<style scoped>
</style>-->
