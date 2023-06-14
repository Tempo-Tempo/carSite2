<template>
   <slot name="currentPrice" :price="ruPrice">
   </slot>
</template>
<script>
export default {
  name: "formatedPrice",
  props: {
    anyPrice: {
      type: Number,
      required: true,
    },
  },
  data() {
   return {
      ruPrice: '0,00 ₽',
   }
  },
 methods: {
   formatedPrice() {
     this.ruPrice = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "RUB",
      }).format(this.anyPrice);
      return this.$emit("ruPrice",  this.ruPrice);
    },
  },
  watch: {
   anyPrice() {
      this.formatedPrice();                                        
   }
   },
  
};
</script>
