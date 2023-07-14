<!--<template>
  <v-container>
    <v-row class="d-flex justify-lg-space-around">
      <v-col cols="12" sm="12" lg="6" md="6">
        <v-card elevation="2" class="my-5 py-5 pa-10">
          <div class="font-weight-bold ml-8 mb-2 text-center text-h4">
            DATOS DEL COMPRADOR
          </div>

          <v-form v-model="valid" ref="form">
            <v-text-field v-model="name" :counter="50" label="Nombre" :rules="nameRules" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="email" label="Repetir E-mail" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="fono" :counter="10" label="Telefono" :rules="fonoRules" required></v-text-field>
            <v-divider class="my-4"></v-divider>
            Datos del Despacho
            <v-text-field v-model="address" :rules="addressRules" :counter="150" label="Dirección" required>
            </v-text-field>
            <v-text-field v-model="comuna" :counter="50" label="Comuna" :rules="comunaRules" required></v-text-field>
            <v-divider class="my-4"></v-divider>
            Forma de Pagos
            <template>
              <v-container class="px-0" fluid>
                <v-radio-group v-model="radioGroup">
                  <v-radio v-for="item in items" :key="item" :label="item" :value="item"></v-radio>
                </v-radio-group>
              </v-container>
            </template>

            <v-btn class="mr-4 primary" @click="submit">
              Confirmar
            </v-btn>
            <v-btn @click="clear">
              Limpiar
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6">
        <v-card elevation="2" class="my-5 py-5 pa-10">
          <h1 class="text-center success--text mb-5">Productos agregados</h1>
          <v-alert
            v-if="cartCount === 0"
            border="left"
            prominent
            shaped
            color="light-green"
            type="info"
          >
            No hay productos agregados al carrito
          </v-alert>
          <v-data-table
            v-else
            :headers="cartHeaders"
            :items="cartProducts"
            sort-by="title"
            class="elevation-1"
          >
            <template slot="top">
              <v-toolbar flat>
                <v-toolbar-title>Total Carrito <span class="success--text">${{ Number(cartTotal).toLocaleString('en-US') }}</span> </v-toolbar-title>
              </v-toolbar>
            </template>
            <template slot="item.actions" slot-scope="{ item }">
              <v-icon small class="mr-2" @click="removeCartItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckOut",
  data() {
    return {
      valid: false,
      radioGroup: 1,
      name: '',
      email: '',
      remail: '',
      fono: '',
      address: '',
      comuna: '',
      items: [
        'Transferencia',
        'Servipag',
        'Webpay',
        'Contra Entrega',
      ],
      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => v.length <= 100 || 'Name must be less than 100 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+/.test(v) || 'E-mail no es válido',
      ],
      addressRules: [
        v => !!v || 'Dirección es requerido',
        v => v.length <= 100 || 'Dirección must be less than 100 characters',
      ],
      comunaRules: [
        v => !!v || 'Comuna es requerida',
        v => v.length <= 100 || 'Comuna must be less than 100 characters',
      ],
      fonoRules: [
        v => !!v || 'Fono es requerido',
        v => v.length <= 10 || 'Telefono must be less than 10 characters',
      ],
      cartHeaders: [
        { text: "ID Producto", align: "start", sortable: false, value: "id" },
        { text: "Producto", value: "title" },
        { text: "Cantidad", value: "count" },
        { text: "Precio", value: "price" },
        { text: "Subtotal", value: "total" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["cartProducts", "cartTotal", "cartCount"]),
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
    submit() {
      let response = this.$refs.form.validate();
      if (response) {
        this.removeCartProducts();
        this.$router.push({ name: 'comprobante' });
      }
    },
    removeCartItem(item) {
      this.removeProductFromCart(item.id);
    },
    removeCartProducts() {
      this.cartProducts.forEach((product) => {
        this.removeProductFromCart(product.id);
      });
    },
    clear() {
      this.name = '';
      this.email = '';
      this.remail = '';
      this.fono = '';
      this.address = '';
      this.comuna = '';
    },
  },
};
</script>

<style scoped>
</style>-->

<template>
  <v-container>
    <v-row class="d-flex justify-lg-space-around">
      <v-col cols="12" sm="12" lg="6" md="6">
        <v-card elevation="2" class="my-5 py-5 pa-10">
          <div class="font-weight-bold ml-8 mb-2 text-center text-h4">
            DATOS DEL COMPRADOR
          </div>

          <v-form v-model="valid" ref="form">
            <v-text-field v-model="name" :counter="50" label="Nombre" :rules="nameRules" required></v-text-field>
            <v-text-field v-model="email" label="E-mail" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="email" label="Repetir E-mail" :rules="emailRules" required></v-text-field>
            <v-text-field v-model="fono" :counter="10" label="Telefono" :rules="fonoRules" required></v-text-field>
            <v-divider class="my-4"></v-divider>
            Datos del Despacho
            <v-text-field v-model="address" :rules="addressRules" :counter="150" label="Dirección" required>
            </v-text-field>
            <v-text-field v-model="comuna" :counter="50" label="Comuna" :rules="comunaRules" required></v-text-field>
            <v-divider class="my-4"></v-divider>
            Forma de Pagos
            <template>
              <v-container class="px-0" fluid>
                <v-radio-group v-model="radioGroup">
                  <v-radio v-for="item in items" :key="item" :label="item" :value="item"></v-radio>
                </v-radio-group>
              </v-container>
            </template>

            <v-btn class="mr-4 primary" @click="submit">
              Confirmar
            </v-btn>
            <v-btn @click="clear">
              Limpiar
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" lg="6" md="6">
        <v-card elevation="2" class="my-5 py-5 pa-10">
          <h1 class="text-center success--text mb-5">Productos agregados</h1>
          <v-alert
            v-if="cartCount === 0"
            border="left"
            prominent
            shaped
            color="light-green"
            type="info"
          >
            No hay productos agregados al carrito
          </v-alert>
          <v-data-table
            v-else
            :headers="cartHeaders"
            :items="cartProducts"
            sort-by="title"
            class="elevation-1"
          >
            <template slot="top">
              <v-toolbar flat>
                <v-toolbar-title>Total Carrito <span class="success--text">${{ Number(cartTotal).toLocaleString('en-US') }}</span> </v-toolbar-title>
              </v-toolbar>
            </template>
            <template slot="item.actions" slot-scope="{ item }">
              <v-icon small class="mr-2" @click="removeCartItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckOut",
  data() {
    return {
      valid: false,
      radioGroup: 1,
      name: '',
      email: '',
      remail: '',
      fono: '',
      address: '',
      comuna: '',
      items: [
        'Transferencia',
        'Servipag',
        'Webpay',
        'Contra Entrega',
      ],
      nameRules: [
        v => !!v || 'Nombre es requerido',
        v => v.length <= 100 || 'Name must be less than 100 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+/.test(v) || 'E-mail no es válido',
      ],
      addressRules: [
        v => !!v || 'Dirección es requerido',
        v => v.length <= 100 || 'Dirección must be less than 100 characters',
      ],
      comunaRules: [
        v => !!v || 'Comuna es requerida',
        v => v.length <= 100 || 'Comuna must be less than 100 characters',
      ],
      fonoRules: [
        v => !!v || 'Fono es requerido',
        v => v.length <= 10 || 'Telefono must be less than 10 characters',
      ],
      cartHeaders: [
        { text: "ID Producto", align: "start", sortable: false, value: "id" },
        { text: "Producto", value: "title" },
        { text: "Cantidad", value: "count" },
        { text: "Precio", value: "price" },
        { text: "Subtotal", value: "total" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapGetters(["cartProducts", "cartTotal", "cartCount"]),
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
    submit() {
      let response = this.$refs.form.validate();
      if (response) {
        this.removeCartProducts();
        this.$router.push({ name: 'confirmation' });
      }
    },
    removeCartItem(item) {
      this.removeProductFromCart(item.id);
    },
    removeCartProducts() {
      this.cartProducts.forEach((product) => {
        this.removeProductFromCart(product.id);
      });
    },
    clear() {
      this.name = '';
      this.email = '';
      this.remail = '';
      this.fono = '';
      this.address = '';
      this.comuna = '';
    },
  },
};
</script>

<style scoped>
</style>




