<template>
  <div class="more_equipment">
    <div class="container">
      <div class="more_equipment_title">Доступные комплектации</div>
      <div class="subtitle_cars_in_stock text_aling_c">
        {{ autoCartInfo.title }} (Model:{{ autoCartInfo.model }})<span
          class="red cars_stock_red"
        >
          -25%
        </span>
      </div>
      <div class="cars_in_stock_filter">
        <div class="head_type_filters">
          <div class="equipment">Комлектация</div>
        </div>
        <div class="head_type_filters">
          <div class="engine">Двигатель</div>
        </div>
        <div class="head_type_filters">
          <div class="transmission">Коробка передач</div>
        </div>
        <div class="head_type_filters new_position_for_price_drive">
          <div class="drive">Привод</div>
        </div>
        <div class="head_type_filters">
          <div class="price_filter new_position_for_price_filter">Цена</div>
        </div>
        <div class="head_type_filters">
          <div class="price_with_action_filter new_position_for_price">
            Со скидкой
          </div>
        </div>
      </div>
      <div v-for="equipment in autoCartInfo.equipment" :key="equipment.id">
        <div class="car_in_stock_items" @click="openEquipment(equipment)">
          <div class="car_in_stock_item" :class="{ border: !equipment.isOpen }">
            <div class="item_equipment">
              {{ equipment.engine }} {{ equipment.title }}
              <span class="red cars_stock_red"> -25% </span>
            </div>
            <div class="item_engine">
              {{ equipment.engine }} -
              {{ Math.ceil(autoCartInfo.characters.power * equipment.engine) }}
              л.с.
            </div>
            <div class="item_transmission">
              {{ equipment.box }}
            </div>
            <div class="item_drive new_position_for_price_drive">
              {{ equipment.wd }}
            </div>
            <div class="item_price new_position_for_price_filter">
              <del
                >{{ Math.ceil(autoCartInfo.price * equipment.engine) }} ₽</del
              >
            </div>
            <div class="new_position_for_price">
              <b
                >{{
                  Math.ceil(autoCartInfo.price * equipment.engine - 300000)
                }}
                ₽</b
              >
            </div>
          </div>
        </div>
        <div
          class="car_in_stock_item_inner"
          v-if="equipment.isOpen"
          :class="{ border: equipment.isOpen }"
        >
          <div class="item_inner_equipment">
            <div class="icons_fav_tubs_equipment">
              <div class="icon_hearth"></div>
              <div class="icon_tubs"></div>
            </div>
            <img
              class="img_equipment"
              src="@/assets/img_car_type/item_tayota_equipmetn.svg"
              alt=""
            />
            <div class="benefit_equipment">Выгода 300 000 ₽</div>
          </div>

          <div class="item_inner_info_car">
            <div class="car_stock_name">{{ autoCartInfo.title }}</div>
            <div class="stock_in_pts">В наличии с ПТС</div>
            <div class="stock_quantity">В наличии: <b>1 авто</b></div>
            <div class="stock_quantity">Доступна в <b>10 цветах</b></div>
          </div>

          <div class="specification_car_in_stock_left">
            <div class="specification_item">
              <img src="@/assets/icon/horse.svg" alt="" srcset="" />
              <span>
                {{
                  Math.ceil(autoCartInfo.characters.power * equipment.engine)
                }}
                л.с
              </span>
            </div>
            <div class="specification_item">
              <img src="@/assets/icon/oil.svg" alt="" srcset="" />
              <span
                >{{
                  Math.ceil(autoCartInfo.characters.oil * equipment.engine)
                }}
                л/км</span
              >
            </div>
          </div>
          <div class="specification_car_in_stock_right">
            <div class="specification_item">
              <img src="@/assets/icon/speed.svg" alt="" srcset="" />
              <span
                >{{
                  Math.ceil(autoCartInfo.characters.speed * equipment.engine)
                }}
                км/ч</span
              >
            </div>
            <div class="specification_item">
              <img src="@/assets/icon/fasters.svg" alt="" srcset="" />
              <span
                >{{
                  Math.ceil(autoCartInfo.characters.drive / equipment.engine)
                }}
                c.</span
              >
            </div>
          </div>

          <div class="full_info_specification" @click="openFullInfo(equipment)">
            <img src="@/assets/img_car_type/list_icon.svg" alt="" />
            <div class="title_full_info">Полное описание</div>
            <div class="for_full_info_vector">
              <img
                class="full_info_vector"
                src="@/assets/img_car_type/pointing_white.svg"
                alt=""
              />
            </div>
          </div>

          <div class="right_item_innet_car_stock">
            <div class="gifts">
              <div class="gift">
                <button class="gift_btn bg_black">
                  <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
                </button>
                <div class="gift_text">
                  Страхование <span class="red_text">в подарок</span>
                </div>
              </div>

              <div class="gift">
                <button class="gift_btn bg_red">
                  <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
                </button>
                <div class="gift_text">
                  Оборудование <span class="red_text">в подарок</span>
                </div>
              </div>
              <div class="gift">
                <button class="gift_btn bg_grey">
                  <img src="@/assets/icon/free_gift.svg" alt="" srcset="" />
                </button>
                <div class="gift_text">
                  Комплект резины <span class="red_text">в подарок</span>
                </div>
              </div>
            </div>
          </div>

          <div class="price_item_inner_stock">
            <span class="now_price"
              >{{ Math.ceil(autoCartInfo.price * equipment.engine) }} ₽</span
            >
            <br />
            <span class="old_price"
              >{{ Math.ceil(autoCartInfo.price * equipment.engine - 300000) }} ₽
            </span>
          </div>
          <span class="credit_price"
            >Кредит <br />
            от
            {{ Math.ceil((autoCartInfo.price * equipment.engine) / 180) }}
            ₽/мес</span
          >
          <div class="btn_item_car_stock">
            <button @click="openCreditPopup" class="reserve">Кредит онлайн</button>
            <router-link to="/auto_cart">
              <button
                @click="goToBuyAuto(autoCartInfo, equipment)"
                class="bought"
              >
                Купить
              </button></router-link
            >
          </div>
        </div>
        <div class="full_info_inner" v-if="equipment.fullInfo">
          <div class="full_info_security">
            <div class="security_title">Безопаность</div>
            <li>
              <span class="li_text">Запасное колесо неполноразмерное</span>
            </li>
            <li><span class="li_text">Передние тормоза: Дисковые</span></li>
            <li><span class="li_text">Задние тормоза: Барабанные</span></li>
            <li><span class="li_text">Задние колеса: 175/65R14</span></li>
            <li><span class="li_text">Передние колеса: 175/65R14</span></li>
            <li><span class="li_text">Передний стабилизатор</span></li>
            <li>
              <span class="li_text"
                >Передняя подвеска: Независимая, амортизационная стойка типа
                МакФерсон</span
              >
            </li>
          </div>
          <div class="full_info_security">
            <div class="security_title">Экстерьер</div>
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
            <li>
              <span class="li_text">Система контроля давления в шинах </span>
            </li>
            <li>
              <span class="li_text">Подушка безопасности водительская</span>
            </li>
          </div>
          <div class="full_info_security">
            <div class="security_title">Интерьер</div>
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
</template>

<script>
export default {
  name: "moreComplections",
  props: {
    autoCartInfo: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      border: true,
    };
  },
  methods: {
    goToBuyAuto(autoCart, equipment) {
      this.$emit("goToBuyAuto", autoCart, equipment);
    },
    openEquipment(e) {
      e.isOpen = !e.isOpen;
      if (e.isOpen === false) {
        e.fullInfo = false;
      }
    },
    openFullInfo(e) {
      e.fullInfo = !e.fullInfo;
    },
    openCreditPopup() {
      this.$emit('openCreditPopup')
    },
  },
};
</script>

<style scoped>
.car_in_stock_item:hover {
  transition: 0.3s;
  box-shadow: 0px 1px 5px gray;
}

.more_equipment_title {
  font-size: 40px;
  font-weight: bold;
  color: #262626;
  text-align: center;
}

.more_equipment {
  margin-bottom: 100px;
}

.text_aling_c {
  text-align: center;
  display: block;
}
.subtitle_cars_in_stock {
  display: flex;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  margin-top: 80px;
}

.cars_stock_red {
  padding: 2px 10px 2px 10px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: normal;
}

.red {
  background-color: #ca0100;
  color: white;
  padding: 0px 2px 0px 4px;
  border-radius: 10px;
  margin-right: 5px;
  transition: 0.3s;
}

.cars_in_stock_filter {
  position: relative;
  display: flex;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: bold;
  color: #737373;
}

.head_type_filters {
  cursor: pointer;
}

.equipment::after {
  display: block;
  content: "";
  background: url(@/assets/img_car_type/pointing_filter.svg);
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right: -20%;
  transform: translateY(-50%);
}

.equipment {
  position: absolute;
}

.engine {
  position: absolute;
  left: 25%;
}

.engine::after {
  display: block;
  content: "";
  background: url(@/assets/img_car_type/pointing_filter.svg);
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right: -20%;
  transform: translateY(-50%);
}

.drive {
  position: absolute;
  left: 55%;
}

.drive::after {
  display: block;
  content: "";
  background: url(@/assets/img_car_type/pointing_filter.svg);
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right: -30%;
  transform: translateY(-50%);
}
.transmission {
  position: absolute;
  left: 40%;
}

.transmission::after {
  display: block;
  content: "";
  background: url(@/assets/img_car_type/pointing_filter.svg);
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right: -20%;
  transform: translateY(-50%);
}

.new_position_for_price_drive {
  position: absolute;
  left: 60%;
}

.price_filter {
  position: absolute;
  left: 70%;
}

.new_position_for_price_filter {
  position: absolute;
  left: 75%;
}

.price_filter::after {
  display: block;
  content: "";
  background: url(@/assets/img_car_type/pointing_filter.svg);
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right: -35%;
  transform: translateY(-50%);
}

.price_with_action_filter {
  position: absolute;
  left: 75%;
}

.price_with_action_filter::after {
  display: block;
  content: "";
  background: url(@/assets/img_car_type/pointing_filter.svg);
  width: 7px;
  height: 7px;
  position: absolute;
  top: 50%;
  right: -20%;
  transform: translateY(-50%);
}

.new_position_for_price {
  position: absolute;
  left: 90%;
}

.car_in_stock_items {
  position: relative;
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
  cursor: pointer;
}

.car_in_stock_item {
  display: flex;
  padding: 30px 30px 30px 30px;
  background-color: #eff0f0;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid #73737356;
  border-bottom: none;
  cursor: pointer;
}

.item_equipment {
  font-weight: bold;
  font-size: 18px;
}

.item_engine {
  position: absolute;
  left: 25%;
  font-size: 16px;
  font-weight: normal;
}

.item_transmission {
  position: absolute;
  left: 40%;
  font-size: 16px;
  font-weight: normal;
}

.item_drive {
  position: absolute;
  left: 55%;
  font-size: 16px;
  font-weight: normal;
}

.item_price {
  position: absolute;
  left: 67%;
  font-size: 16px;
  font-weight: normal;
  color: #737373;
}

.item_price_with_action_filter {
  position: absolute;
  left: 75%;
  font-weight: bold;
}

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
  left: 75%;
  top: 30%;
  transform: translateY(-50%);
  text-align: right;
}
.credit_price {
  position: absolute;
  font-weight: bold;
  font-size: 14px;
  color: #737373;
  left: 76%;
  bottom: 25%;
  text-align: right;
}

.reserve {
  width: 120px;
}

.li_text {
  color: #262626;
}

.security_title {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  color: #262626;
  text-align: left;
}

.full_info_security {
  width: 30%;
  line-height: 30px;
  margin-left: 20px;
}
.full_info_inner {
  background: #eff0f0;
  border: 1px solid #73737356;
  border-top: none;
  margin-top: -25px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.border {
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.281);
}
</style>
