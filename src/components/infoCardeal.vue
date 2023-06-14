<template>
  <div class="info_cardeal">
    <div class="container">
      <div class="title_cardeal">
        <label
          @click="openInfo(infoCardealItem)"
          v-for="infoCardealItem in infoCardealItems"
          :key="infoCardealItem.id"
        >
          <input
            class="car_deals"
            type="radio"
            name="cardeals"
            :checked="infoCardealItem.checked"
          />
          <div class="title_radio">{{ infoCardealItem.titleInput }}</div>
        </label>
      </div>
      <div class="place_for_info" >
        <div
        @click="openInfo(infoCardealBody)"
        :class="{new_closed: infoVision !== infoCardealBody.id}"
          class="car_deals_inner mgb50"
          v-for="infoCardealBody in infoCardealItems"
          :key="infoCardealBody.id"
         
        >
          <div class="subtitle_radio">{{ infoCardealBody.title }}</div>
          <div class="text_radio">
            {{ infoCardealBody.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoCardeal",
  data() {
    return {
      infoVision: 1,
     
    };
  },
  props: {
    infoCardealItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openInfo(e) {
      this.infoVision = e.id;
    },
  },
  mounted() {
    this.infoCardealItems.forEach((handleInfo) => {
      if (handleInfo.id === this.infoVision) {
        handleInfo.checked = true;
      }
    })
  }
};
</script>

<style scoped>
.info_cardeal .container {
  margin-bottom: 50px;
  max-height: 330px;
  overflow: hidden;
  margin-bottom: 200px;
}

.title_cardeal {
  display: flex;
}

.place_for_info {
  width: 1600px;
  height: 300px;
}

.mgb50 {
  position: absolute;
  margin-bottom: 50px;
  transition: 0.6s;
  width: 1600px;
}
.title_cardeal label {
  margin-right: 100px;
  margin-bottom: 60px;
  cursor: pointer;
}

.title_cardeal input {
  -webkit-appearance: none;
}

.title_radio {
  font-size: 16px;
  font-weight: bold;
  color: #262626;
  border-bottom: 2px solid white;
  padding-bottom: 20px;
}

.car_deals:checked + .title_radio {
  transition: 0.3s;
  color: #ca0100;
  border-bottom: 2px solid #ca0100;
}

.trade_in:checked + .title_radio {
  transition: 0.3s;
  color: #ca0100;
  border-bottom: 2px solid #ca0100;
}

.buy:checked + .title_radio {
  transition: 0.3s;
  color: #ca0100;
  border-bottom: 2px solid #ca0100;
}

.subtitle_radio {
  font-size: 40px;
  font-weight: bold;
  color: #262626;
  margin-bottom: 20px;
}

.text_radio {
  font-size: 16px;
  color: #737373;
  line-height: 25px;
}
</style>
