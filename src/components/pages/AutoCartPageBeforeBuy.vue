<template>
  <div class="main_info">
    <div class="container">
      <h1 class="main_slider" id="2">
        

        <div class="title_slide_tayota_camry size40">
          {{ purchAuto.auto.title }} "{{ purchAuto.equip.title }}"
        </div>
        <div class="price_tayota_camry">
          <span class="old_price_tayota_camry"
            ><del>{{ purchAuto.auto.price }} ₽</del> <br />
            <span class="new_price_tayota_camry"
              >от {{ purchAuto.auto.price - youDiscount }} ₽</span
            >
          </span>
        </div>
        <span class="benefit">Выгода до 500 000 ₽* </span>
        <div class="bait_icons_tayota_camry">
          <div class="bait_icon_tayota_camry">
            <img
              class="bait_icon_camry"
              src="@/assets//img_car_type/gift_redv2.svg"
              alt=""
            />
            <div class="title_bait_icon">
              Улучшим любое <br />
              предложение
            </div>
          </div>
          <div class="bait_icon_tayota_camry">
            <span class="img_text">0%</span>
            <div class="title_bait_icon">
              Без первончального <br />
              взноса
            </div>
          </div>
          <div class="bait_icon_tayota_camry">
            <img
              class="bait_icon_camry"
              src="@/assets/img_car_type/ruble.svg"
              alt=""
            />
            <span class="title_bait_icon">
              Кредит от 1,9% <br />
              всем
              <br />
            </span>
          </div>
        </div>
        <div class="choose_color tayota_camry_color">
          <div class="name_color">Цвет: Night Black</div>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_blue"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_red"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_grey-white"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_white"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_grey pos_rel"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
              checked
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_grey-dark"
              ><span class="checked_color_dot"></span
            ></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_dark"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="checked_color_dot_custom"></span>
            </span>
            <span class="custom_color_vinous"></span>
          </label>
          <label class="color_car_camry">
            <input
              class="take_color_car"
              type="radio"
              name="take_color_car"
              id=""
            />
            <span class="checked_color_dot">
              <span class="for_brown"></span>
            </span>
            <span class="custom_color_brown"></span>
          </label>
        </div>
        <img class="bg_city" src="@/assets//img/bj_city_gray.svg" alt="" />
        <img
          class="car_type_tayota_camry"
          src="@/assets//img_car_type/tayota_camry.svg"
          alt=""
        />

        <div class="get_special_price">
          <div class="title_special_price">
            Специальные <br />
            предложение при покупке
            <div class="action_speical_price red">Только до 10.10.23</div>
          </div>
          <forOffersForm :startCheck="startCheck"></forOffersForm>
      
          <button @click="accpetOffer" class="accept_offer">
            Оформить заявку
          </button>
        
        </div>
      </h1>
    </div>
  </div>
  <div class="info_complectaion">
    <div class="container">
      <div class="title_equiptment_this_model">
        Что входит в комплектацию "{{ purchAuto.equip.title }}"
      </div>
      <div class="full_info_inner_this_model">
        <div class="full_info_security">
          <div class="security_title">Безопаность</div>
          <div class="list_info_this_model">
            <li>
              <span class="li_text">Запасное колесо неполноразмерное</span>
            </li>
            <li><span class="li_text">Передние тормоза: Дисковые</span></li>
            <li><span class="li_text">Задние тормоза: Барабанные</span></li>
            <li><span class="li_text">Задние колеса: 175/65R14</span></li>
            <li><span class="li_text">Передние колеса: 175/65R14</span></li>
            <li><span class="li_text">Передний стабилизатор</span></li>
          </div>
        </div>
        <div class="full_info_security">
          <div class="security_title">Экстерьер</div>
          <div class="list_info_this_model">
            <li>
              <span class="li_text"
                >Задняя подвеска: Полузависимая, торсионная балка</span
              >
            </li>
            <li><span class="li_text">Иммобилайзер</span></li>
            <li>
              <span class="li_text"
                >Вспомогательная система торможения (BAS)</span
              >
            </li>
            <li>
              <span class="li_text">Антиблокировочная система (ABS)</span>
            </li>
            <li>
              <span class="li_text"
                >Система помощи при старте на подъеме (HAC)</span
              >
            </li>
            <li>
              <span class="li_text"
                >Система электронного контроля устойчивости (ESP)</span
              >
            </li>
          </div>
        </div>
        <div class="full_info_security">
          <div class="security_title">Интерьер</div>
          <div class="list_info_this_model">
            <li>
              <span class="li_text"
                >Подушка безопасности пассажира с функцией
              </span>
            </li>
            <li><span class="li_text">деактивации</span></li>
            <li>
              <span class="li_text"
                >Подушка безопасности переднего пассажира</span
              >
            </li>
            <li><span class="li_text">Дополнительный стоп-сигнал </span></li>
            <li><span class="li_text">ЭРА-ГЛОНАСС</span></li>
            <li><span class="li_text">Крепление ISOFIX</span></li>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="info_discount">
    <div class="container">
      <div class="accept_car_in_stock_offers">
        <div class="accept_car_offer" v-for="offer in offers" :key="offer.id">
          <img
            class="accept_offer_img"
            :src="require('@/assets/img_car_type/' + offer.img)"
            alt=""
          />
          <div class="accept_car_offer_title">
            {{ offer.title }} <br />
            <span class="grey_text">{{ offer.body }}</span>
          </div>
          <div class="minus_percent_car_offer red_text">
            –<span :class="{ red_text: offer.checked }">
              {{ offer.minusPrice }}</span
            >
            ₽
          </div>
          <label>
            <div class="label_mini_check">
              <input
                class="mini_check_offer"
                @click="pickOffer(offer)"
                :checked="offer.checked"
                type="checkbox"
                id=""
              />
              <span class="mini_check_icon" :class="offer.icon"></span>
            </div>
          </label>
        </div>
      </div>
      <div class="max_discount">
        <div class="discount_ur_max">
          <div class="max_discount_title_grey">
            Максимальная скидка <br />
            <span class="subtitle_discount">до 500 000 ₽</span>
          </div>
        </div>
        <div class="disount_ur_now">
          <div class="max_discount_title_red">
            Ваша скидка<br />
            <span class="subtitle_discount_red">{{ youDiscount }} ₽</span>
          </div>
          <button class="fixed_discount_now_btn">Зафикировать условия</button>
        </div>
      </div>
      <div class="water_info">
        <div class="water_title">Заголовок</div>
        <div class="water_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris
          nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus
          sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat
          risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
          vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo,
          bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna,
          in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
          iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra
          faucibus. Phasellus id enim libero.
        </div>
        <div class="water_subtitle">Подзаголовок</div>
        <div class="water_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris
          nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus
          sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat
          risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
          vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo,
          bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna,
          in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
          iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra
          faucibus. Phasellus id enim libero.
        </div>
        <div class="water_subtitle">Подзаголовок</div>
        <div class="water_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris
          nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamus
          sed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat
          risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet
          vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo,
          bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollis magna,
          in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
          iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra
          faucibus. Phasellus id enim libero.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    purchAuto: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      youDiscount: 200000,
      offers: [
        {
          title: "Специальное предложение",
          body: "от представительства",
          minusPrice: 200000,
          img: "minus_percent.svg",
          icon: "percent_minus",
          checked: true,
        },
        {
          title: "Скидка за наличные",
          body: "от ABC Auto",
          minusPrice: 40000,
          img: "money_bg.svg",
          icon: "money",
          checked: false,
        },
        {
          title: "Выгода за Trade-in",
          body: "от представительства",
          minusPrice: 80000,
          img: "trade_bg.svg",
          icon: "trade_in_abc",
          checked: false,
        },
        {
          title: "Выгода за утилизацию",
          body: "от ABC Auto",
          minusPrice: 40000,
          img: "recyling_bg.svg",
          icon: "reclying",
          checked: false,
        },
        {
          title: "Скидка при оформление",
          body: "Авто в кредит 1,9%",
          minusPrice: 60000,
          img: "big_percent.svg",
          icon: "big_percent",
          checked: false,
        },
        {
          title: "Госпрограмма",
          body: "Семейный автомобиль, Первый автомобиль, Работникам медицины, Госпрограмма Trade-in",
          minusPrice: 80000,
          img: "emblem_bg.svg",
          icon: "emblem",
          checked: false,
        },
      ],
     startCheck: false,
    };
  },
  methods: {
    pickOffer(offer) {
      offer.checked = !offer.checked;
      if (offer.checked === true) {
        this.youDiscount += offer.minusPrice;
      } else {
        this.youDiscount -= offer.minusPrice;
      }
    },
    accpetOffer() {
      this.startCheck = !this.startCheck;
    
    },
   
  },
  watch: {
    purchAuto() {},
  },
};
</script>

<style scoped>
.red_text {
  color: #ca0100;
}
.main_slider {
  position: absolute;
  width: 1470px;
  background-color: #eff0f033;
  height: 600px;
  border-radius: 20px;
  margin-top: 50px;
  box-shadow: 0 1px 5px gray;
  transition: all 0.5s;
  opacity: 1;
  z-index: 2;
}

.water_info {
  margin-top: 60px;
  margin-bottom: 80px;
}

.water_title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
}

.water_subtitle {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
}

.water_text {
  font-size: 15px;
  color: #737373;
  font-weight: normal;
}
.max_discount_title_red {
  font-weight: normal;
  font-size: 18px;
  margin-left: 50px;
}

.subtitle_discount_red {
  font-weight: bold;
  font-size: 36px;
}

.fixed_discount_now_btn {
  width: 422px;
  height: 65px;
  margin-right: 30px;
  border: none;
  border-radius: 5px;
  color: #ca0100;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
}

.fixed_discount_now_btn:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
.disount_ur_now {
  width: 60%;
  background-color: #ca0100;
  height: 115px;
  position: relative;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -25px;
}

.subtitle_discount {
  font-weight: bold;
  font-size: 24px;
}
.max_discount {
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 100px;
}

.discount_ur_max {
  width: 45%;
  background-color: #eff0f0;
  height: 115px;
  position: relative;
  border-radius: 20px;
}

.max_discount_title_grey {
  color: #adadb0;
  font-weight: normal;
  font-size: 16px;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}

.label_mini_check .money::after {
  background: url(@/assets/img_car_type/money_gray.svg);
  height: 15px;
}

.label_mini_check .trade_in_abc::after {
  background: url(@/assets/img_car_type/trade_grey.svg);
  width: 18px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
}

.label_mini_check .reclying::after {
  background: url(@/assets/img_car_type/recyling_grey.svg);
  width: 19.2px;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
}

.label_mini_check .big_percent::after {
  background: url(@/assets/img_car_type/percent_grey.svg);
  width: 19px;
  position: absolute;
  top: 50%;
  left: 14.5%;
  transform: translateY(-50%);
}

.label_mini_check .emblem::after {
  background: url(@/assets/img_car_type/emblem_grey.svg);
  width: 20px;
  position: absolute;
  top: 50%;
  left: 13%;
  transform: translateY(-50%);
}
.more_car_offer_info {
  position: absolute;
  right: 5%;
  bottom: 30px;
  border: none;
  cursor: pointer;
  background: none;
  color: #737373;
}

.mini_check_offer {
  -webkit-appearance: none;
  z-index: 2;
  position: relative;
  right: 0%;
  bottom: 0%;
}

.mini_check_offer:checked + .reclying::after {
  background: url(@/assets/img_car_type/recyling_red.svg);
  transform: translate(200%, -50%);
}

.mini_check_offer:checked + .big_percent::after {
  background: url(@/assets/img_car_type/percent_red.svg);
  transform: translate(205%, -50%);
}

.mini_check_offer:checked + .emblem::after {
  background: url(@/assets/img_car_type/emblem_red.svg);
  transform: translate(200%, -50%);
  width: 20px;
}

.mini_check_offer:checked + .money::after {
  transition: 0.3s;
  background: url(@/assets/img_car_type/money_red.svg);
  width: 17px;
  height: 15px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(235%, -50%);
}

.mini_check_offer:checked + .trade_in_abc::after {
  background: url(@/assets/img_car_type/trade_red.svg);
  width: 18px;
  height: 22px;
  transform: translate(215%, -50%);
}

.mini_check_offer:checked + .percent_minus::after {
  transition: 0.3s;
  content: "";
  position: absolute;
  width: 17px;
  height: 18px;
  background: url(@/assets/img_car_type/mini_check_red.svg);
  top: 50%;
  right: 0%;
  transform: translate(228%, -50%);
}

.mini_check_icon::before {
  transition: 0.3s;
  background-color: white;
  content: "";
  display: block;
  position: absolute;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  margin-left: 5px;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
}

.mini_check_icon::after {
  transition: 0.3s;
  display: block;
  content: "";
  width: 17px;
  height: 18px;
  background: url(@/assets/img_car_type/mini_check_gray.svg);
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
}
.mini_check_icon {
  position: relative;
  width: 80px;
  height: 41px;
  background-color: #eff0f0;
  border-radius: 20px;
}
.mini_check_offer:checked + .mini_check_icon {
  transition: 0.3s;
  background-color: #ca0100;
}
.minus_percent_car_offer {
  position: absolute;
  bottom: 11%;
  font-weight: bold;
  font-size: 24px;
  color: #c2c2c4;
}

.mini_check_offer:checked + .mini_check_icon::before {
  transition: 0.3s;
  background-color: white;
  content: "";
  display: block;
  position: absolute;
  width: 31px;
  height: 31px;
  border-radius: 50%;
  margin-left: 44px;
  top: 50%;
  transform: translateY(-50%);
}

.label_mini_check {
  position: absolute;
  right: 5%;
  top: 10%;
  display: flex;
  cursor: pointer;
  z-index: 2;
}

.accept_offer_img {
  position: absolute;
  bottom: 0%;
  right: 20%;
  transform: translateX(-50%);
}
.grey_text {
  font-size: 16px;
  font-weight: normal;
  color: #c2c2c4;
}

.accept_car_in_stock_offers {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}
.li_text {
  color: #262626;
}

.accept_offer_img {
  position: absolute;
  bottom: 0%;
  right: 20%;
  transform: translateX(-50%);
}
.accept_car_offer {
  width: 29%;
  margin-bottom: 30px;
  position: relative;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 1px 5px rgba(128, 128, 128, 0.555);
  height: 170px;
}

.accept_car_offer_title {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  color: #262626;
  text-align: left;
  width: 300px;
}
.title_equiptment_this_model {
  margin-top: 120px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 50px;
}
.list_info_this_model {
  border-top: 1px solid #737373;
  padding: 25px 0px 25px 0px;
  width: 85%;
  border-bottom: 1px solid #737373;
  text-align: left;
}

.security_title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  color: #262626;
  text-align: left;
}
.full_info_inner_this_model {
  display: flex;
  justify-content: space-between;
  color: #ca0100;
  margin-bottom: 50px;
}

.full_info_security {
  width: 100%;
  line-height: 30px;
  margin-left: 10px;
}


.get_special_price {
  display: flex;
  position: absolute;
  justify-content: space-between;
  padding: 20px 30px 20px 30px;
  bottom: -12%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  width: 950px;
  border-radius: 20px;
  box-shadow: 0 1px 5px gray;
  align-items: center;
  z-index: 99999;
}

.title_special_price {
  font-size: 17px;
  font-weight: bold;
  color: #262626;
  width: 400px;
}

.action_speical_price {
  display: block;
  font-size: 12px;
  margin-top: 15px;
  padding: 4px 6px 4px 6px;
  width: fit-content;
}
.main_info {
  width: 100%;
  height: 650px;
}

.bg_city {
  position: absolute;
  z-index: -1;
  right: 0;
}


.arrow_left {
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.arrow_left:hover {
  opacity: 0.5;
}

.arrow_right {
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.size40 {
  font-size: 40px;
}

.arrow_right:hover {
  opacity: 0.5;
}
.car_type_tayota_camry {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
}

.title_slide_tayota_camry {
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  top: 10%;
  left: 7%;
}

.price_tayota_camry {
  position: absolute;
  top: 25%;
  left: 7%;
  line-height: 30px;
}

.old_price_tayota_camry {
  color: #737373;
  font-weight: normal;
  font-size: 20px;
}

.bait_icons_tayota_camry {
  position: absolute;
  top: 45%;
  left: 7%;
}

.new_price_tayota_camry {
  font-size: 36px;
  font-weight: bold;
  color: #262626;
}

.benefit {
  padding: 10px 30px 10px 30px;
  background-color: #ca0100;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  position: absolute;
  top: 27%;
  left: 25%;
}

.img_text {
  font-size: 22px;
  color: #ca0100;
  margin-right: 10px;
}

.bait_icon_tayota_camry {
  display: flex;
  padding: 10px 35px 10px 15px;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.103);
  border-radius: 10px;
}

.bait_icon_camry {
  margin-right: 20px;
}

.tayota_camry_color {
  position: absolute;
  right: 10%;
  top: 12%;
  z-index: 1;
  display: block;
}

.name_color {
  font-weight: normal;
  font-size: 14px;
}

.color_car_camry {
  position: relative;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  height: 10px;
}

.accept_offer {
  color: white;
  background-color: #ca0100;
  border: none;
  border-radius: 10px;
 width: 300px;
 height: 60px;

  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.accept_offer:hover {
  transition: 0.3s;
  transform: scale(1.1, 1.1);
}

.container {
  height: 100%;
}

.model_row_and_price .container {
  margin-bottom: 100px;
}

.title_model_row_and_price {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 75px;
}

.auto_items {
  position: relative;
  margin-bottom: 40px;
  padding: 20px 50px 20px 50px;
  box-shadow: 0 1px 5px gray;
  border-radius: 20px;
}

.model_row_and_price_icon {
  display: flex;
}

.model_row_and_price_icon .icon_hearth {
  margin-right: 10px;
}

.auto_items {
  display: flex;
  justify-content: space-between;
  height: 180px;
}

.left_auto_item {
  position: relative;
  width: 45%;
}

.model_row_and_price_icon {
  position: absolute;
  left: 0%;
  top: 0%;
}

.new_corolla {
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
}

.choose_color {
  position: absolute;
  bottom: 0%;
  display: flex;
}

.checkbox {
  display: flex;
}

.auto_info {
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
}

.right_auto_item {
  display: flex;
  width: 45%;
  position: relative;
}

.right_auto_item .gifts {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);
}

.price_with_action {
  display: block;
  position: absolute;
  bottom: 10%;
  right: 10%;
}

.white_color::after {
  display: block;
  content: "";
  width: 13px;
  height: 13px;
  background-color: white;
  border: 1px solid #eff0f0;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 7px;
}

.choose_color_dot:checked + .white_color::after {
  transform: scale(1.2, 1.2);
}

.take_color_car:checked + .checked_color_dot {
  transition: 0.5s;
  opacity: 1;
}

.checked_color_dot {
  position: relative;
  z-index: 2;
}

.checked_color_dot_custom::after {
  display: block;
  content: "";
  position: absolute;
  top: 25%;
  left: 5px;
  width: 17px;
  height: 17px;
  background-color: brown;
  border: 1px solid white;
  border-radius: 50%;
  transform: translate(-70%, -70%);
  z-index: -2;
}
.custom_color_blue::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #0481c7;
}

.custom_color_red::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff0000;
}

.custom_color_grey-white::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e1e1e1;
}

.custom_color_white::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
}

.custom_color_grey::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c4c4c4;
}

.custom_color_grey-dark::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #6a6a6a;
}

.custom_color_dark::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #262626;
}

.custom_color_vinous::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #a02323;
}

.custom_color_brown::after {
  display: block;
  position: absolute;
  top: 30%;
  left: 0px;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #625a55;
}

.checked_color_dot_custom::before {
  display: block;
  content: "";
  position: absolute;
  top: 30%;
  left: 6px;
  width: 10px;
  height: 11px;
  background: url(@/assets/img_car_type/check_color.svg);
  z-index: 1;
  transform: translate(-90%, -90%);
}
.checked_color_dot {
  opacity: 0;
}
</style>
