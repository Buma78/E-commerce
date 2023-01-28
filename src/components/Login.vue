<script setup lang="ts">
    import { useRouter,RouterLink } from 'vue-router';
   import { getAuth,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from '@firebase/auth';
   import { ref } from 'vue';

   const router = useRouter();
    const email = ref<any>("");
    const password = ref<any>("");
    const SignintoAcc =()=> {
       signInWithEmailAndPassword(getAuth(),email.value, password.value)
       .then((data)=>{
          alert("Signed In sucessfully");
          router.push("/Product");
       }).catch((error)=>{
        alert(error.message);
       })
    }
    const googleProvider = new GoogleAuthProvider();
    const Signinwithgoogle=()=> {
        signInWithPopup(getAuth(),googleProvider).
        then((res)=>{
            alert("Signed In sucessfully");
            router.push("/Product");
        }).catch((err)=>{
           alert(err.message);
        })
    }

</script>
<template>
    <main>
        <div class="login-container">
            <form>
                <h3>Login</h3>
                <div class="input-container">
                    <label for="email">email</label>
                    <input v-model="email" type="email" name="email" id="email" placeholder="email" required/>
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" name="password" id="password" placeholder="password" required/>
                </div>
                <buttton @click="SignintoAcc" class="login-btn">Login</buttton>
                <h4 style="text-align:center">OR</h4>
            </form>
            <button @click="Signinwithgoogle" class="goggle-btn">Continue with google</button>
            <div style="text-align:center;padding-top: 10px">
                <span>new User ?</span>
                <span><RouterLink to="/Register">SignUp</RouterLink></span>
            </div>
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
    width: 70px;
    margin: 0 auto;
    font-size: 30px;
    font-weight: 400;
    border-bottom: 1px solid black;
   }
   .login-container {
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

   .login-btn{
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
   }
</style>