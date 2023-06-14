<template>
  <div v-if="creditIsClose" @click="exitOutClick" class="bg_popup_credit">
    <div class="expreses_offer_on_credit">
      <!-- <img class="buisnes_women" src="@/assets/img_car_type/buisnes_women.svg" alt="" /> -->
      <!-- <img
      
      class="bg_buissnes_women"
      src="@/assets/img_car_type/bg_buissnes_women.svg"
      alt=""
    /> -->

      <div class="container">
        <div class="title_express_offer">Экспресс-заявка на кредит</div>
        <div class="subtitle_express_offer">
          Узнай предварительное решение банков не выходя из дома!
        </div>
        <div class="all_inclusive_items">
          <div class="all_inclusive_item">
            <span class="red_dot"
              ><img
                class="check_buissens"
                src="@/assets/img_car_type/check_buissens.svg"
                alt=""
            /></span>
            <div class="all_inclusive_title">
              <b>Кредит от 1.9%</b> <br />
              30 банков-партнеров
            </div>
          </div>
          <div class="all_inclusive_item">
            <span class="red_dot"
              ><img
                class="check_buissens"
                src="@/assets/img_car_type/check_buissens.svg"
                alt=""
            /></span>
            <div class="all_inclusive_title">
              <b>Госспрограммы льготного автокредитования</b> <br />
              -10% от стоимости авто
            </div>
          </div>
          <div class="all_inclusive_item">
            <span class="red_dot"
              ><img
                class="check_buissens"
                src="@/assets/img_car_type/check_buissens.svg"
                alt=""
            /></span>
            <div class="all_inclusive_title">
              <b>Первый взнос 0%</b> <br />
              Возможность рассрочки
            </div>
          </div>
          <div class="all_inclusive_item">
            <span class="red_dot"
              ><img
                class="check_buissens"
                src="@/assets/img_car_type/check_buissens.svg"
                alt=""
            /></span>
            <div class="all_inclusive_title">
              <b>Trade In как первый взнос</b> <br />
              + дополнительная скидка
            </div>
          </div>
        </div>
        <div class="accept_callback">
          <forOffersForm :startCheck="startCheck"></forOffersForm>
          <button @click="accpetOffer" class="btn_callback">
            Обратный звонок
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "creditOnline",
  data() {
    return {
      startCheck: false,
      creditIsClose: false,
    };
  },
  props: {
    creditPopup: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    accpetOffer() {
      this.startCheck = !this.startCheck;
    },
    exitOutClick(e) {
      if (e.target.classList.value === "bg_popup_credit") {
        this.creditIsClose = false;
      }
    },
  },
  watch: {
    creditPopup() {
      this.creditIsClose = true;
    },
  },
};
</script>

<style scoped>
.btn_callback:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
.btn_callback {
  position: absolute;
  right: 10%;
  bottom: 30%;
  width: 280px;
  height: 55px;
  outline: none;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: #ca0100;
  cursor: pointer;
  margin-bottom: 20px;
}
.bg_popup_credit {
  position: relative;
  background: #00000038;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
}
.warning_callback {
  font-size: 14px;
  font-weight: normal;
  color: #595d60;
}

.accept_callback {
  position: absolute;
  bottom: 25%;
}

.accept_callback_name {
  width: 250px;
  height: 65px;
  outline: none;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: normal;
  color: #262626;
  margin-right: 20px;
}

.accept_callback_number {
  width: 250px;
  height: 65px;
  outline: none;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: normal;
  color: #262626;
  margin-right: 20px;
}
.all_inclusive_title {
  line-height: 25px;
}

.check_buissens {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.red_dot {
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: #ca0100;
  margin-right: 20px;
  position: relative;
}
.all_inclusive_items {
  position: absolute;
  top: 29%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 168px;
}

.all_inclusive_item {
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  margin-right: 30px;
}

.expreses_offer_on_credit {
  position: absolute;
  width: 1000px;
  height: 520px;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
}

.expreses_offer_on_credit .container {
  position: relative;
  height: 610px;
}

.title_express_offer {
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  color: #262626;
  top: 50px;
}

.subtitle_express_offer {
  position: absolute;
  font-size: 20px;
  font-weight: normal;
  top: 105px;
}

.bg_buissnes_women {
  position: absolute;
  z-index: -1;
}

.buisnes_women {
  position: absolute;
  right: 5%;
  top: -16.5%;
  z-index: 2;
}
</style>
