<template>
    <v-container>
        <v-row justify="center" class="mt-16">
            <v-col cols="12" sm="6">
                <v-alert
                prominent
                type="error"
                >
                <v-row align="center">
                    <v-col class="grow">
                    La ruta que estas buscando no existe
                    </v-col>
                    <v-col class="shrink">
                    <v-btn
                    @click="$router.push('/')"
                    >Volver a inicio</v-btn>
                    </v-col>
                </v-row>
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'NotFound-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
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