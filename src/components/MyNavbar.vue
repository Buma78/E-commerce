<script setup lang="ts">
   import { RouterLink,useRouter} from 'vue-router';
   import { ref, onMounted } from 'vue';
   import { getAuth, onAuthStateChanged,signOut } from '@firebase/auth';
   import { useCartStore } from '@/stores/Cart';
   

   const store = useCartStore();
   

   const router = useRouter();
   const isLoggedIn = ref<boolean>(false);

   let auth : any;
   
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

   const handleSignOut= ()=>{
       signOut(auth).then(()=>{
        localStorage.removeItem('money');
          router.push("/");
       }).catch((error)=>{
          alert(error.message);
       })
   }
</script>

<template>
    <main class="navbar">
        <div class="container">
            <div class="left-nav">
                <p> Apple Store </p>
                <div class="center-nav">
                    <span>
                      <RouterLink to ="/">Home</RouterLink></span>
                    <span>
                      <RouterLink to="/Product">Products</RouterLink></span>
                </div>
            </div>            
            <div class="right-nav">
                <span v-if="isLoggedIn"><RouterLink to="/cart">Cart ({{store.cartlen}})</RouterLink></span>
                <span v-if="!isLoggedIn"><RouterLink to="/Login">LogIn</RouterLink></span>
                <span @click="handleSignOut" v-if="isLoggedIn">Logout</span>
            </div>
        </div>
    </main>
</template>

<style scoped>
  .container{
    width: 100%;
    min-height: 12vh;
    padding: 10px 30px;
    background-color: rgb(221, 228, 247);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  .left-nav{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .right-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  p{
    font-size: 30px;
    font-weight: 400;
    margin: 0 30px;
  }
  span{
    padding-left: 10px;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color:black;
  }
</style>
