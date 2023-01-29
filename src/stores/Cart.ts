import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

 interface Cartitem{
  id: string,
  newPrice:string,
  oldPrice: string,
  productImage: string,
  productName: string,
}

export const useCartStore = defineStore('cart', () => {
  let getcart= localStorage.getItem('cart');
  let cardArray:Cartitem[]=[];
  if(typeof getcart ==='string'){ cardArray=JSON.parse(getcart);}

  const cart = ref<Cartitem[]>(cardArray);
  const cartlen = computed(() => {
    return cart.value.length;
  });

  function Addtocart(item:Cartitem) {
    let index = cart.value.findIndex(pre => pre.id === item.id);
     if(index === -1) {
        cart.value.push(item);
        localStorage.setItem('cart', JSON.stringify(cart.value));
      }
    }
   
  function removeItemFromCart(item:Cartitem) {
      cart.value = cart.value.filter(pre => pre.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(cart.value));
    }

  function makeCartempty(){
      cart.value = [];
      localStorage.setItem('cart', JSON.stringify(cart.value));
      console.log("hii");
    }
  return {cart, cartlen,Addtocart,removeItemFromCart,makeCartempty};
}) ;
