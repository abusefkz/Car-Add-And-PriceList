<template>
    <div class="col-sm-6 offset-3 mt-5 card">
                <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="model">Arabanızın Markası</label>
                   <select  v-model="Carcategory.categoryId"   class="form-select category"  name="" id="">
                    <option v-for="i in cars" class="fw-bold" :key="i" :value="i.name" >{{ i.name }}</option>
                   </select>
                   <div>
                    
                   </div>
                   <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın Modeli</label>
                    <input style="text-transform: uppercase;" v-model="Carcategory.carModel" class="form-control category" type="text" placeholder="X5,S Klasse,Megane,Clio vs..">
                   </div>
                   <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın Rengi</label>
                    <v-select v-model="Carcategory.carColor" label="Arabanın Rengi" :items="['Siyah','Beyaz','Kırmızı','Gri','Turuncu','Mavi','Bordo']"></v-select>

                   </div>
                   <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın Yılı</label>
                    <input v-model="Carcategory.carYear" class="form-control category" type="text" placeholder="2000,2015,2023 vs..">
                   </div>
                   <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın Kmsi</label>
                    <input v-model="Carcategory.carKm" class="form-control category" type="number" placeholder="km">
                   </div>
                   
                   <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın Fiyatı</label>
                    <input v-model="Carcategory.carPrice"  class="form-control category" type="number"   name="price" placeholder="100.000 TL vs..">
                   </div>
                   <div>
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın URL Resmi</label>
                    <input v-model="Carcategory.carİmg" class="form-control category" type="text">
                   </div>
                   <div class="form-group">
                    <label class="fw-bold mt-2 d-flex text-center justify-content-center" for="">Arabanızın Özellikleri</label>
                    <textarea v-model="Carcategory.carText" style="border: 1px solid black;" placeholder="1 Boyalı, Değişenli vs.." maxlength="300" class="form-control" name="" id="Texterea" rows="3"></textarea>
                   </div>
                   <div class="d-flex justify-content-end">
                   <button @click="newPagePush()" class="btn btn-success mt-3">İlanı Yayınla</button>
                </div>
                </div>
            </div>
</template>

<script>
    import axios from "axios"
    export default{
        props:["cars"],
        data(){
            return{
                Carcategory:{
                    categoryId:null,
                    carModel: null,
                    carYear: null,
                    carKm: null,
                    carİmg: null,
                    carColor: null,
                    carPrice: null,
                    carText: null,
                },
                carsColor:[]
            }
        },
        methods:{
            newPagePush(){
                axios.post('http://localhost:3000/carList',this.Carcategory).then(carList => {
                console.log('carList :>> ', carList);
                this.$router.push({name : 'HomePage'})
            })
            }
          
        },
        created(){
            axios.get('http://localhost:3000/carsColor' ).then(color => {
                this.carsColor = color?.data || []
            })
            
        }
    }
</script>