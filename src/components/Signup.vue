<script setup lang="ts">
import { useRouter } from 'vue-router';
   import { getAuth,createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from '@firebase/auth';
   import { ref } from 'vue';

   const router = useRouter();
    const email = ref<string>("");
    const password = ref<string>("");
    const register =():void=> {
       createUserWithEmailAndPassword(getAuth(),email.value, password.value)
       .then((data)=>{
          alert("Registration sucessfully");
          router.push("/Product");
       }).catch((error)=>{
        alert(error.message);
       })
    }

    const googleProvider = new GoogleAuthProvider();
    const registerwithGoogle=():void=> {
        signInWithPopup(getAuth(), googleProvider).then((res)=>{
            alert("Registration sucessfully");
            router.push("/Product");
        }).catch((err)=>{
           alert(err.message);
        })

    }
</script>
<template>
    <main>
        <div class="Signup-container">
            <form>
                <h3>Register</h3>
                <div class="input-container">
                    <label for="email">email</label>
                    <input v-model="email" type="email" name="email" id="email" placeholder="email" required/>
                </div>
                <div class="input-container">
                    <label for="create-password">Create Password</label>
                    <input v-model="password" type="password" name="create-password" id="create-password" placeholder="Create-password" required/>
                </div>
                <buttton @click="register" class="Signup-btn">SignUp</buttton>
                <h4 style="text-align:center">OR</h4>
            </form>
            <button @click="registerwithGoogle" class="goggle-btn">Continue with google</button>
        </div>
    </main>
</template>

<style scoped>
   main{
     width: 100vw;
     height: 80vh;
     display: flex;
     justify-content: center;
     align-items: center;
   }
    
   h3{
    width: 100px;
    margin: 0 auto;
    font-size: 30px;
    font-weight: 400;
    border-bottom: 1px solid black;
   }
   .Signup-container{
     width: 400px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     border: 1px solid black;
     background-color: antiquewhite;
     border-radius: 10px;
     padding: 20px;
   }

   .input-container{
     display: flex;
     flex-direction: column;
     justify-content: center;
   }

   .Signup-btn{
     width: 100%;
     height: 40px;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 20px;
     border: 1px solid black;
     background-color: rgb(80, 248, 150);
     cursor: pointer;
   }

   input{
     width: 100%;
     height: 40px;
     border: 1px solid black;
     border-radius: 10px;
     padding: 10px;
   }
   .goggle-btn{
    width: 100%;
    height: 40px;
    font-size: 20px;
    background-image: url("../assets/search.png");
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
   }
</style>