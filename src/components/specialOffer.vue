<template>
  <div class="special_offers">
    <div class="container">
      <arrowsAndTitle @prev="prev" @next="next">
        <template #speciTitle> Спецпредложения </template>
      </arrowsAndTitle>
      <div class="type_special_offers">
        <div
          v-for="offerItem in offerItems"
          :key="offerItem.id"
          class="special_offer"
          :style="styleSpec"
          id="special_offer1"
        >
          <img
            class="img_special"
            :src="require('../assets/img/' + offerItem.img)"
            width="480"
            alt=""
          />
          <div class="title_special">{{ offerItem.title }}</div>
          <div class="subtitle_special">{{ offerItem.subTitle }}</div>
          <button class="know_more">Узнать больше</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialOffer",
  props: {
    offerItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      styleSpec: {
        transform: "translateX(-0px)",
      },
      stylePos: 0,
    };
  },
  methods: {
    next() {
      this.stylePos += 496;
      if (this.stylePos === 1984) {
        this.stylePos = 0;
      }
      this.styleSpec.transform = `translateX(-${this.stylePos}px)`;
    },
    prev() {
      this.stylePos -= 496;
      if (this.stylePos === -496) {
        this.stylePos = 1488;
      }
      this.styleSpec.transform = `translateX(-${this.stylePos}px)`;
    },
  },
};
</script>

<style>
.special_offer {
  position: relative;
  margin-right: 13px;
  transition: 0.8s;
}

.title_special {
  position: absolute;
  top: 11%;
  left: 25px;
  font-size: 20px;
  font-weight: bold;
}

.subtitle_special {
  font-size: 14px;
  font-weight: normal;
  color: #737373;
  position: absolute;
  top: 23%;
  left: 25px;
}

.img_special {
  border: 2px solid rgba(128, 128, 128, 0.151);
  border-radius: 30px;
}

.know_more {
  position: absolute;
  left: 25px;
  bottom: 13%;
  padding: 10px 30px 10px 30px;
  border: none;
  color: black;
  background-color: #c2c2c4;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
  cursor: pointer;
}

.know_more:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}

.type_special_offers {
  display: flex;
  width: 100%;
  max-height: 380px;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.8s;
}
</style>
