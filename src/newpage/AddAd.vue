<template>
    <NavbarPage/>
    <v-container>
        <v-row>
            <NewPage :cars="category"/>
        </v-row>
    </v-container>
</template>

<script>
    import axios from "axios"
    import NewPage from "@/newpage/NewPage.vue"
    export default{
        components:{
            NewPage
        },
        data(){
            return{
                category:[],
                carsColor:[]
            }
        },
        created(){
            axios.get('http://localhost:3000/categories').then(car_response => {
                console.log('car_response :>> ', car_response);
                this.category = car_response?.data ||[]
            })
           
        },
      
    }
</script>

<style>
.category{
    background-color: rgba(211, 211, 211, 0.445);
    border: 1px solid rgba(0, 0, 0, 0.473);
}
</style>