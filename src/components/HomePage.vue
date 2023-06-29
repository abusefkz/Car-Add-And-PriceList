<template>
    <NavbarPage />
    
    <v-container >
        <div class="dropdown justify-content-end d-flex mb-1 mr-2 ">
                <button class="btn btn-secondary dropdown-toggle bg-grey-lighten-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Gelişmiş Sıralama
                </button>
                <ul class="dropdown-menu">
                    <li><a @click="allShow()" class="dropdown-item" href="#">Gelişmiş Sıralama</a></li>
                    <li><a @click="lotMoney()" class="dropdown-item" href="#">Fiyata Göre(Önce En Yüksek)</a></li>
                    <li><a @click="littleMoney()" class="dropdown-item" href="#">Fiyata Göre(Önce En Düşük)</a></li>
                </ul>
        </div>
        <v-row>
            
            <v-col  class="col-sm-2">
                <div class="card text-center">
                    <h5 class="text">Fiyat</h5>
                    <div class="d-flex text-center justify-content-center">
                    <input v-model="inputList.minTl" class="text-center" placeholder="minTL" style="width: 65px;" type="number">
                    <span class="mr-1 ml-1">-</span>
                    <input v-model="inputList.maxTl" class="text-center" placeholder="maxTL" style="width: 65px;"  type="number">
                </div>
                    <div >
                    <button class="btn btn-success mt-2" @click="inputPush(inputList)">Listele</button>
                </div>
                </div>
                
            </v-col>
            <v-col cols="10" class="col-sm-10 ">
                
                <v-row v-if="this.carList.length > 0">
                    
                    <v-col   v-for="i in carList" :key="i.id"  class="col-sm-3">
                <v-card
                    class="mx-2"
                    max-width="300"
                    
                >
                    <v-img
                    class="align-end text-white"
                    height="150"
                    :src="i.carİmg"
                    cover
                    >
                    <v-card-title class="carName">{{ i.categoryId }} {{ i.carModel }}</v-card-title>
                </v-img>

                    <v-card-subtitle style="color: rgb(218, 3, 3);" class="pt-4 fw-bold">
                    <h5 class="fw-bold">{{ i.carPrice }} TL</h5>
                    <hr>
                    </v-card-subtitle>

                    <v-card-text>
                    <div  class="fw-bold">{{ i.carYear }} Model</div>
                    <hr>
                    <div class="fw-bold">{{ i.carKm }} Kilometre</div>
                    <hr>
                    <div style="max-height: 30px;" class="mb-4">
                        {{ i.carText }}</div>
                    </v-card-text>
                    </v-card>
                    </v-col>

                </v-row>
                <div v-else>
                        <h5>Aradığınız Kriterde Araç Bulunamadı !!! 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                            </svg>
                        </h5>
                    </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from "axios"
    // import carList from "@/components/CarList.vue"
    export default{
        // components:{
        //     carList
        // },
        data(){
            return{
                carList:[],
                inputList:{
                    minTl:"",
                    maxTl:""
                }
            }
        },
        created(){
            axios.get('http://localhost:3000/carList?_expand=category').then(carList => {
                console.log('carList :>> ', carList);
                this.carList = carList?.data ||[]
            })
        },
        methods:{
            inputPush(filter){
               
                if(filter){
                    const min = this.carList.filter(i => i.carPrice >= filter.minTl)
                    const max = this.carList.filter(i => i.carPrice <= filter.maxTl)

                   return this.carList = min.concat(max),
                    this.inputList = "";
                }
                
                
            },
            lotMoney(){
              console.log(this.carList.sort((a,b) => {
               return b.carPrice - a.carPrice;
              }))
            },
            littleMoney(){
                console.log(this.carList.sort((a,b) => {
                    return a.carPrice - b.carPrice;
                }))
            },
            allShow(){
                console.log(this.carList.sort((a,b) => {
                    return a.id - b.id
                }))
            }
        }
    
    }
</script>