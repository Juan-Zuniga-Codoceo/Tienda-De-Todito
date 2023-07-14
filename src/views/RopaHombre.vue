<template>
  <div class="card-container">
    <CardProducts v-for="producto in productosRopaHombre" :key="producto.id" :producto="producto" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardProducts from '@/components/CardProducts.vue';

export default {
  components: {
    CardProducts
  },
  computed: {
    ...mapState(['ropaHombre']),
    productosRopaHombre() {
      return this.ropaHombre;
    }
  },
  methods: {
    ...mapActions(['fetchRopaHombre'])
  },
  created() {
    this.fetchRopaHombre();
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


