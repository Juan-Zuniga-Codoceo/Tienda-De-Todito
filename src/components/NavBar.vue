<template>
    <div>
        <v-app-bar
        color="black"
        dark
        >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Tienda De Todito</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-badge :content="cartCount" class="ma-3" :value="cartCount>0">
            <v-icon @click="redirectTo('checkout')">mdi-cart</v-icon>
        </v-badge>
        </v-app-bar>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <v-list-item 
            v-for="route in routes" 
            :key="route.name"
            @click="redirectTo(route.name)"
            :disabled="courrentRoute==route.name"
            >
                <v-list-item-icon>
                <v-icon>{{route.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{route.title}}</v-list-item-title>
            </v-list-item>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'NavBar-comp',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:'mdi-home',
                    title:'Inicio',
                    name:'home'
                },
                {
                    icon:'mdi-face-man',
                    title:'Vestuario Hombre',
                    name:'RopaHombre'
                },
                {
                    icon:'mdi-face-woman',
                    title:'Vestuario Mujer',
                    name:'RopaMujer'
                },
                {
                    icon:'mdi-laptop',
                    title:'Electronica',
                    name:'electronica'
                },
                {
                    icon:'mdi-cart',
                    title:'Carrito',
                    name:'checkout'
                },
                {
                    icon:'mdi-account',
                    title:'Acerca',
                    name:'About'
                },
            ]
        }
    },
    computed: {
        ...mapGetters(['cartCount']),
        courrentRoute(){
            return this.$route.name
        }
    },
    methods: {
        redirectTo(nameRoute){
            this.$router.push({name:nameRoute})
        }
    }
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