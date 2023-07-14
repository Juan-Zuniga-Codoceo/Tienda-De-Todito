<template>
  <div class="card-container">
    <CardProducts v-for="producto in productosRopaMujer" :key="producto.id" :producto="producto" />
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
    ...mapState(['ropaMujer']),
    productosRopaMujer() {
      return this.ropaMujer;
    }
  },
  methods: {
    ...mapActions(['fetchRopaMujer'])
  },
  created() {
    this.fetchRopaMujer();
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
