import { createRouter, createWebHistory} from 'vue-router'
import { getAuth} from '@firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path : '/',
      name : 'Home',
      component : () => import('../views/Home.vue')
     },
     {
      path : '/Product',
      name : 'Product',
      component : () => import('../views/Product.vue'),
      meta:{
        requiresAuth: true
      }
     },
     {
      path : '/Cart',
      name : 'Cart',
      component : () => import('../views/Cart.vue'),
      meta:{
        requiresAuth: true
      }
     },
     {
      path : '/Login',
      name : 'Login',
      component : () => import('../components/Login.vue')
     },
     {
      path : '/Register',
      name : 'Register',
      component : () => import('../components/Signup.vue')
     }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert('you dont have Access. Please Login!');
      next('/');
    }
  }
  else{
    next()
  }
});

export default router;
