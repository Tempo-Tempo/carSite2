<template>
  <div class="special_offers">
    <div class="container">
      <arrowsAndTitle @next="next" @prev="prev">
         <template  #speciTitle>Банки-партнеры</template>
      </arrowsAndTitle>
      <div class="banks">
        <div v-for="bank in banksPartners" :key="bank.id" :style="slideBanks" class="item_bank" id="bank1">
          <img class="img_bank" :src="require('../assets/img/' + bank.img)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "banksPartners",
  props: {
   banksPartners: {
      type: Array,
      required: true,
   }
  },
  data() {
   return {
      slideBanks: {
         overflow: 'visible',
         transform: 'translateX(0px)',
      },
      currentPos: 0,
      
   }
  },
  methods: {
   next() {
      this.currentPos += 390;
      if(this.currentPos === 1560) {
         this.currentPos = 0;
      }
      this.slideBanks.transform = `translateX(-${this.currentPos}px)`
   },
   prev() {
      this.currentPos -= 390;
      if(this.currentPos < 0) {
         this.currentPos = 1170;
      }
      this.slideBanks.transform = `translateX(-${this.currentPos}px)`
   }
  }
};
</script>

<style scoped>
.banks {
  display: flex;
  max-width: 2990px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 100px;
  margin-top: 50px;
 
}

.item_bank {
  display: flex;
  background-color: #eff0f0;
  padding: 0px 55px 0px 55px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 62px;
  margin-left: 10px;
  transition: 0.6s;
}

.item_bank:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
  box-shadow: 0px 1px 5px rgb(128, 128, 128);
  cursor: pointer;
}
</style>
