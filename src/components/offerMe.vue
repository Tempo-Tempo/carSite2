<template>
  <div class="offers">
    <div class="container">
      <div class="offers_main">
        <modalAlert  :okey="okey" :errors="errors" />
        <img class="punch" src="@/assets/img/punch.svg" alt="" />
        <div class="offers_inner">
          <div class="title_offers">Перебьем предложения от конкурентов!</div>
          <div class="subtitle_offers">
            Скидки <span class="text_red"> от 10 до 25%</span> на стоимость
            автомобиля
          </div>
          <form class="offers_form">
            <input
              class="offers_input"
              v-model="offerNumber"
              @input="checkNumber"
              type="text"
              placeholder="Ваш телефон"
              id="offers_input"
            />
            <button type="button" @click="acceptOffer" class="offers_btn">
              Получить предложения
            </button>
          </form>
          <span v-if="this.offerNumber.length > 11" class="warn">
            Максимальная длина номера
          </span>
          <div class="footer_offers">
            Нажимая кнопку “Отправить” Вы даете согласие на обработку своих
            <u class="user_offer">персональных данных</u>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "offerMe",
  data() {
    return {
      offerNumber: "",
      okey: false,
      errors: false,
    };
  },
  methods: {
    checkNumber() {
      return (this.offerNumber = this.offerNumber.replace(/[^0-9+]/g, ""));
    },
    acceptOffer() {
      if (this.offerNumber.length === 11) {
        this.okey = true;
        setTimeout(() => {
          this.okey = false;
        }, 3000);
        this.offerNumber = "";
        return;
      }
      if (this.offerNumber.length < 11) {
        this.errors = true;
        setTimeout(() => {
          this.errors = false;
        }, 3000);

        return;
      }
    },
  },
  watch: {},
};
</script>

<style>
.offers .container .offers_main {
  display: flex;

  position: relative;
  background: #ca0100;
  border-radius: 30px;
  margin-bottom: 80px;
  margin-top: 80px;
  background: linear-gradient(
    90deg,
    white 0%,
    #ca0100 0%,
    rgba(0, 0, 0, 0.95) 100%
  );
  margin-top: 50px;
  box-shadow: 0 1px 10px gray;
  align-items: center;
  z-index: 3;
}

.title_offers {
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
}

.subtitle_offers {
  font-size: 20px;
  color: white;
  margin-bottom: 20px;
}

.text_red {
  color: red;
  font-weight: bold;
}

.offers_input {
  padding: 15px 170px 15px 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}

.punch {
}

.offers_btn {
  padding: 15px 100px 15px 100px;
  margin-left: 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #ca0100;
  color: white;
  cursor: pointer;
}

.offers_btn:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}

.footer_offers {
  margin-top: 20px;
  color: #737373;
  font-weight: normal;
  font-size: 13px;
}
.special_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.special_offers_title {
  font-size: 40px;
  font-weight: bold;
}

.special_offer {
  position: relative;
  margin-right: 65px;
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
.warn {
  font-size: 13px;
  color: red;
  font-weight: bold;
}
</style>
