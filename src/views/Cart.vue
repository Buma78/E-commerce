<script setup lang="ts"> 
       import { useCartStore } from '@/stores/Cart';
       import { ref } from 'vue';
       
       let storedAmount:number = Number(localStorage.getItem("money"));
       let realAmount:number = storedAmount? storedAmount : 1000000;
       const Amount = ref<number>(realAmount);
       const store = useCartStore();
       let amounttobe = ref<number>(0);
       const totalAmount =():number =>  store.cart.reduce((acc,item) => acc += Number(item.newPrice),0) ;
       amounttobe.value = totalAmount();
       const Buy = () =>{
             if(Amount.value >= amounttobe.value){
                  Amount.value = Amount.value - amounttobe.value;
                  alert("Your order is Placed successfully");
                  store.makeCartempty();
                  localStorage.setItem("money",String(Amount.value));
                  amounttobe.value = 0;
             }
             else {
                alert("You have unsufficient amount");
             }
       }
</script>

<template>
    <main>
        <div class="Amount-box">
            <div>
             <span>wallet Amount: {{ Amount }}</span>
             
           </div>
           <button @click="Buy" style="background-color:red; cursor:pointer">Buy</button>
        </div>
    <div class="card">
      <div class="card-body">
         <table class="table">
             <thead>
             <tr>
                    <th>#</th>
                    <th>Image</th>
                   <th>Name</th>
             <!-- <th>Quantity</th> -->
                 <th>Price</th>
                <!-- <th>Subtotal</th> -->
                <!-- <th></th> -->
                 </tr>
            </thead>
            <tbody>
                <tr v-for="item in store.cart" :key="item.id">
                     <td>{{item.id}}</td>
                         <td>
                           <img :src="item.productImage" width="60" height="60" :alt="item.productName" />
                        </td>
                        <td>
                           {{item.productName}}
                         </td>
                             <!-- <td>
                                    <i 
                                        @click="data.incrementQ(item)"
                                        class="bi bi-caret-up"></i>
                                    <span class="mx-2">
                                        {{item.quantity}}
                                    </span>
                                    <i 
                                        @click="data.decrementQ(item)"
                                        class="bi bi-caret-down"></i>
                                </td> -->
                          <td>
                             ${{item.newPrice}}
                          </td>
                                <!-- <td>
                                    ${{item.price * item.quantity}} 
                                </td> -->
                         <td>
                            <button @click="()=>store.removeItemFromCart(item)">Remove</button>
                        </td>
                     </tr>
                     <tr>
                        <th colSpan="3" class="text-center">
                              Total
                         </th>
                         <td colSpan="3" class="text-center">
                            $<span class="badge bg-danger rounded-pill"> {{amounttobe}}</span>
                         </td>
                    </tr>
                 </tbody>
             </table>
         </div>
    </div>
</main>
</template>

<style scoped>
   main{
      width: 100vw;
      height: 100vh;
   }
  .card {
       width: 100vw;
       padding: 10px;
       border: 1px solid black;
       border-radius: 10px;
       background-color: rgb(224, 195, 195);
  }

  .Amount-box{
       width: 90vw;
       font-size: 20px;
       margin: 5px auto;
       padding: 5px 10px 5px 10px;
       border: 2px solid black;
       display: flex;
       justify-content: space-between;
  }

</style>