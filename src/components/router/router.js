import { createRouter, createWebHashHistory } from "vue-router";
import CartBasket from "@/components/pages/CartBasket.vue";
import mainHome from "@/components/pages/mainHome.vue";
import autoCartPage from "@/components/pages/AutoCartPageBeforeBuy.vue"
import autoCartInfo from "@/components/pages/AutoCartPageMoreInfo.vue"


export default createRouter({
  routes: [
    {
      path: "/",
      name: 'mainHome',
      component: mainHome,
      alias: '/',
      props: true,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartBasket,
      props: true,
    },
    {
      path: "/auto_cart",
      name: "auto_cart",
      component: autoCartPage,
      props: true,
    },
    {
      path: "/auto_cart_info",
      name: "auto_cart_info",
      component: autoCartInfo,
      props: true,
    },
  ],
  history: createWebHashHistory(),
});


