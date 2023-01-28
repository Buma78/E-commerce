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
  const cart = ref<Cartitem[]>([]);
  const cartlen = computed(() => {
    return cart.value.length;
  });

  function Addtocart(item:Cartitem) {
    let index = cart.value.findIndex(pre => pre.id === item.id);
     if(index === -1) {
        cart.value.push(item);
      }
    }
   
  function removeItemFromCart(item:Cartitem) {
      cart.value = cart.value.filter(pre => pre.id !== item.id);
    }
  return {cart, cartlen,Addtocart,removeItemFromCart};
}) ;
