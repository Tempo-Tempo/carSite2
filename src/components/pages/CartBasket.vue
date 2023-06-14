<template>
  <h1 class="my_favorites_items">
    <div class="container">
      <div class="my_favorites_header">
        <div class="my_favorites_title">
          Избранное
          <label class="label_for_favorites" @click="pickNew()">
            <input
              class="favorites_filter_checkbox"
              type="radio"
              name="favorites_filter"
              id="new_auto"
              value="1"
              v-model.number="checkedNumber"
            />
            <div class="my_favorites_filter">
              <span> Новые авто: </span>
              <span class="red_text num_new_auto a">{{ newNum }}</span>
            </div>
          </label>

          <label class="label_for_favorites" @click="pickOld()">
            <input
              class="favorites_filter_checkbox"
              type="radio"
              name="favorites_filter"
              id="with_mileage"
              value="2"
              v-model.number="checkedNumber"
            />
            <div class="my_favorites_filter">
              <span> С пробегом: </span>
              <span class="red_text num_mileage a">{{ oldNum }}</span>
            </div>
          </label>
          <label class="label_for_favorites" @click="pickTaxi">
            <input
              class="favorites_filter_checkbox"
              type="radio"
              name="favorites_filter"
              id="taxi_filt"
              value="3"
              v-model.number="checkedNumber"
            />
            <div class="my_favorites_filter">
              <span> Такси: </span>
              <div class="red_text taxi_filt num_taxi a">{{ taxiNum }}</div>
            </div>
          </label>
        </div>
        <div class="total_cars">
          В избранном <span class="fw_bold">{{ allFavNum }} авто</span>
        </div>
      </div>
      <div class="favorites_filter_title">{{ viewTitle }}</div>
      <div class="my_favorites_filter_new_auto">
        <div
          class="auto_cart2"
          v-for="autoCart in viewItems"
          :key="autoCart.id"
        >
          <div class="equipment_items" :class="{ equipmentPos: !autoCart.equipOpen }">
            <button @click="openComplect(autoCart)" class="close_equipment">
              X
            </button>
            <div class="equipment_title">Доступные комплектации</div>
            <li
              class="equipment_text"
              v-for="equipment in autoCart.equipment"
              :key="equipment.id"
            >
              {{ equipment.title }}
              <div>
                <router-link to="/auto_cart">
                  <button
                    class="pick_equipment"
                    @click="goToBuyAuto(autoCart, equipment)"
                  >
                    Выбрать
                  </button>
                </router-link>

                <router-link to="/auto_cart_info"
                  ><button @click="moreInfo(autoCart)" class="more_equipment">
                    Подробнее
                  </button></router-link
                >
              </div>
            </li>
          </div>
          <img
            class="bg_auto_cart2"
            src="@/assets/icon/bg_auto_cart.svg"
            alt=""
          />
          <img class="auto_img2" src="@/assets/icon/auto_cart.svg" alt="" />
          <div class="auto_cart_title2">{{ autoCart.title }}</div>
          <div class="auto_action2">
            <div class="action_day2">Предложение дня</div>
            <div class="action_date2">Выгода до 300 000 ₽</div>
          </div>
          <div class="gifts2">
            <div class="gift2">
              <button class="gift_btn2">
                <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
              </button>
              <div class="gift_text2">
                Оборудование <span class="red_text2">в подарок</span>
              </div>
            </div>

            <div class="gift2">
              <button class="gift_btn2">
                <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
              </button>
              <div class="gift_text2">
                КАСКО <span class="red_text">в подарок</span>
              </div>
            </div>
            <div class="gift2">
              <button class="gift_btn2">
                <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
              </button>
              <div class="gift_text2">
                Комплект резины <span class="red_text2">в подарок</span>
              </div>
            </div>
          </div>
          <div class="auto_price2">
            <div class="price_cart2">
              <span class="bold2"> {{ autoCart.price }} ₽ </span>
            </div>
            <div class="credit_cart2">
              Кредит <span class="bold2"> {{ autoCart.creditPrice }} ₽ </span>
            </div>
          </div>
          <div class="specification2">
            <div class="specification_item2">
              <img src="@/assets/icon/horse.svg" alt="" srcset="" />
              <span>{{ autoCart.characters.power }} л.с</span>
            </div>
            <div class="specification_item2">
              <img src="@/assets/icon/oil.svg" alt="" srcset="" />
              <span>{{ autoCart.characters.oil }} л/км</span>
            </div>
            <div class="specification_item2">
              <img src="@/assets/icon/speed.svg" alt="" srcset="" />
              <span>{{ autoCart.characters.speed }} км/ч</span>
            </div>
            <div class="specification_item2">
              <img src="@/assets/icon/fasters.svg" alt="" srcset="" />
              <span>{{ autoCart.characters.drive }} c.</span>
            </div>
          </div>
          <div class="btn_buy2">
            <button @click="openCreditPopup" class="reserve2">
              Кредит онлайн
            </button>

            <button
              @click="openComplect(autoCart)"
              class="bought2"
            >
              Купить
            </button>

            <router-link to="/auto_cart_info"
              ><button @click="moreInfo(autoCart)" class="more_info2">
                Подробнее
              </button></router-link
            >
          </div>
          <div class="close_fav_item2" @click="removeItem(autoCart)">
            <button class="btn_close_fav">X</button>
          </div>
        </div>
      </div>
    </div>
  </h1>

  <first-footer />
</template>

<script>
export default {
  name: "CartBasket",
  data() {
    return {
      viewItems: [],
      viewTitle: "Новые авто",
      filterNew: [],
      filterTaxi: [],
      filterOld: [],
      checkedNumber: 1,
    };
  },
  props: {
    favoritesItems: {
      type: Array,
    },
  },
  methods: {
    openComplect(autoCart) {
      autoCart.equipOpen = !autoCart.equipOpen
    },
    checkItems() {
      if (this.newNum + this.oldNum + this.taxiNum === 0) {
        this.checkedNumber = 0;
        return (this.viewTitle = "Здесь сейчас пусто :(");
      }
    },
    repickFilter() {
      if (this.viewItems.length === 0) {
        if (this.filterNew.length !== 0) {
          this.pickNew();
          this.checkedNumber = 1;
        } else {
        }
        if (this.filterOld.length !== 0) {
          this.pickOld();
          this.checkedNumber = 2;
        }
        if (this.filterTaxi.length !== 0) {
          this.pickTaxi();
          this.checkedNumber = 3;
        }
      }
    },
    moreInfo(autoCart) {
      this.$emit("moreInfo", autoCart);
    },
    goToBuyAuto(autoCart, equipment) {
      this.$emit("goToBuyAuto", autoCart, equipment);
      console.log(autoCart, equipment);
    },
    filterCategories() {
      this.favoritesItems.forEach((a) => {
        if (a.new === true && a.favorites === true) {
          this.filterNew.push(a);

          this.viewItems = this.filterNew;
        } else if (a.taxi === true && a.favorites === true) {
          this.filterTaxi.push(a);
        } else if (a.old === true && a.favorites === true) {
          this.filterOld.push(a);
        }
      });
      this.filterNew = this.filterNew.filter(
        (el, ind) => ind === this.filterNew.indexOf(el)
      );
      this.filterOld = this.filterOld.filter(
        (el, ind) => ind === this.filterOld.indexOf(el)
      );
      this.filterTaxi = this.filterTaxi.filter(
        (el, ind) => ind === this.filterTaxi.indexOf(el)
      );
    },
    pickOld() {
      this.viewItems = this.filterOld;
      this.viewTitle = "С пробегом";
    },
    pickNew() {
      this.viewItems = this.filterNew;
      this.viewTitle = "Новые авто";
    },
    pickTaxi() {
      this.viewItems = this.filterTaxi;
      this.viewTitle = "Такси";
    },
    removeItem(e) {
      let localRemove = JSON.parse(localStorage.getItem("test"));
      localRemove.forEach((auto) => {
        if (auto.title === e.title) {
          auto.favorites = false;
          localStorage.setItem("test", JSON.stringify(localRemove));
        }
      });
      e.favorites = false;
      this.$emit("carFavoriteRemove", e);
      this.filterNew = this.filterNew.filter((i) => i !== e);
      this.filterOld = this.filterOld.filter((i) => i !== e);
      this.filterTaxi = this.filterTaxi.filter((i) => i !== e);
      this.viewItems = this.viewItems.filter((i) => i !== e);
      this.checkItems();
      this.repickFilter();
    },
    openCreditPopup() {
      this.$emit("openCreditPopup");
    },
  },
  computed: {
    newNum() {
      return this.filterNew.length;
    },
    oldNum() {
      return this.filterOld.length;
    },
    taxiNum() {
      return this.filterTaxi.length;
    },
    allFavNum() {
      return this.newNum + this.oldNum + this.taxiNum;
    },
  },
  mounted() {
    this.filterCategories();
    this.pickNew();
    this.checkItems();
    this.repickFilter();
  },
};
</script>

<style scoped>

.equipmentPos {
  transform: translateX(-2000px);
}

.close_equipment {
  position: absolute;
  background: none;
  width: 32px;
  height: 30px;
  border-radius: 50%;
  right: 20px;
  top: 20px;
  border: 1px solid gray;
  cursor: pointer;
}

.close_equipment:hover {
  opacity: 0.5;
}

.pick_equipment {
  width: 90px;
  height: 25px;
  border-radius: 5px;
  border: none;
  background: #ca0100;
  color: white;
  margin-right: 10px;
}
.more_equipment {
  width: 90px;
  height: 25px;
  border-radius: 5px;
  border: none;
  background: gray;
  color: white;
}

.pick_equipment:hover {
  cursor: pointer;
  opacity: 0.5;
}

.more_equipment:hover {
  cursor: pointer;
  opacity: 0.5;
}
.equipment_text {
  font-size: 18px;
  list-style-type: none;
  margin-top: 20px;
  width: 95%;
  box-shadow: 1px 1px 5px gray;
  padding: 10px 10px 10px 10px;
  font-weight: normal;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.equipment_text:hover {
  transition: 0.5s;
  box-shadow: 2px 2px 10px gray;
}
.equipment_title {
  font-size: 24px;
}
.equipment_items {
  width: 91%;
  height: 86%;
  background: white;
  position: absolute;
  border-radius: 20px;
  padding: 30px 20px 30px 20px;
  z-index: 9;
  transition: 0.5s all;
  top: 0%;
  left: 0%;
}
.test {
  margin-bottom: 200px;
}

.my_favorites_items {
  margin-bottom: 150px;
  transition: 0.6s;
}

.my_favorites_filter_new_auto {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 70px;
  transition: 0.6s;
}

.my_favorites_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eff0f0;
}

.my_favorites_title {
  font-size: 70px;
  font-weight: bold;
  align-items: center;
  display: flex;
}

.label_for_favorites:first-child {
  margin-left: 100px;
}

.my_favorites_filter {
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  background-color: #eff0f0;
  color: #262626;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  display: flex;
}

.label_for_favorites {
  margin-left: 10px;
}

.favorites_filter_checkbox:checked + .my_favorites_filter > * {
  transition: 0.3s;
  color: white;
}

.favorites_filter_checkbox:checked + .my_favorites_filter {
  transition: 0.3s;
  background-color: #ca0100;
}

.favorites_filter_checkbox:checked + .red_text {
  color: white;
}

.red_text {
  padding-left: 5px;
}
.favorites_filter_checkbox {
  -webkit-appearance: none;
  display: none;
}

.total_cars {
  font-size: 16px;
  font-weight: normal;
}

.fw_bold {
  font-weight: bold;
}

.favorites_filter_title {
  margin-top: 50px;
}

.car_sold {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: #26262680;
  color: white;
  font-weight: normal;
  font-size: 30px;
  border: none;
}

.car_sold_text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.my_favorites_filter_with_mileage {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.auto_cart_with_mileage {
  position: relative;
  width: 447px;
  height: 593px;
  margin-top: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
}

.hearth_mileage {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: white;
  position: relative;
  border: none;
  margin-right: 10px;
}

.tubs_mileage {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: white;
  position: relative;
  border: none;
}

.favorites_hearth_checkbox {
  -webkit-appearance: none;
  display: none;
}

.auto_cart_title {
  width: 400px;
}

.favorites_tubs_checkbox {
  -webkit-appearance: none;
  display: none;
}

.icon_tubs_mileage {
  transition: 0.3s;
  background: url(@/assets/img_car_type/tubs_mileage.svg);
  width: 16px;
  height: 18px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.icon_hearth_mileage {
  transition: 0.3s;
  background: url(@/assets/img_car_type/hearth_mileage_grey.svg);
  width: 17px;
  height: 15px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.favorites_hearth_checkbox:checked + .icon_hearth_mileage {
  transition: 0.3s;
  background: url(@/assets/img_car_type/hearth_mileage_red.svg);
  width: 17px;
  height: 15px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.1, 1.1);
}

.favorites_tubs_checkbox:checked + .icon_tubs_mileage {
  transition: 0.3s;
  background: url(@/assets/img_car_type/tubs_mileage_red.svg);
  width: 16px;
  height: 18px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.1, 1.1);
}

.icon_fav_tubs {
  position: absolute;
  display: flex;
  right: 30px;
  top: 20px;
  z-index: 2;
}

.bg_auto_cart_with_mileage {
  position: absolute;
  z-index: 1;
}

.close_fav_item {
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.btn_close_fav {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: none;
  border: 1px solid rgba(128, 128, 128, 0.519);
  font-weight: bold;
  cursor: pointer;
  font-size: 13px;
  color: gray;
  position: absolute;
  top: 20px;
  right: 20px;
}

.btn_close_fav:hover {
  transition: 0.3s;
  opacity: 0.5;
}

.auto_cart2 {
  width: 430px;
  height: 420px;
  background-color: #e1e1e14f;
  border: 1px solid #73737371;
  border-radius: 20px;
  padding: 40px 20px 30px 20px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px gray;
  transition: 0.6s;
}

.autous_cart .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.auto_cart_title2 {
  font-size: 26px;
  font-weight: bold;
  line-height: 5px;
  margin-bottom: 30px;
}

.auto_action2 {
  display: flex;
  align-items: center;
}

.action_day2 {
  font-size: 13px;
  font-weight: normal;
  color: white;
  background-color: #ca0100;
  padding: 7px 30px 7px 30px;
  margin-right: 35px;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 1px;
  margin-bottom: 10px;
}
.action_day2::after {
  content: "";
  top: 0;
  right: -24px;
  position: absolute;
  border: 14px solid transparent;
  border-left: 10px solid #ca0100;
  height: 1px;
}

.action_date2 {
  font-size: 13px;
  color: #ca0100;
  font-weight: 500;
  line-height: 0px;
}

.gift2 {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.gift_btn2 {
  margin-right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: black;
  padding-top: 3px;
  cursor: pointer;
}

.gift_btn2:hover {
  transition: 0.3s;
  opacity: 0.5;
  transform: scale(1.05, 1.05);
}

.gift_text2 {
  font-size: 13px;
  font-weight: normal;
  line-height: 5px;
  padding-top: 8px;
}

.red_text2 {
  font-weight: bold;
  color: #ca0100;
}

.auto_price2 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 15px;
}

.price_cart2 {
  font-size: 24px;
}

.credit_cart2 {
  font-size: 16px;
  padding-top: 5px;
}

.bold2 {
  font-weight: bold;
}

.specification2 {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 20px;
}

.specification_item2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  border: 1px solid gray;
  border-radius: 20px;
  font-size: 12px;
  font-weight: normal;
}

.specification_item2 img {
  margin-right: 5px;
}

.reserve2 {
  font-size: 14px;
  font-weight: 600;
  margin-right: 15px;
  width: 146px;
  height: 51px;
  position: relative;
  background-color: #ca0100;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
  z-index: 3;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.reserve2:hover {
  transition: 0.3s;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 3;
  transform: scale(1.05, 1.05);
}

.reserve2::after {
  content: "";
  top: 0px;
  right: -39px;
  position: absolute;
  border: 25px solid transparent;
  border-left: 15px solid #ca0100;
  height: 1px;
}

.bought2 {
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-right: 15px;
  width: 146px;
  height: 51px;
  position: relative;
  margin-left: -24px;
  z-index: 2;
  border: none;
  background-color: black;
  cursor: pointer;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.bought2:hover {
  transition: 0.3s;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 3;
  transform: scale(1.05, 1.05);
}

.bought2::after {
  content: "";
  top: 0;
  right: -39px;
  position: absolute;
  border: 25px solid transparent;
  border-left: 15px solid black;
  height: 1px;
}

.more_info2 {
  font-size: 14px;
  font-weight: 600;
  width: 146px;
  height: 51px;
  margin-left: -24px;
  position: relative;
  background-color: grey;
  color: white;
  border: none;
  z-index: 1;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.more_info2:hover {
  transition: 0.3s;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 3;
  transform: scale(1.05, 1.05);
}

.more_info2::after {
  content: "";
  top: 0px;
  right: -39px;
  position: absolute;
  border: 25px solid transparent;
  border-left: 15px solid gray;
  height: 1px;
}

.bg_auto_cart2 {
  position: absolute;
  right: 0%;
  top: 10%;
  z-index: -1;
}

.auto_img2 {
  position: absolute;
  right: 5%;
  top: 30%;
  z-index: 1;
}

.icons_auto2 {
  display: flex;
  position: absolute;
  top: 30px;
  right: -20px;
  width: 100px;
}
</style>
