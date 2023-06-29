<template>
    <v-app-bar app color="black" dark flat class="px-12">
        <v-btn :to="({name: 'HomePage'})" prepend-icon="$vuetify">
            Arabalarrrr
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :to="({name: 'NewPage'})" class="text-yellow bg-blue">+İlan Ekle</v-btn>
    </v-app-bar>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>