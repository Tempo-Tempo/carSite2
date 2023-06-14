<template>
  <div class="autous_cart">
    <div class="container">
      <div>
        <div class="autous_title">{{ autousTitle }}</div>
        <div
          v-for="autoCart in currentPage"
          :key="autoCart.id"
          class="auto_cart"
          @click="govno"
        >
          <div
            class="auto_cart_complect"
            :class="{ equipmentPos: !autoCart.equipOpen }"
          >
            <div class="complect_title">
              Доступные комплектации для {{ autoCart.title }} (Model:
              {{ autoCart.model }})
            </div>
            <li
              v-for="equipment in autoCart.equipment"
              :key="equipment.id"
              class="title_equipemnt"
            >
              <b>{{ equipment.title }}</b>
              <span class="text_equipment">
                <b>Коробка:</b> {{ equipment.box }}</span
              >
              <span> <b>Привод:</b> {{ equipment.wd }} </span>
              <span><b>Мотор:</b> {{ equipment.engine }} л.</span>
              <router-link to="/auto_cart"
                ><button
                  @click="goToBuyAuto(autoCart, equipment)"
                  class="pick_equipemnt"
                  name=""
                  id=""
                >
                  Выбрать
                </button></router-link
              >
            </li>
            <div class="footer_equipment">
              Информацию о технических характерисках и комплетациях узавай в
              <router-link to="/auto_cart_info"
                ><button
                  @click="moreInfo(autoCart)"
                  class="btn_footer_equipment"
                >
                  Подробнее
                </button></router-link
              >
            </div>
            <button @click="openComplect(autoCart)" class="close_equipment">
              X
            </button>
          </div>
          <div class="auto_cart_title">
            {{ autoCart.title }} ( Model: {{ autoCart.model }})
          </div>
          <div class="new_visiable">
            <div class="img_for_cart">
              <img
                class="bg_auto_cart"
                src="@/assets/icon/bg_auto_cart.svg"
                alt=""
              />
              <img
                class="auto_img"
                :src="require('../assets/icon/' + autoCart.img)"
                alt=""
              />
            </div>
            <div class="auto_price">
              <div class="auto_action">
                <div class="action_day">Предложение дня</div>
                <div class="action_date">Выгода до 300 000 ₽</div>
              </div>
              <div class="price_cart">
                <span class="bold">от {{ autoCart.price }} ₽ </span>
              </div>
              <div class="credit_cart">
                Кредит
                <span class="bold">от {{ autoCart.creditPrice }} ₽/мес.</span>
              </div>
            </div>
            <div class="btn_buy">
              <button @click="openCreditPopup" class="reserve">Кредит онлайн</button>

              <button @click="openComplect(autoCart)" class="bought">
                Купить
              </button>
              <router-link to="/auto_cart_info"
                ><button @click="moreInfo(autoCart)" class="more_info">
                  Подробнее
                </button></router-link
              >
            </div>
            <div class="gifts">
              <div class="gift">
                <button class="gift_btn">
                  <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
                </button>
                <div class="gift_text">
                  Оборудование <span class="red_text">в подарок</span>
                </div>
              </div>

              <div class="gift">
                <button class="gift_btn" @click="pagesGovno">
                  <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
                </button>
                <div class="gift_text">
                  КАСКО <span class="red_text">в подарок</span>
                </div>
              </div>
              <div class="gift">
                <button class="gift_btn">
                  <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
                </button>
                <div class="gift_text">
                  Комплект резины <span class="red_text">в подарок</span>
                </div>
              </div>
            </div>
            <div class="specification">
              <div class="specification_item">
                <img src="@/assets/icon/horse.svg" alt="" srcset="" />
                <span>{{ autoCart.characters.power }} л.с</span>
              </div>
              <div class="specification_item">
                <img src="@/assets/icon/oil.svg" alt="" srcset="" />
                <span>{{ autoCart.characters.oil }} л/км</span>
              </div>
              <div class="specification_item">
                <img src="@/assets/icon/speed.svg" alt="" srcset="" />
                <span>{{ autoCart.characters.speed }} км/ч</span>
              </div>
              <div class="specification_item">
                <img src="@/assets/icon/fasters.svg" alt="" srcset="" />
                <span>{{ autoCart.characters.drive }} c.</span>
              </div>
            </div>
          </div>

          <div class="icons_auto">
            <label>
              <input
                @click="fav(autoCart)"
                class="for_hearth"
                type="checkbox"
                :value="autoCart"
                :checked="autoCart.favorites"
              />
              <div class="icon_hearth"></div>
            </label>
            <label>
              <input
                class="for_tubs"
                @click="tubs(autoCart)"
                type="checkbox"
                name=""
                id="check_tubs"
              />
              <div class="icon_tubs"></div>
            </label>
          </div>
        </div>
      </div>
      <pageNumbers
        :viewsAuto="this.viewsAuto.length"
        :page="page"
        :limitItemsPage="limitItemsPage"
        @nextPage="next"
        @prevPage="prev"
      />
      <button
        v-if="showMore"
        class="close_more"
        @click="openAndCloseMore"
        id="close_more"
      >
        Скрыть
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "autoousCart",
  data() {
    return {
      hearth: false,
      showMore: false,
      testFav: true,
      page: 1,
      limitItemsPage: 6,
      viewsAuto: [],
      autousTitle: "",
      viewBox: false,
      popularAuto: [],
      testPos: {
        transform: "translateX(-1200px)",
      },
    };
  },
  props: {
    autousCart: {
      type: Array,
      required: true,
    },
    filterCate: {
      type: Object,
      required: true,
    },
    letsGoSort: {
      type: Boolean,
      required: true,
    },
    handlerCar: {
      tyep: Object,
      required: true,
    },
    statusPick: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    goToBuyAuto(autoCart, equipment) {
      this.$emit("goToBuyAuto", autoCart, equipment);
    },
    openComplect(autoCart) {
      autoCart.equipOpen = !autoCart.equipOpen;
    },
    moreInfo(autoCart) {
      this.$emit("moreInfo", autoCart);
    },
    nextPageGo() {
      if (this.viewsAuto.length > 6) {
        console.log("next page");
        this.viewsAuto.slice(0, 6);
      }
    },
    openCreditPopup() {
      this.$emit('openCreditPopup')
    },
    next() {
      if (this.viewsAuto.length < this.limitItemsPage) {
        return;
      }
      this.page += 1;
      this.limitItemsPage += 6;
      localStorage.setItem("currentPage", JSON.stringify(this.page));
      localStorage.setItem(
        "currentItemsPage",
        JSON.stringify(this.limitItemsPage)
      );
    },
    prev() {
      if (this.viewsAuto.length > (this.limitItemsPage + 6)) {
        return;
      }
      this.page = this.page - 1;
      this.limitItemsPage = this.limitItemsPage - 6;
      if (this.page === 0) {
        this.page = 1;
        this.limitItemsPage = 6;
      }
      localStorage.setItem("currentPage", JSON.stringify(this.page));
      localStorage.setItem(
        "currentItemsPage",
        JSON.stringify(this.limitItemsPage)
      );
    },
    filterAuotus() {
      this.viewsAuto = [];
      this.autousCart.filter((auto) => {
        if (
          auto.boxType === this.filterCate.boxType &&
          auto.bodyType === this.filterCate.bodyType &&
          auto.price <= this.filterCate.price
        ) {
          this.viewsAuto.push(auto);
          this.viewBox = true;
          localStorage.setItem("test", JSON.stringify(this.viewsAuto));
        }
      });
      this.autoTitle();
    },
    openAndCloseMore() {
      this.showMore = !this.showMore;
    },
    fav(e) {
      if (e.favorites === false) {
        e.favorites = true;
        console.log("add");
        localStorage.setItem("test", JSON.stringify(this.viewsAuto));
        return this.$emit("carFavoriteAdd", e);
      }

      if (e.favorites === true) {
        e.favorites = false;
        console.log("del");
        localStorage.setItem("test", JSON.stringify(this.viewsAuto));
        return this.$emit("carFavoriteRemove", e);
      }
    },
    tubs(e) {
      if (e.comprasion === false) {
        e.comprasion = true;
        return this.$emit("carFavoriteAdd", e);
      }

      if (e.comprasion === true) {
        e.comprasion = false;
        return this.$emit("carComprasionRemove", e);
      }
    },
    autoTitle() {
      if (this.viewsAuto?.length === 0) {
        console.log(this.viewsAuto.length);
        this.autousTitle = "К сожалению ничего не найдено :(";
      } else {
        this.autousTitle = "Подходящие результаты:";
      }
    },
  },
  computed: {
    // viewPopularAuto() {
    //   if (this.viewsAuto.length === 0) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
    currentPage() {
      console.log(this.limitItemsPage);
      return this.viewsAuto.slice(this.limitItemsPage - 6, this.limitItemsPage);
    },
  },
  watch: {
    letsGoSort() {
      this.filterAuotus();
    },
    viewsAuto: {
      handler(value) {
        if (JSON.parse(localStorage.getItem("test")).length === 0) {
          this.viewsAuto = this.autousCart.slice(0, 4);
          this.autousTitle = "Популярное авто";
        } else if (this.viewsAuto.length > 6) {
          this.viewsAuto = JSON.parse(localStorage.getItem("test"));
        }
      },
    },
    limitItemsPage() {
      console.log(this.limitItemsPage);
    },
    statusPick() {
      console.log('status')
      if (this.handlerCar.pick === false) {
        this.viewsAuto = this.viewsAuto.filter(
          (auto) => auto.title !== this.handlerCar.title
        );
        this.prev();
        return localStorage.setItem("test", JSON.stringify(this.viewsAuto));
      }
      if (this.handlerCar.pick === true) {
        this.autousCart.find((auto) => {
          if (auto.title === this.handlerCar.title) {
            this.popularAuto = JSON.parse(localStorage.getItem("test"));
            if (JSON.parse(localStorage.getItem("test2")).length <= 1) {
              this.popularAuto = [];
            }
            this.popularAuto.push(auto);
            this.viewsAuto = this.popularAuto;
            this.autoTitle();
            this.viewBox = true;
            return localStorage.setItem("test", JSON.stringify(this.viewsAuto));
          }
        });
      }
    },
  },
  mounted() {
    if (this.viewsAuto.length === 0) {
      this.viewsAuto = JSON.parse(localStorage.getItem("test"));
      this.autoTitle();
      this.autousCart.forEach((auto) => {
        if (auto.favorites === true) {
          this.viewsAuto.push(auto);
          this.$emit("pickFilterItem", auto);
        }
      });
    }
    if (JSON.parse(localStorage.getItem("currentPage")) !== null) {
      this.page = JSON.parse(localStorage.getItem("currentPage"));
      this.limitItemsPage = JSON.parse(
        localStorage.getItem("currentItemsPage")
      );
    }
  },
};
</script>

<style scpoed>
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

.equipmentPos {
  transform: translateX(-1200px);
}

.pick_equipemnt {
  width: 100%;
  height: 35px;
  cursor: pointer;
  background-color: #ca0100;
  border: none;
  color: white;
  border-radius: 5px;
}

.pick_equipemnt:hover {
  opacity: 0.5;
  transition: 0.3s;
}

.btn_footer_equipment {
  width: 120px;
  height: 25px;
  cursor: pointer;
  background-color: gray;
  border: none;
  color: white;
  border-radius: 5px;
}

.btn_footer_equipment:hover {
  opacity: 0.6;
  transition: 0.4s;
}

.footer_equipment {
  position: absolute;
  bottom: 15px;
  font-size: 14px;
  color: gray;
}

.complect_title {
  font-weight: bold;
  font-size: 16px;
  position: absolute;
  top: 20px;
  left: 20px;
}
.title_equipemnt {
  width: 15%;
  display: flex;
  height: 140px;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 7px 10px 5px 10px;
  box-shadow: 1px 1px 5px gray;
  margin-right: 20px;
  font-size: 14px;
  margin-top: 40px;
  position: relative;
  justify-content: space-between;
  border-radius: 5px;
}
.autous_cart {
  position: relative;
  overflow: hidden;
  transition: 0.6s ease-in;
  background-color: #eff0f0;
  margin-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px gray;
}

.auto_cart_complect {
  width: 97%;
  height: 235px;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 20px;
  padding: 15px 10px 10px 20px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.6s all;
  z-index: 4;
  display: flex;
}

.autous_title {
  font-size: 24px;
  font-weight: bold;
}

.btn_buy {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 10px;
}
.new_visiable {
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}

.img_for_cart {
  display: block;
  width: 300px;
  position: relative;
}

.gifts {
  display: flex;
  flex-direction: column;
  width: 160px;
}

.close_more {
  position: absolute;
  left: 50%;
  bottom: -1%;
  padding: 15px 70px 15px 70px;
  transform: translateX(-50%);
  color: white;
  background-color: #ca0100;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 5;
  transform: translate(-50%, -50%);
}

.close_more:hover {
  transition: 0.3s;
  transform: translate(-50%, -50%) scale(1.05, 1.05);
}

.for_hidden {
  transition: 0.6s ease-in;
  max-height: 1000px;
  padding-bottom: 5%;
}

.auto_cart {
  width: 100%;
  height: 220px;
  background-color: rgba(255, 255, 255, 0.783);
  border: 1px solid #73737371;
  border-radius: 20px;
  padding: 30px 10px 10px 20px;
  position: relative;
  margin-top: 20px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px gray;
  transition: 0.6s;
}

.auto_cart2 {
  width: 425px;
  height: 400px;
  background-color: #e1e1e14f;
  border: 1px solid #73737371;
  border-radius: 20px;
  padding: 40px 20px 10px 20px;
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
  position: relative;
  padding: 0;
  margin-left: 50px;
}

.auto_cart_title {
  font-size: 20px;
  font-weight: bold;
  line-height: 5px;
  height: 40px;
}

.auto_action {
  align-items: center;
  margin-bottom: 50px;
}

.auto_action2 {
  display: flex;
  align-items: center;
}

.action_day {
  font-size: 13px;
  font-weight: normal;
  color: white;
  background-color: #ca0100;
  padding: 7px 20px 7px 20px;
  margin-right: 35px;
  position: relative;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 1px;
  margin-bottom: 10px;
  width: 130px;
}
.action_day::after {
  content: "";
  top: 0;
  right: -24px;
  position: absolute;
  border: 14px solid transparent;
  border-left: 10px solid #ca0100;
  height: 1px;
}

.action_date {
  font-size: 13px;
  color: #ca0100;
  font-weight: 500;
  line-height: 0px;
}

.gift {
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 200px;
}

.gift_btn {
  margin-right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: black;
  padding-top: 3px;
  cursor: pointer;
}

.gift_btn:hover {
  transition: 0.3s;
  opacity: 0.5;
  transform: scale(1.05, 1.05);
}

.gift_text {
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;
  width: 105px;
}

.red_text {
  font-weight: bold;
  color: #ca0100;
}

.auto_price {
  display: flex;
  flex-direction: column;
  width: 200px;
  text-align: left;
  margin-bottom: 15px;
}

.price_cart {
  font-size: 24px;
}

.credit_cart {
  font-size: 16px;
  padding-top: 5px;
}

.bold {
  font-weight: bold;
}

.specification {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 80%;
}

.specification_item {
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

.specification_item img {
  margin-right: 5px;
}

.reserve {
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

.reserve:hover {
  transition: 0.3s;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 3;
  transform: scale(1.05, 1.05);
}

.reserve::after {
  content: "";
  top: 0px;
  right: -39px;
  position: absolute;
  border: 25px solid transparent;
  border-left: 15px solid #ca0100;
  height: 1px;
}

.bought {
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
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-top: 10px;
  margin-left: 0;
}

.bought:hover {
  transition: 0.3s;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 3;
  transform: scale(1.05, 1.05);
}

.bought::after {
  content: "";
  top: 0;
  right: -39px;
  position: absolute;
  border: 25px solid transparent;
  border-left: 15px solid black;
  height: 1px;
}

.more_info {
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
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-top: 10px;
  margin-left: 0;
}

.more_info:hover {
  transition: 0.3s;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 3;
  transform: scale(1.05, 1.05);
}

.more_info::after {
  content: "";
  top: 0px;
  right: -39px;
  position: absolute;
  border: 25px solid transparent;
  border-left: 15px solid gray;
  height: 1px;
}

.bg_auto_cart {
  position: absolute;
  right: -16%;
  top: -12%;
  z-index: 1;
  border-radius: 20px;
}

.auto_img {
  position: absolute;
  top: 0%;
  z-index: 1;
}

.icons_auto {
  display: flex;
  position: absolute;
  top: 30px;
  right: 0px;
  width: 100px;
}

.icons_auto .icon_hearth {
  margin-right: 10px;
}

.show_more {
  position: absolute;
  left: 50%;
  bottom: -2%;
  width: 215px;
  height: 55px;
  transform: translateX(-50%);
  color: white;
  background-color: #ca0100;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 0;
  transform: translate(-50%, -50%);
}

.show_more:hover {
  transition: 0.3s;
  transform: translate(-50%, -50%) scale(1.05, 1.05);
}

.icon_hearth {
  position: absolute;
  background: url(@/assets/icon/hearth_grey.svg);
  width: 26px;
  height: 23px;
  margin-right: 30px;
  cursor: pointer;
  display: block;
  left: 0;
}

.favorites_num {
  position: absolute;
  padding: 2px 6px 2px 6px;
  background-color: #ca0100;
  font-size: 10px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  top: -40%;
  right: -50%;
}

.favorites_num_tubs {
  position: absolute;
  padding: 2px 6px 2px 6px;
  background-color: #ca0100;
  font-size: 10px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  top: -40%;
  right: -50%;
}

.favorites_num:hover {
  transition: 0.3s;
  transform: scale(1.1, 1.1);
}

.icon_hearth:hover {
  transition: 0.3s;
  background: url(@/assets/icon/hearth_red.svg);
  width: 26px;
  height: 23px;
  margin-right: 30px;
}

.for_hearth {
  display: none;
}

.for_hearth:checked + .icon_hearth {
  transition: 0.3s;
  background: url(@/assets/icon/hearth_red.svg);
  width: 26px;
  height: 23px;
  margin-right: 30px;
  position: absolute;
  transform: scale(1.2, 1.2);
  display: block;
}

.for_tubs {
  display: none;
}

.for_tubs:checked + .icon_tubs {
  transition: 0.3s;
  background: url(@/assets/icon/tubs_red.svg);
  width: 19px;
  height: 23px;
  position: absolute;
  transform: scale(1.2, 1.2);
  display: block;
}

.icon_tubs {
  position: absolute;
  background: url(@/assets/icon/tubs.svg);
  width: 19px;
  height: 23px;
  margin-right: 30px;
  cursor: pointer;
  right: 15px;
}

.icon_tubs:hover {
  transition: 0.3s;
  background: url(@/assets/icon/tubs_red.svg);
  width: 19px;
  height: 23px;
  margin-right: 30px;
}

.new_auto_cart {
  position: relative;
  display: flex;

  margin-bottom: 30px;
  margin-top: 30px;
}
/* СТИЛИ ДЛЯ НОВОЙ КАРТОЧКИ  */
.car_in_stock_item_inner {
  position: relative;
  display: flex;
  height: 180px;
  padding: 30px;
  border-left: 1px solid rgba(128, 128, 128, 0.281);
  border-top: none;
  border-right: 1px solid rgba(128, 128, 128, 0.281);
  margin-top: -30px;
}

.item_inner_equipment {
  position: relative;
  width: 336px;
}

.icons_fav_tubs_equipment {
  display: flex;
}

.benefit_equipment {
  position: absolute;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 15px 5px 15px;
  right: 0%;
  top: 0;
  background-color: #ca0100;
  border-radius: 10px;
}

.img_equipment {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}
.item_inner_info_car {
  position: absolute;
  left: 25%;
  top: 50%;
  transform: translateY(-50%);
}

.car_stock_name {
  color: #262626;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
}

.stock_in_pts {
  font-size: 14px;
  font-weight: bold;
  color: #ca0100;
  margin-bottom: 10px;
}

.stock_quantity {
  font-size: 14px;
  margin-bottom: 10px;
}

.specification_car_in_stock_left {
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translateY(-50%);
}

.specification_car_in_stock_left .specification_item {
  margin-bottom: 5px;
}

.specification_car_in_stock_left {
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translateY(-50%);
}

.specification_car_in_stock_left .specification_item {
  margin-bottom: 5px;
}

.specification_car_in_stock_right {
  position: absolute;
  left: 48%;
  top: 40%;
  transform: translateY(-50%);
}

.specification_car_in_stock_right .specification_item {
  margin-bottom: 5px;
}

.full_info_specification {
  background-color: #ca0100;
  display: flex;
  position: absolute;
  color: white;
  font-size: 14px;
  padding: 10px 20px 10px 10px;
  left: 40%;
  top: 60%;
  border-radius: 20px;
  cursor: pointer;
}

.full_info_specification:hover {
  opacity: 0.6;
}

.title_full_info {
  margin-left: 10px;
  position: relative;
  border-image-width: 100%;
}

.full_info_vector {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.for_full_info_vector {
  position: relative;
  margin-left: 55px;
}

.right_item_innet_car_stock {
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translateY(-50%);
}

.right_item_innet_car_stock .gift {
  margin: 0px;
}

.price_item_inner_stock {
  position: absolute;
  left: 72%;
  top: 30%;
  transform: translateY(-50%);
  text-align: right;
}

.credit_price {
  position: absolute;
  font-weight: bold;
  font-size: 14px;
  color: #737373;
  left: 74%;
  bottom: 25%;
  text-align: right;
}

.btn_item_car_stock {
  position: absolute;
  right: 2%;
}

.now_price {
  font-size: 24px;
  font-weight: bold;
}

.old_price {
  text-decoration: line-through;
  font-size: 14px;
  color: #737373;
}

.btn_item_car_stock {
  position: absolute;
  right: 2%;
}

.btn_item_car_stock .reserve {
  font-size: 14px;
  font-weight: 600;
  margin-right: 15px;
  width: 230px;
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
  display: block;
  margin-bottom: 30px;
  margin-top: 20px;
}

.btn_item_car_stock .bought {
  width: 120px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-left: 0px;
}

.btn_item_car_stock .more_info {
  width: 120px;
}
</style>
