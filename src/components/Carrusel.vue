<template>
<v-container height="400">
    <v-carousel
        cycle
        height="450"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
        v-for="mejorproducto in mejoresproductos"
        :key="mejorproducto.title"
        height="450px"
        width="500px"
        class="mx-auto"
        :src="mejorproducto.image"
        >
        </v-carousel-item>
    </v-carousel>
</v-container>
</template>

<script>
import { mapState} from 'vuex'
export default {
    name: 'carrusel-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['mejoresproductos'])
    },
    methods: {
    },
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