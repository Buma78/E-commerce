<script setup lang="ts">
      import { RouterLink } from 'vue-router';
      import { ref, onMounted } from 'vue';
      import { getAuth, onAuthStateChanged } from '@firebase/auth';
 
   const isLoggedIn = ref<boolean>(false);

   let auth:any
   onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
      isLoggedIn.value = true;
    }else{
      isLoggedIn.value = false;
    }
    });
   })
</script>

<template>
    <main>
       <div class="Welcome">
           <h1 style="font-weight:500">welcome ! To the Apple store</h1>
           <p style="color">This is the Apple Store Home Page</p>
           <p v-if="!isLoggedIn" style="color:green">Please <RouterLink to="/Login">Login</RouterLink> to Start your Shoping Journey!</p>
       </div> 
    </main>
</template>

<style scoped>
   main{
      background-image: url("../assets/Apple-back.jpg");
      height: 88vh;
      min-width: 100vw;
      background-repeat:space;
      background-size:cover;
   }
   .Welcome{
    width: 400px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   }
</style>