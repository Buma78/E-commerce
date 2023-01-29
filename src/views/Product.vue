<script setup lang="ts">
    import { ref } from "vue";
    import items from "../assets/Products.json";
    import { useCartStore } from "@/stores/Cart";

 interface AppleProduct{
  id: string,
  newPrice:string,
  oldPrice: string,
  productImage: string,
  productName: string,
  }
    const prodcts = ref<AppleProduct[]>(items);
   
   const store = useCartStore();
</script>
<template>
    <main>
        <div class="card-container">
            <div v-for="product in prodcts" :key="product.id" class="card" >
               <img :src="product.productImage" alt="pro-img"/>
               <div class="card-body">
                <p class="card-title">{{ product.productName }}</p>
                <div class='rating'>
                     <img src="../assets/Group1.png" class='star' alt='rating' />
                         <div class='price'>
                             <span class='old-price'>
                                 {{product.oldPrice}}/-
                             </span>   
                             <span class='new-price'>
                                  {{product.newPrice}}/-
                             </span>
                         </div>
                  </div>
               </div>
               <button @click="()=>store.Addtocart(product)">Add to cart</button>
            </div>
        </div>
    </main>
</template>

<style scoped>

     main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        padding: 30px;
     }
    .card-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 450px;
        margin: 10px 20px;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 2px 2px;
    }
    .card img{
        width:100%;
        height:280px;
        overflow: hidden;
    }
     
    .card p{

        width: 280px;
        height: 32px;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
    }
    .rating {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-top: 1rem;
  }
  .card-container .card .card-body .rating img {
    width: 106px;
    height: 18px;
  }
  
  .prices {
    display: flex;
    align-items: center;
  }
  
  .old-price {
    margin: 0;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.1px;
    text-decoration-line: line-through;
    color: #444444;
    margin-right: 0.7rem;
  }
  
  .card-container .card .card-body .rating .price .new-price {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 0.1px;
    color: #000000;
  }
    button{
        width: 250px;
        height: 30px;
        border: none;
        border-radius: 10px;
        background-color: rgb(19, 87, 235);
        color: white;
        cursor: pointer;
        font-size: 20px;
        margin-top: 5px;
    }

</style>