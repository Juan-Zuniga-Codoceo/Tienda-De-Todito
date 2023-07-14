<!--<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="producto.image"></v-img>

    <v-card-title>{{ producto.title }}</v-card-title>

    <v-card-text>
      <div>{{ truncateText(producto.description, 100) }}</div>
      <ul>
        <li v-for="caracteristica in producto.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
      </ul>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>${{ producto.price.toLocaleString('es-CL') }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="addCart">
        <v-icon>mdi-cart</v-icon> Agregar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CardProducts',
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selection: 1
    };
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
      } else {
        return text;
      }
    },
    ...mapActions(['addProductToCart']),
    addCart() {
      let prod = {
        id: this.producto.id,
        nombre: this.producto.title,
        precio_promo: this.producto.price,
        count: 1
      };
      this.addProductToCart(prod);
    }
  }
};
</script>

<style scoped>
</style>-->

<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="producto.image"></v-img>

    <v-card-title>{{ producto.title }}</v-card-title>

    <v-card-text>
      <div>{{ truncateText(producto.description, 100) }}</div>
      <ul>
        <li v-for="caracteristica in producto.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
      </ul>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
        <v-chip>${{ producto.price.toLocaleString('es-CL') }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="addCart">
        <v-icon>mdi-cart</v-icon> Agregar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CardProducts',
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selection: 1
    };
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
      } else {
        return text;
      }
    },
    ...mapActions(['addProductToCart']),
    addCart() {
      let prod = {
        id: this.producto.id,
        title: this.producto.title,
        price: this.producto.price,
        count: 1
      };
      this.addProductToCart(prod);
    }
  }
};
</script>

<style scoped>
</style>





