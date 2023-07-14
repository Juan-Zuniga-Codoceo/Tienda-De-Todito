<template>
  <v-container>
    <v-row>
      <carrusel-comp></carrusel-comp>
    </v-row>
    <v-row> 
      <card-comp></card-comp>
    </v-row>
  </v-container>
</template>

<script>
import Carrusel from "@/components/Carrusel.vue";
import CardHome from '@/components/CardHome.vue'
import { mapActions } from "vuex";
export default {
  name: "Home-view",

  methods: {
    ...mapActions(["fetchInfo"]),
  },
  components: {
    "carrusel-comp": Carrusel,
    'card-comp':CardHome
  },
  // -- Lifecycle Methods
  created() {
    this.fetchInfo();
  },
  // -- End Lifecycle Methods
};
</script>
