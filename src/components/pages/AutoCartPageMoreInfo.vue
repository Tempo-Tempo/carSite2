<template>
  <div class="technical_specification">
    <div class="container">
      <div class="technical_specification_title" @click="test(autoCartInfo)">
        Технические характеристики {{ autoCartInfo.title }} (Model:
        {{ autoCartInfo.model }})
      </div>
      <div class="techical_specification_head">
        <div class="car_techical_inner">
          <img
            class="car_front_img"
            src="@/assets/img_car_type/car_front.svg"
            alt=""
          />
          <img
            class="line_front_car"
            src="@/assets/img_car_type/vector_car_front.svg"
            alt=""
          />
          <div class="front_car_num">{{ autoCartInfo.proportions.length }}</div>
        </div>
        <div class="car_techical_inner">
          <span class="car_behind_img"
            ><img src="@/assets/img_car_type/car_behind.svg" alt=""
          /></span>
          <span class="line_behind_car"
            ><img src="@/assets/img_car_type/vector_car_behind.svg" alt=""
          /></span>
          <span class="behind_car_num">{{
            autoCartInfo.proportions.width
          }}</span>
        </div>
        <div class="car_techical_inner">
          <span class="car_face_img"
            ><img src="@/assets/img_car_type/car_face.svg" alt=""
          /></span>
          <span class="line_face_car"
            ><img src="@/assets/img_car_type/vector_car_face.svg" alt=""
          /></span>
          <span class="face_car_num">{{ autoCartInfo.proportions.width }}</span>
          <span class="line_face_car_vertical"
            ><img src="@/assets/img_car_type/vector_car_face2.svg" alt=""
          /></span>
          <span class="face_car_num_vertical">{{
            autoCartInfo.proportions.height
          }}</span>
        </div>
        <div class="car_techical_info_size">
          <div class="car_technical_inner">
            <div class="technical_text">Длина кузова, мм</div>
            <div class="technical_text">Шириина кузова, мм</div>
            <div class="technical_text">Высота кузова, мм</div>
            <div class="technical_text">Колесная база, мм</div>
            <div class="technical_text">Дорожный просвет, мм</div>
          </div>
          <div class="car_technical_size">
            <div class="car_num_size">
              {{ autoCartInfo.proportions.length }}
            </div>
            <div class="car_num_size">{{ autoCartInfo.proportions.width }}</div>
            <div class="car_num_size">
              {{ autoCartInfo.proportions.height }}
            </div>
            <div class="car_num_size">
              {{ autoCartInfo.proportions.wheelBase }}
            </div>
            <div class="car_num_size">
              {{ autoCartInfo.proportions.clearance }}
            </div>
          </div>
        </div>
      </div>

      <div class="details_info_for_equipment">
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Двигатель</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Трансмиссия</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Рулевое управление</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Подвеска</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Масса</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Кузов</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
        <details class="add_info_of_equipment">
          <summary class="title_info_of_equipment">Динамика</summary>
          <div class="inner_info_of_equipment">
            <div class="text_info_of_equipment">
              <div>Рабочий объем</div>
              <div>Диаметр цилиндра / Ход поршня</div>
              <div>Степень сжатия</div>
              <div>Максимальная мощность</div>
              <div>Максимальный крутящий момент</div>
            </div>
            <div class="num_info_of_equipment">
              <div>1368 см3</div>
              <div>72.0 / 84.0 мм</div>
              <div>10.5</div>
              <div>100 л.с. (73.3 кВт) при 6000 об/мин</div>
              <div>132 Н*м при 4000 об/мин</div>
            </div>
          </div>
        </details>
      </div>

      <!-- <button class="see_more">Показать еще</button> -->
    </div>
  </div>
  <moreComplections :autoCartInfo="autoCartInfo" @goToBuyAuto="goToBuyAuto" @openCreditPopup="openCreditPopup"></moreComplections>
  <div class="again_buisness_women h441">
    <div class="container">
      <div class="again_buisness_women_offer">
        <img
          class="again_bg_women"
          src="@/assets/img_car_type/again_buisness_women.svg"
          alt=""
        />
        <img
          class="bg_buissnes_women"
          src="@/assets/img_car_type/again_bg_women.svg"
          alt=""
        />

        <div class="title_again_buisness_women">
          Получите спецпредложение <br />
          с максимальной скидкой!
        </div>
        <div class="subtitle_again_buisness_women">
          Воспользуйтесь спецпредложением, которое откроет Вам простой путь
          покупки автомобиля с максимальной <br />
          скидкой, а также упростит оформление всех документов за 1 день
        </div>
      </div>
      <div class="accept_callback_again_buisness_women">
       <forOffersForm :startCheck="startCheck"></forOffersForm>
          <button @click="accpetOffer" class="btn_callback">Обратный звонок</button>
        
        <!-- <div class="warning_callback">
          Нажимая кнопку <b>«Получить предложение»</b>, Вы соглашаетесь с
          <u>политикой конфиденциальности <br /> </u> и
          <u>правилами обработки персональных данных</u>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    autoCartInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      border: true,
      startCheck: false,
    };
  },
  methods: {
    goToBuyAuto(autoCart, equipment) {
      this.$emit('goToBuyAuto', autoCart, equipment)
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
    accpetOffer() {
      this.startCheck = !this.startCheck;
    
    },
    openCreditPopup() {
      this.$emit('openCreditPopup')
    },
  },
};
</script>

<style scoped>
.full_info_offer {
  width: 32%;
  position: relative;
  background-color: #eff0f0;
  border-radius: 30px;
  height: 175px;
}

.full_info_offer_img {
  position: absolute;
  bottom: 0%;
  left: 3%;
}

.full_info_offer_title {
  position: absolute;
  right: 27%;
  top: 12%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  transform: translateX(50%);
  width: 300px;
}

.full_info_offers {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.h441 {
  height: 441px;
}
.warning_callback {
  font-size: 14px;
  font-weight: normal;
  color: #595d60;
}

.btn_callback {
  width: 270px;
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
  position: absolute;
  left: 90%;
  top: 0%;
}

.btn_callback:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
.accept_callback_name {
  width: 250px;
  height: 35px;
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
  height: 35px;
  outline: none;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: normal;
  color: #262626;
  margin-right: 20px;
}
.bg_buissnes_women {
  height: 100%;
  z-index: -1;
  width: 100%;
}
.again_bg_women {
  position: absolute;
  right: 12%;
  top: -7.2%;
  height: 441px;
}
.title_again_buisness_women {
  position: absolute;
  font-size: 37px;
  font-weight: bold;
  top: 15%;
  margin-left: 90px;
}

.subtitle_again_buisness_women {
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  top: 45%;
  margin-left: 90px;
}

.accept_callback_again_buisness_women {
  position: absolute;
  bottom: 10%;
  left: 15%;
  width: 600px;
}

.again_buisness_women {
  margin-bottom: 100px;
}
.again_buisness_women .container {
  position: relative;
  margin-top: 100px;
}
.again_buisness_women_offer {
  height: 411px;
  box-shadow: 1px 1px 5px gray;
  width: 100%;
  border-radius: 25px;
}
.again_buisness_women {
  margin-bottom: 100px;
}

.see_more {
  width: 270px;
  height: 65px;

  display: block;
  margin: auto;
  border: none;
  margin-bottom: 70px;
  background-color: #ca0100;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
}

.see_more:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
.techical_specification .container .see_more {
  text-align: center;
  align-items: center;
}
.num_info_of_equipment {
  line-height: 45px;
}

.text_info_of_equipment {
  font-weight: bold;
  line-height: 45px;
  margin-right: 100px;
}
.inner_info_of_equipment {
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border-bottom: 1px solid #e1e1e1;
}
.title_info_of_equipment {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #e1e1e1;
  position: relative;
}
.title_info_of_equipment::after {
  display: block;
  position: absolute;
  transition: 0.3s;
  content: "";
  right: 2%;
  top: 50%;
  width: 18px;
  height: 10.3px;
  background: url(@/assets/img_car_type/vector_for_details.svg);
}

.add_info_of_equipment[open] .title_info_of_equipment::after {
  transition: 0.3s;
  display: block;
  position: absolute;
  content: "";
  right: 2%;
  width: 18px;
  height: 10.3px;
  background: url(@/assets/img_car_type/vector_for_details.svg);
  transform: rotate(180deg);
}
.details_info_for_equipment {
  margin-bottom: 100px;
  cursor: pointer;
}

.technical_specification_title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 70px;
  margin-top: 80px;
}

.car_techical_info_size {
  width: 320px;
  height: 190px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 50px 30px 50px 30px;
  display: flex;
  justify-content: space-between;
}

.car_technical_size {
  line-height: 39px;
  font-size: 16px;
  font-weight: bold;
}

.car_technical_inner {
  line-height: 39px;
  font-size: 16px;
  font-weight: normal;
}

.line_face_car {
  position: absolute;
  bottom: 15%;
  left: 40%;
  transform: translateX(-50%);
}

.car_face_img {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}
.line_face_car_vertical {
  position: absolute;
  right: 35%;
  top: 49%;
  transform: translateY(-50%);
}

.front_car_num {
  position: absolute;
  bottom: 5%;
  left: 45%;
  transform: translateX(-50%);
}

.techical_specification_head {
  display: flex;
  margin-bottom: 70px;
  justify-content: space-between;
}

.face_car_num {
  position: absolute;
  bottom: 5%;
  left: 40%;
  transform: translateX(-50%);
}

.face_car_num_vertical {
  position: absolute;
  right: 25%;
  top: 49%;
  transform: translateY(-50%);
}

.behind_car_num {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}
.car_techical_inner {
  display: inline-block;
  position: relative;
  width: 25%;
}

.car_front_img {
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
}

.line_front_car {
  position: absolute;
  bottom: 15%;
  left: 0%;
}

.car_behind_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line_behind_car {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
