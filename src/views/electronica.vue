<template>
  <div class="card-container">
    <CardProducts v-for="producto in electronica" :key="producto.id" :producto="producto" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardProducts from '@/components/CardProducts.vue'

export default {
  name:'electronica-view',
  components: {
    CardProducts
  },
  computed: {
    ...mapState(['electronica']),
    productosElectronica() {
      return this.electronica;
    }
  },
  methods: {
    ...mapActions(['fetchElectronica'])
  },
  created() {
    this.fetchElectronica();
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
