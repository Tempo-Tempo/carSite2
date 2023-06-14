<template>
  <section id="fast_pick" class="test">
    <div class="container">
      <div class="fast_pick_title">Быстрый подбор авто</div>
      <div class="fast_pick" ref="fastPick">
        <div class="marks_auto">
          <div
            v-for="autoItem in quickSelectionItems"
            :key="autoItem.id"
            class="auto_item"
            :class="{ pick: autoItem.pick }"
            @click="pickItemMark(autoItem)"
          >
            <img
              class="logo_auto"
              :src="require('../assets/icon/' + autoItem.img)"
              alt=""
            />
            <div class="name_auto">{{ autoItem.title }}</div>
          </div>
        </div>
        <div class="pick_auto">
          <div class="title_pick"></div>

          <div class="price">
            <div class="title_price">
              Цена:
              <span
                v-if="priceFrom === null && err"
                class="text_red new_postition"
                >Укажите цену</span
              >
            </div>
            <div class="min_max">
              <input
                type="number"
                v-model="priceFrom"
                placeholder="До"
                class="handler_price"
              />
              <formated-price :anyPrice="priceFrom">
                <template #currentPrice="test"> до {{ test.price }} </template>
              </formated-price>
            </div>
          </div>

        
          <div class="filter_pick">
            <label>
              <div class="type_title">
                <input
                  class="kuzov_pick_checkbox"
                  type="checkbox"
                  name=""
                  id=""
                  v-model="kuzov"
                />
                <div class="type_kuzov">{{ textBody }}</div>

                <div
                  class="title_kuzov_full_info"
                  :class="{ new_closed: !kuzov }"
                >
                  <ul class="title_kuzov_ul">
                    <li
                      v-for="body in quickFilterItems"
                      @click="pickBody(body)"
                      :key="body.id"
                    >
                      {{ body.title }}
                    </li>
                  </ul>
                </div>
              </div>
              <span v-if="pickItems.bodyType === '' && err" class="text_red"
                >Заполните все данные</span
              >
            </label>
            <label for="test_box">
              <div class="box_title">
                <input
                  class="box_pick_checkbox"
                  type="checkbox"
                  name=""
                  id="test_box"
                  v-model="box"
                />
                <div class="type_box" id="test_box">{{ textBox }}</div>

                <div class="title_box_full_info" :class="{ new_closed: !box }">
                  <ul class="title_box_ul">
                    <li
                      @click="pickBody(box)"
                      v-for="box in quickFilterItemsBox"
                      :key="box.id"
                    >
                      {{ box.title }}
                    </li>
                  </ul>
                </div>
              </div>
              <span v-if="pickItems.boxType === '' && err" class="text_red"
                >Заполните все данные</span
              >
            </label>
          </div>
          <button @click="sortItems" class="show_result">Подобрать</button>
        </div>
      </div>
      <div class="result_filter">
        <autoousCart
          @carFavoriteRemove="removeFavorite"
          @carFavoriteAdd="addFavorite"
          @carComprasionRemove="removeCompres"
          @pickFilterItem="pickItemMark"
          @moreInfo="moreInfo"
          @goToBuyAuto="goToBuyAuto"
          @openCreditPopup="openCreditPopup"
          :autousCart="autousCart"
          :filterCate="filterCate"
          :letsGoSort="letsGoSort"
          :handlerCar="handlerCar"
          :statusPick="statusPick"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "quickSelection",
  data() {
    return {
      kuzov: false,
      box: false,
      priceFrom: null,
      textBox: "Коробка",
      textBody: "Тип кузова",
      pickItems: {
        bodyType: "",
        boxType: "",
      },
      err: false,
      formatedPrice: "",
      handlerCar: {},
      statusPick: false,
      pickedItemsLocal: [],
    };
  },
  props: {
    quickSelectionItems: {
      type: Array,
      required: true,
    },
    quickFilterItems: {
      type: Array,
      required: true,
    },
    quickFilterItemsBox: {
      type: Array,
      required: true,
    },
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
  },
  methods: {
    goToBuyAuto(autoCart, equipment) {
      this.$emit('goToBuyAuto', autoCart, equipment)
    },
    openCreditPopup() {
      this.$emit('openCreditPopup')
    },
    moreInfo(autoCart) {
      this.$emit('moreInfo', autoCart)
    },
    pickBody(e) {
      this.quickFilterItems.forEach((i) => {
        if (i?.title === e?.title) {
          this.$emit("pickBody", e.bodyType);
          this.textBody = e.title;
          this.pickItems.bodyType = e.bodyType;
          this.err = false;
        }
      });
      this.quickFilterItemsBox.forEach((i) => {
        if (i?.title === e?.title) {
          this.$emit("pickBox", e.boxType);
          this.textBox = e.title;
          this.pickItems.boxType = e.boxType;
          this.err = false;
        }
      });
    },
    pickItemMark(e) {
      this.handlerCar = {};
      this.statusPick = !this.statusPick;
      this.handlerCar = e;
      if (e.pick === false) {
        e.pick = true;
        console.log("add");
        this.pickedItemsLocal.push(this.handlerCar);
        return localStorage.setItem(
          "test2",
          JSON.stringify(this.pickedItemsLocal)
        );
      }
      if (e.pick === true) {
        e.pick = false;
        console.log("del");
        this.pickedItemsLocal = this.pickedItemsLocal.filter(
          (item) => item.title !== e.title
        );
        console.log(this.pickedItemsLocal);
        return localStorage.setItem(
          "test2",
          JSON.stringify(this.pickedItemsLocal)
        );
      }
    },
    sortItems(e) {
      this.$emit("filterPrice", this.priceFrom);
      this.pickedItemsLocal = [];
      this.quickSelectionItems.filter((q) => {
        if (
          this.pickItems.bodyType === q.bodyType &&
          this.pickItems.boxType === q.boxType &&
          Number(this.priceFrom) >= q.price
        ) {
          q.pick = true;
          this.pickedItemsLocal.push(q);
          localStorage.setItem("test2", JSON.stringify(this.pickedItemsLocal));
        } else {
          q.pick = false;
          localStorage.setItem("test2", JSON.stringify(this.pickedItemsLocal));
        }
      });
      this.err = true;
    },
    formatPrice(e) {
      this.formatedPrice = e;
    },
    addFavorite(e) {
      this.$emit("carFavoriteAdd", e);
    },
    removeFavorite(i) {
      this.$emit("carFavoriteRemove", i);
    },
    removeCompres(i) {
      this.$emit("carComprasionRemove", i);
    },
    quickPickCar() {
      if (localStorage.getItem("test2") !== null) {
        this.pickedItemsLocal = JSON.parse(localStorage.getItem("test2"));
        this.pickedItemsLocal.forEach((q) => {
          this.quickSelectionItems.forEach((a) => {
            if (a.title === q.title) {
              a.pick = !a.pick;
            }
          });
        });
      }
    },
  },
  created() {
    this.quickPickCar();
  },
};
</script>

<style scoped>
.price_range {
  -webkit-appearance: none;
  width: 290px;
  height: 4px;
  background: #e1e1e1;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  position: relative;
}

.handler_price {
  border: none;
  height: 25px;
  margin-left: 20px;
  padding-left: 20px;
  outline: none;
  border-radius: 5px;
  margin-top: 10px;
}

.handler_price::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.result_filter {
  width: 100%;
}
.pick_auto .price_range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background-color: #ca0100;
  border-radius: 50%;
}

.govno_range {
  -webkit-appearance: none;
  width: 490px;
  height: 4px;
  background: #e1e1e1;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  position: relative;
}

.take_price {
  position: absolute;
  left: 45%;
  font-weight: normal;
  bottom: -105px;
  font-size: 15px;
}

.govno_range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background-color: #ca0100;
  border-radius: 50%;
}

.pick_auto .price_range::-webkit-slider-thumb:hover {
  transition: 0.3s;
  transform: scale(1.1, 1.1);
}

.pick_auto {
  height: 100%;
}

.fast_pick {
  padding-top: 140px;
  width: 18%;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 70px;
  z-index: 0;
  
}

.fast_pick_title {
  position: absolute;
  top: -90px;
  font-size: 30px;
  font-weight: bold;
  width: 100%;
}
.container .fast_pick {
  display: flex;
  background-color: #eff0f0;
  border-radius: 10px;
  padding: 30px;
}

.container {
  display: flex;
  flex-wrap: nowrap;
}

.marks_auto {
  width: 40%;
  height: 670px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 30px;
}

.title_pick {
  font-size: 24px;
  font-weight: bold;
  margin-top: 35px;
}

.under_range {
  display: flex;
  width: 490px;
  text-align: center;
  margin-left: -10px;
  color: #adadb0;
  font-size: 11px;
  font-weight: bold;
  margin-top: -10px;
  position: relative;
}

.num_null {
  margin-right: 85px;
  margin-left: 10px;
}

.num_500 {
  margin-right: 25px;
}

.num_800 {
  margin-right: 23px;
}

.num_1m {
  margin-right: 25px;
}

.num_14m {
  margin-right: 25px;
}

.num_17m {
  margin-right: 30px;
}

.num_2m {
  margin-right: 20px;
}

.num_23m {
  margin-right: 25px;
}

.num_27m {
  margin-right: 30px;
}

.num_3m {
  margin-right: 13px;
}

.price {
  display: flex;
  width: 200px;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
}

.title_price {
  font-weight: normal;
  width: 200px;
  padding-top: 10px;
}

.filter_pick {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;
  position: relative;
}

.type_kuzov {
  width: 90%;
  height: 50px;
  background-color: white;
  border: #e1e1e1 1px solid;
  border-radius: 5px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  padding-left: 20px;
  align-items: center;
  display: flex;
  transition: 0.3s;
  margin-bottom: 10px;
}

.type_box_item {
  width: 212px;
  height: 50px;
}

.type_box {
  width: 90%;
  height: 50px;
  background-color: white;
  border: #e1e1e1 1px solid;
  border-radius: 5px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  padding-left: 20px;
  align-items: center;
  display: flex;
}

.title_kuzov_full_info {
  width: 97%;
  max-height: 500px;
  border: #e1e1e1 1px solid;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  z-index: 3;
  line-height: 35px;
  list-style-type: none;
  font-size: 18px;
  font-weight: normal;
  background-color: white;
  margin-top: -13px;
  transition: 0.3s;
  opacity: 1;
  display: flex;
}

.title_box_full_info {
  width: 97%;
  max-height: 500px;
  border: #e1e1e1 1px solid;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  z-index: 3;
  line-height: 35px;
  list-style-type: none;
  font-size: 18px;
  font-weight: normal;
  background-color: white;
  margin-top: -13px;
  transition: 0.3s;
  opacity: 1;
}

.test {
  padding-bottom: 50px;
}


.title_kuzov_ul {
  list-style-type: none;
  padding-left: 20px;
  color: #262626;
}

.title_box_ul {
  list-style-type: none;
  padding-left: 20px;
}

.title_box_ul li {
  text-decoration: none;
  color: #262626;
  margin-right: 40px;
}

.title_kuzov_ul li {
  text-decoration: none;
  color: #262626;
}

.title_kuzov_ul li:hover {
  transition: 0.3s;
  border-bottom: 1px solid;
  padding-bottom: 2px;
  cursor: pointer;
}

.title_box_ul li:hover {
  transition: 0.3s;
  border-bottom: 1px solid;
  padding-bottom: 2px;
  cursor: pointer;
}
.box {
  padding: 15px 150px 15px 10px;
  background-color: white;
  border: #e1e1e1 1px solid;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
}

.kuzov_pick_checkbox:checked + .type_kuzov::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
}

.box_pick_checkbox {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}

.box_pick_checkbox:checked + .type_box::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
}

.kuzov_pick_checkbox {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}

.type_kuzov::after {
  position: absolute;
  content: "";
  background: url(@/assets/icon/Vector.svg);
  width: 12px;
  height: 8px;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}

.type_box::after {
  position: absolute;
  content: "";
  background: url(@/assets/icon/Vector.svg);
  width: 12px;
  height: 8px;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}

.box::after {
  position: absolute;
  content: "";
  background: url(@/assets/icon/Vector.svg);
  width: 12px;
  height: 8px;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
}

.box_title:hover .box::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
}

.show_result {
  width: 270px;
  height: 60px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: #ca0100;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  z-index: 3;
  transition: 0.3s;
}

.auto_item {
  display: flex;
  margin-top: 8px;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  padding-left: 2px;
  padding-right: 2px;
  transition: 0.3s;
}

.auto_item:hover {
  transition: 0.3s;
  box-shadow: 0px 1px 5px black;
  border-radius: 10px;
}
.logo_auto {
  width: 30px;
  height: 29px;
  margin-right: 17px;
}

.name_auto {
  font-size: 16px;
}
.pick {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
  box-shadow: 0px 1px 5px black;
  border-radius: 10px;
}

.text_red {
  font-size: 12px;
  color: red;
  position: absolute;
  right: 10px;
  z-index: 99999;
}
.new_postition {
  position: absolute;
  right: 45px;
  bottom: 285px;
}

.show_result:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
</style>
