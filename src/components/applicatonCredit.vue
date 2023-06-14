<template>
  <div class="application_credit" @click="outsideClose">
    <div class="application_title">Заявка на автокредит</div>
    <div class="container">
      <div class="filter_app">
        <div class="type_auto">
          <label v-for="aplicItem in applicatonItems" :key="aplicItem.id">
            <input
              :checked="this.openAndClose.marks"
              class="title_type_vec_input"
              type="checkbox"
              name=""
              id="vec_mark_input"
            />
            <div
              class="title_type marks_open_type"
              @click.stop="openAndClose.marks = !openAndClose.marks"
            >
              <span class="alert_mark_error new_closed">Выберите марку!</span>

              <div class="title_type_vec marks_vec_type">
                {{ aplicItem.title }}
              </div>

              <div
                class="marks_vec title_marks_info"
                :class="{ new_closed: !openAndClose.marks }"
              >
                <ul class="title_mark_ul">
                  <li
                    v-for="marksItem in applicatonItems[0].marksItems"
                    :key="marksItem.id"
                  >
                    <a
                      class="type_mark_item"
                      @click.stop="handlerMark(marksItem)"
                      >{{ marksItem.name }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </label>
          <label
            :class="{ vision: !openAndClose.error }"
            v-for="aplicItem in modelItems"
            :key="aplicItem.id"
          >
            <input
              :checked="this.openAndClose.model"
              class="title_type_vec_input"
              type="checkbox"
              name=""
              id="vec_mark_input"
            />
            <div
              class="title_type marks_open_type"
              @click.stop="openAndClose.model = !openAndClose.model"
            >
              <span class="alert_mark_error new_closed">Выберите марку!</span>

              <div class="title_type_vec marks_vec_type">
                {{ aplicItem.title }}
              </div>

              <div
                class="marks_vec title_marks_info"
                :class="{ new_closed: !openAndClose.model }"
              >
                <ul class="title_mark_ul">
                  <li
                    v-for="modelItem in modelItems[0].modelItem"
                    :key="modelItem.id"
                  >
                    <a
                      @click.stop="handlerModel(modelItem)"
                      class="type_mark_item"
                      >{{ modelItem }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </label>
          <label
            :class="{ vision: !openAndClose.error }"
            v-for="equipItem in equipItems"
            :key="equipItem.id"
          >
            <input
              :checked="this.openAndClose.equip"
              class="title_type_vec_input"
              type="checkbox"
              name=""
              id="vec_mark_input"
            />
            <div
              class="title_type marks_open_type"
              @click.stop="openAndClose.equip = !openAndClose.equip"
            >
              <span class="alert_mark_error new_closed">Выберите марку!</span>

              <div class="title_type_vec marks_vec_type">
                {{ equipItem.title }}
              </div>

              <div
                class="marks_vec title_marks_info"
                :class="{ new_closed: !openAndClose.equip }"
              >
                <ul class="title_mark_ul">
                  <li
                    v-for="equipItem in equipItems[0].equipItem"
                    :key="equipItem.id"
                  >
                    <a
                      @click.stop="handlerEquip(equipItem)"
                      class="type_mark_item"
                      >{{ equipItem }}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </label>
        </div>
        <div class="num_contribution">
          <div class="first_contribution">
            <img src="@/assets//img/credit_auto.svg" alt="" />
            <div class="contribution_inner">
              <span class="first_contribution_sum">{{ firstContrib }} ₽</span>
              <span class="first_contribution_sum"
                ><formated-price :anyPrice="firstContrib">
                  <template #currentPrice="test">
                    {{ test.price }}
                  </template>
                </formated-price></span
              >
              <span class="first_contribution_remains"
                >{{ calcFinalSum }} ₽</span
              >
              <span class="first_contribution_remains"
                ><formated-price :anyPrice="finalCalc">
                  <template #currentPrice="test">
                    {{ test.price }}
                  </template>
                </formated-price></span
              >
              <input
                class="contribution_sum_remains_range"
                min="0"
                max="3000000"
                step="1"
                type="range"
                id="result_range_credit"
              />

              <span class="sum_text"
                >Первоначальный <br />
                взнос</span
              >

              <span class="remains_text"
                >Остаток <br />
                по кредиту</span
              >
            </div>
          </div>

          <div class="second_contribution">
            <div class="price">
              <div class="title_price">Сумма кредита, руб</div>
              <div class="min_max_credit">
                <formated-price :anyPrice="priceCredit">
                  <template #currentPrice="test">
                    {{ test.price }}
                  </template>
                </formated-price>
              </div>
            </div>
            <label>
              <input
                v-model="priceCredit"
                class="govno_range"
                type="range"
                min="0"
                max="3000000"
                step="10000"
                list="tickmarks"
                name=""
                id="price_range_offer"
              />

              <div class="under_range">
                <div class="num_null">
                  <div class="linear_range">|</div>
                  <div class="num_range">0</div>
                </div>
                <div class="num_500">
                  <div class="linear_range">|</div>
                  <div class="num_range">250т</div>
                </div>
                <div class="num_800">
                  <div class="linear_range">|</div>
                  <div class="num_range">600т</div>
                </div>
                <div class="num_1m">
                  <div class="linear_range">|</div>
                  <div class="num_range">950т</div>
                </div>
                <div class="num_14m">
                  <div class="linear_range">|</div>
                  <div class="num_range">1,3м</div>
                </div>
                <div class="num_17m">
                  <div class="linear_range">|</div>
                  <div class="num_range">1,65м</div>
                </div>
                <div class="num_2m">
                  <div class="linear_range">|</div>
                  <div class="num_range">2,0м</div>
                </div>
                <div class="num_23m">
                  <div class="linear_range">|</div>
                  <div class="num_range">2,35м</div>
                </div>
                <div class="num_27m">
                  <div class="linear_range">|</div>
                  <div class="num_range">2,7м</div>
                </div>
                <div class="num_3m">
                  <div class="linear_range">|</div>
                  <div class="num_range">3м</div>
                </div>
              </div>
            </label>
            <div class="price">
              <div class="title_price">Срок кредита, мес</div>
              <div class="min_max_month">{{ priceCreditMonth }} мес.</div>
            </div>
            <label>
              <input
                class="govno_range"
                type="range"
                min="0"
                max="84"
                v-model="priceCreditMonth"
                step="1"
                list="tickmarks"
                name=""
                id="month_range"
              />
              <div class="under_range_credit">
                <div class="num_">
                  <div class="num_range">0</div>
                </div>
                <div class="num_">
                  <div class="num_range">8</div>
                </div>
                <div class="num_">
                  <div class="num_range">19</div>
                </div>
                <div class="num_">
                  <div class="num_range">29</div>
                </div>
                <div class="num_">
                  <div class="num_range">40</div>
                </div>
                <div class="num_">
                  <div class="num_range">51</div>
                </div>
                <div class="num_">
                  <div class="num_range">61</div>
                </div>
                <div class="num_">
                  <div class="num_range">72</div>
                </div>
                <div class="num_">
                  <div class="num_range">84</div>
                </div>
              </div>
            </label>

            <div class="first_vznos">
              <div class="title_vznos">
                Первоначальный <br />
                взнос, руб
              </div>

              <input
                v-model="firstContrib"
                class="input_vznos"
                type="text"
                placeholder="0"
                name=""
                id="input_vznos"
              />
              <span
                class="alert_mark_error vzons_error"
                :class="{ new_closed: !checkPrice }"
                >Не должно превышать 50% от суммы кредита.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="take_offers">
        <div class="title_take_offers">
          Получить выгоду <br />
          <span class="text_red">300 000 ₽</span>
        </div>
        <forOffersForm :startCheck="startCheck"> </forOffersForm>
        <button
          type="button"
          class="btn_name_number"
          id="btn_accept_name_number"
          @click="accpetOffer"
        >
          Получить предложение
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  name: "applicatonCredit",
  data() {
    return {
      openAndClose: {
        model: false,
        equip: false,
        marks: false,
        error: false,
      },
      priceCredit: 0,
      priceCreditMonth: 0,
      firstContrib: "",
      finalCalc: 0,
      checkPrice: false,
      startCheck: false,
    };
  },
  props: {
    applicatonItems: {
      type: Array,
      required: true,
    },
    modelItems: {
      type: Array,
      required: true,
    },
    equipItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handlerMark(mark) {
      this.applicatonItems[0].title = mark.name;
      this.modelItems[0].modelItem = [];
      this.equipItems[0].equipItem = [];
      this.openAndClose.error = !this.openAndClose.error;
      for (let [key, value] of Object.entries(mark.model)) {
        this.modelItems[0].modelItem.push(value);
        this.openAndClose.marks = false;
      }
      for (let [key, value] of Object.entries(mark.equip)) {
        this.equipItems[0].equipItem.push(value);
      }
    },
    handlerModel(model) {
      this.modelItems[0].title = model;
      this.openAndClose.model = false;
    },
    handlerEquip(equip) {
      this.equipItems[0].title = equip;
      this.openAndClose.equip = !this.openAndClose.equip;
    },
    outsideClose(out) {
      if (out.target.className !== "title_type_vec_input") {
        this.openAndClose.marks = false;
        this.openAndClose.model = false;
        this.openAndClose.equip = false;
      }
    },
    accpetOffer() {
      this.startCheck = !this.startCheck;
    
    },
  },
  computed: {
    calcFinalSum() {
      this.finalCalc =
        parseInt(this.priceCredit) *
        (parseInt(this.priceCreditMonth) * 0.1 + 1);
      if (this.firstContrib !== "") {
        this.finalCalc = parseInt(this.finalCalc) - parseInt(this.firstContrib);
      }
      return Math.trunc(this.finalCalc);
    },
  },
  watch: {
    firstContrib() {
      if (this.finalCalc / 2 < this.firstContrib) {
        this.checkPrice = !this.checkPrice;
        this.firstContrib = this.firstContrib.slice(0, -1);
      }
      return (this.firstContrib = this.firstContrib.replace(/[^0-9+]/g, ""));
    },
    uNumber() {
      return (this.uNumber = this.uNumber.replace(/[^0-9+]/g, ""));
    },
  },
};
</script>

<style scoped>
.application_credit {
  background-color: #eff0f0;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 5%;
  margin-top: 100px;
  padding-bottom: 5%;
  border-radius: 20px;
  margin-bottom: 5%;
  position: relative;
}

.application_credit .container {
  display: flex;
}

.alert_mark_error {
  position: absolute;
  width: 160px;
  font-size: 13px;
  color: #ca0100;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;
  z-index: 3;
}

.filter_app {
  width: 100%;
  margin-left: -20px;
  margin-left: -20px;
}

.application_title {
  color: #232323;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 6.5%;
}

.type_auto {
  display: flex;
  padding: 20px;
  background-color: #c2c2c4;
  width: 95%;
  justify-content: space-between;
  border-radius: 20px;
  margin-top: 50px;

  position: relative;
}

.type_auto label {
  transition: 0.6s;
}

.title_type {
  font-size: 16px;
  font-weight: normal;
  height: 40px;
  border-radius: 5px;
  width: 290px;
  background-color: #e1e1e1;
  cursor: pointer;
  position: relative;
  z-index: 3;
}

.marks_vec_type {
  margin-left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.vision {
  opacity: 0;
  transform: translateX(-300px);
  transition: 0.6s;
}

.equip_vec {
  margin-left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.model_vec {
  margin-left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.title_type_vec {
  width: 100%;
}
.title_type_vec_input {
  display: none;
}
.title_mark_ul li {
  list-style-type: none;
}

.title_type_vec_input:checked + .title_type::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
}

.title_type::after {
  position: absolute;
  content: "";
  background: url(@/assets/icon/Vector.svg);
  width: 12px;
  height: 8px;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}

.contribution_inner {
  position: relative;
  padding-top: 30px;
  padding-bottom: 40px;
  width: 424px;
  margin-bottom: 20px;
}

.first_contribution {
  margin-right: 130px;
}

.first_contribution_sum {
  position: absolute;
  left: 0%;
  top: 0%;
  padding: 3px 35px 3px 35px;
  background-color: #adadb0;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.first_contribution_remains {
  position: absolute;
  right: 0%;
  top: 0%;
  padding: 3px 35px 3px 35px;
  background-color: #adadb0;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.contribution_sum_remains_range {
  width: 100%;
  height: 5px;
  -webkit-appearance: none;
  background: #e1e1e1;
  border-radius: 5px;
  margin-bottom: 10px;
}

.contribution_sum_remains_range::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.govno_range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background-color: #ca0100;
  border-radius: 50%;
}
.sum_text {
  position: absolute;
  left: 0%;
  bottom: 0%;
  font-size: 16px;
  color: #adadb0;
}

.remains_text {
  position: absolute;
  right: 0%;
  bottom: 0%;
  font-size: 16px;
  color: #adadb0;
}

.num_contribution {
  display: flex;
  margin-top: 50px;
  width: 100%;
}

.second_contribution .price_range {
  background: -webkit-linear-gradient(left, #e1e1e1 100%, #e1e1e1 100%);
  margin-left: 0px;
}

.second_contribution .price_range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  background-color: #e1e1e1;
  border-radius: 50%;
}

.err_num {
  position: absolute;
  right: 7%;
  top: 51%;
  font-size: 13px;
  font-weight: bold;
  color: red;
  transition: 0.6s;
}
.under_range_credit {
  display: flex;
  font-size: 13px;
  max-width: 485px;
  justify-content: space-between;
  margin-top: -7px;
  color: #adadb0;
}

.second_contribution .min_max_credit {
  font-size: 24px;
  font-weight: normal;
}

.first_vznos {
  margin-top: 12%;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.input_vznos {
  padding: 15px 100px 15px 20px;
  outline: none;
  border: 1px #e1e1e1 solid;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  position: relative;
}

.take_offers {
  width: 400px;
  height: 370px;
  margin-left: 30px;

  padding: 40px 30px 40px 30px;
  background-color: white;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0px 1px 3px rgba(128, 128, 128, 0.39);
}

.title_take_offers {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
}

.you_name {
  padding: 15px 350px 15px 20px;
  margin-bottom: 15px;
  border: 1px solid #e1e1e1;
  background-color: #eff0f0;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.title_marks_info {
  width: 287px;
  max-height: 500px;
  border: #e1e1e1 1px solid;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  z-index: -1;
  line-height: 35px;
  list-style-type: none;
  font-size: 16px;
  font-weight: normal;
  background-color: #e1e1e1;
  opacity: 1;
  display: flex;
  margin-left: 0px;
  padding-top: 10px;
  margin-top: 20px;
}

.title_mark_ul a:hover {
  border-bottom: 1px solid #262626;
  transition: 0.3s;
}

.title_mark_ul {
  padding-left: 15px;
}
.you_number {
  padding: 15px 350px 15px 20px;
  margin-bottom: 15px;
  border: 1px solid #e1e1e1;
  background-color: #eff0f0;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.btn_name_number {
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #ca0100;
  color: white;
  cursor: pointer;
  margin-top: 20px;
}

.btn_name_number:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}

.take_offers .footer_offers {
  text-align: center;
  margin-top: 35px;
}

.banks {
  display: flex;

  max-width: 2990px;
  height: 200px;
  overflow: hidden;

  margin-bottom: 100px;
  margin-top: 50px;
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
.item_bank {
  display: flex;
  background-color: #eff0f0;
  padding: 0px 45px 0px 45px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 120px;
  margin-left: 10px;
}

.item_bank:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
  box-shadow: 0px 1px 5px rgb(128, 128, 128);
  cursor: pointer;
}

.under_range {
  display: flex;
  width: 490px;
  text-align: center;
  margin-left: 0px;
  color: #adadb0;
  font-size: 11px;
  font-weight: bold;
  margin-top: -10px;
  position: relative;
  justify-content: space-between;
}
</style>
