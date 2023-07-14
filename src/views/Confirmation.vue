<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mt-8">
          <v-card-title class="text-h5">Confirmación de la Orden</v-card-title>
          <v-card-text>
            <p>¡Gracias por tu orden! Tu número de orden es: {{ orderNumber }}</p>
            <p>Recibirás un correo electrónico de confirmación con los detalles de tu pedido.</p>
          </v-card-text>
          <v-card-actions class="text-center">
            <v-btn color="primary" to="/">Volver al inicio</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'confirmation-view',
  data() {
    return {
      orderNumber: null,
    };
  },
  created() {
    // Generar un número de orden aleatorio o basado en la fecha y hora actual
    this.orderNumber = Math.floor(Math.random() * 1000000) + 1;
  },
};
</script>

<style scoped>
</style>

