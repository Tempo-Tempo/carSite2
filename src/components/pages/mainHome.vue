<template>
  <div class="overflow">
    <formForOffers
      :modalIsOpen="modalIsOpen"
      @modalIsClose="modelOpenOrClose"
    />
    <button @click="scrolltoItem('header')" class="siteUp">
      <img src="@/assets/icon/free-icon-up-arrow.png" alt="" />
    </button>
    <div ref="header" class="test">
      <!-- <headerInfo />
       <headerNavigation
         @fastPick="scrolltoItem"
         @aboutCompany="scrolltoItem"
         @techCenter="scrolltoItem"
         @rewviews="scrolltoItem"
         @contacts="scrolltoItem"
         @featBack="modelOpenOrClose"
         :leftMenu="leftMenu"
         
       /> -->
      <!-- <categoriesInfo
         :favoritesNum="favoritesItems.length"
         :comprasionNum="comprasionItems.length"
         :categoriesFull="categoriesFull"
       /> -->
      <mainSlider :checkBoxItems="checkBoxItems" :sliderItems="sliderItems" />

      <div ref="fastPick" class="test">
        <quickSelection
          @pickBody="pickBody"
          @pickBox="pickBox"
          @filterPrice="filterPrice"
          @pickItemMark="pickItemMark"
          @carFavoriteRemove="removeFavorite"
          @carFavoriteAdd="addFavorite"
          @carComprasionRemove="removeCompres"
          @moreInfo="moreInfo"
          @goToBuyAuto="goToBuyAuto"
          @openCreditPopup="openCreditPopup"
          :autousCart="autousCart"
          :filterCate="filterCate"
          :letsGoSort="letsGoSort"
          :handlerCar="handlerCar"
          :quickFilterItems="quickFilterItems"
          :quickFilterItemsBox="quickFilterItemsBox"
          :quickSelectionItems="quickSelectionItems"
        >
        </quickSelection>
      </div>

      <recommendations :recItems="recItems" />
      <offerMe> </offerMe>
      <specialOffer :offerItems="offerItems" />
    </div>
    <applicatonCredit
      :equipItems="equipItems"
      :modelItems="modelItems"
      :applicatonItems="applicatonItems"
    />
    <banksPartners :banksPartners="banksPartners" />
    <trustedPart :feedbacks="feedbacks" />

    <div ref="rewviews">
      <reviews :reviewsItems="reviewsItems" />
    </div>
    <div ref="aboutCompany">
      <aboutCompany></aboutCompany>
    </div>
    <meBlog :printDate="printDate" :blogItems="blogItems" />
    <infoCardeal :infoCardealItems="infoCardealItems" />
    <div ref="techCenter">
     
    </div>
    <div ref="contacts">
      <firstFooter @click="test"> </firstFooter>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainHome",
  data() {
    return {
      sliderItems: [
        {
          titleAction: "Осталось всего 10 авто!",
          titleSlide: "Грандиозная распродажа тестового парка!",
          textSlide: "Узнай свою цену!",
          imgRapid: "rapid-entry-AVN_1.svg",
          imgRio: "rio_new_1.svg",
          imgRaw: "rav_new.svg",
          bgImg: "bj_city_gray.svg",
          id: 1,
        },
        {
          titleAction: "Осталось всего 10 авто!",
          titleSlide: "Грандиозная распродажа тестового парка!",
          textSlide: "Узнай свою цену!",
          imgRapid: "rapid-entry-AVN_1.svg",
          imgRio: "rio_new_1.svg",
          imgRaw: "rav_new.svg",
          bgImg: "bj_city_gray.svg",
          id: 2,
        },
        {
          titleAction: "Осталось всего 10 авто!",
          titleSlide: "Грандиозная распродажа тестового парка!",
          textSlide: "Узнай свою цену!",
          imgRapid: "rapid-entry-AVN_1.svg",
          imgRio: "rio_new_1.svg",
          imgRaw: "rav_new.svg",
          bgImg: "bj_city_gray.svg",
          id: 3,
        },
        {
          titleAction: "Осталось всего 10 авто!",
          titleSlide: "Грандиозная распродажа тестового парка!",
          textSlide: "Узнай свою цену!",
          imgRapid: "rapid-entry-AVN_1.svg",
          imgRio: "rio_new_1.svg",
          imgRaw: "rav_new.svg",
          bgImg: "bj_city_gray.svg",
          id: 4,
        },
        {
          titleAction: "Осталось всего 10 авто!",
          titleSlide: "Грандиозная распродажа тестового парка!",
          textSlide: "Узнай свою цену!",
          imgRapid: "rapid-entry-AVN_1.svg",
          imgRio: "rio_new_1.svg",
          imgRaw: "rav_new.svg",
          bgImg: "bj_city_gray.svg",
          id: 5,
        },
      ],
      checkBoxItems: [
        {
          id: 1,
          checked: true,
        },
        {
          id: 2,
          checked: false,
        },
        {
          id: 3,
          checked: false,
        },
        {
          id: 4,
          checked: false,
        },
        {
          id: 5,
          checked: false,
        },
      ],
      quickSelectionItems: [
        {
          title: "Kia",
          bodyType: "of_road",
          boxType: "boxMech",
          price: 2000000,
          img: "kia.svg",
          pick: false,
        },
        {
          title: "Briliance",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 3000000,
          img: "brilia.svg",
          pick: false,
        },
        {
          title: "Citroen",
          bodyType: "hatchback",
          boxType: "boxRobo",
          price: 1000000,
          img: "citroen.svg",
          pick: false,
        },
        {
          title: "Ford",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 2000000,
          img: "ford.svg",
          pick: false,
        },
        {
          title: "Lifan",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 3000000,
          img: "Lifan.svg",
          pick: false,
        },
        {
          title: "Peugout",
          bodyType: "crossover",
          boxType: "boxMech",
          price: 1000000,
          img: "Pegout.svg",
          pick: false,
        },
        {
          title: "Uaz",
          bodyType: "of_road",
          boxType: "boxMech",
          price: 3000000,
          img: "uaz.svg",
          pick: false,
        },
        {
          title: "Hyundai",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 2000000,
          img: "huynday.svg",
          pick: false,
        },
        {
          title: "Changan",
          bodyType: "liftback",
          boxType: "boxAuto",
          price: 1000000,
          img: "changan.svg",
          pick: false,
        },
        {
          title: "Dastun",
          bodyType: "liftback",
          boxType: "boxRobo",
          price: 2000000,
          img: "dastun.svg",
          pick: false,
        },
        {
          title: "Foton",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 1000000,
          img: "foton.svg",
          pick: false,
        },
        {
          title: "Haval",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 3000000,
          img: "havak.svg",
          pick: false,
        },
        {
          title: "Mazda",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 3000000,
          img: "mazda.svg",
          pick: false,
        },
        {
          title: "Ravon",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 3000000,
          img: "ravon.svg",
          pick: false,
        },
        {
          title: "Zoyte",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 3000000,
          img: "zoyte.svg",
          pick: false,
        },
        {
          title: "Skoda",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 2000000,
          img: "skoda.svg",
          pick: false,
        },
        {
          title: "Chery",
          bodyType: "liftback",
          boxType: "boxRobo",
          price: 2000000,
          img: "chery.svg",
          pick: false,
        },
        {
          title: "DongFeng",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 1000000,
          img: "dongfeng.svg",
          pick: false,
        },
        {
          title: "GAC",
          bodyType: "crossover",
          boxType: "boxRobo",
          price: 2000000,
          img: "gac.svg",
          pick: false,
        },
        {
          title: "Honda",
          bodyType: "hatchback",
          boxType: "boxRobo",
          price: 2000000,
          img: "honda.svg",
          pick: false,
        },
        {
          title: "Mitsubishi",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 2000000,
          img: "mitsu.svg",
          pick: false,
        },
        {
          title: "Renault",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 3000000,
          img: "ranault.svg",
          pick: false,
        },
        {
          title: "Volkswagen",
          bodyType: " hatchback",
          boxType: "boxAuto",
          price: 2000000,
          img: "volk.svg",
          pick: false,
        },
        {
          title: "CheryExeed",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 3000000,
          img: "cheruExeed.svg",
          pick: false,
        },
        {
          title: "DW Hower",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 2000000,
          img: "Dw.svg",
          pick: false,
        },
        {
          title: "Geely",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 3000000,
          img: "geely.svg",
          pick: false,
        },
        {
          title: "JAC",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 3000000,
          img: "jac.svg",
          pick: false,
        },
        {
          title: "Nissan",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 3000000,
          img: "niss.svg",
          pick: false,
        },
        {
          title: "SsangYoung",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 1000000,
          img: "young.svg",
          pick: false,
        },
        {
          title: "Tayota",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 3000000,
          img: "tayouta.svg",
          pick: false,
        },
        {
          title: "Chevrolet",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 1000000,
          img: "chev.svg",
          pick: false,
        },
        {
          title: "FAW",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 2000000,
          img: "faw.svg",
          pick: false,
        },
        {
          title: "Great Wall",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 1000000,
          img: "great.svg",
          pick: false,
        },
        {
          title: "Lada",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 1000000,
          img: "lada.svg",
          pick: false,
        },
        {
          title: "Opel",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 1000000,
          img: "opel.svg",
          pick: false,
        },
      ],
      quickFilterItems: [
        {
          title: "Родстер",
          bodyType: "rodster",
        },
        {
          title: "Внедорожник",
          bodyType: "of_road",
        },
        {
          title: "Кроссовер",
          bodyType: "crossover",
        },
        {
          title: "Хэтчбэк",
          bodyType: "hatchback",
        },
        {
          title: "Лифтбэк",
          bodyType: "liftback",
        },
      ],
      quickFilterItemsBox: [
        {
          title: "Механическая",
          boxType: "boxMech",
        },
        {
          title: "Автоматическая",
          boxType: "boxAuto",
        },
        {
          title: "Роботизированная",
          boxType: "boxRobo",
        },
      ],
      recItems: [
        {
          title: "Семейные1 автомобили",
          img: "family_cars.svg",
        },
        {
          title: "Автомобили для2 путешествий",
          img: "cars_for_travel.svg",
        },
        {
          title: "Городские3 автомобили",
          img: "city_cars.svg",
        },
        {
          title: "Семейные4 автомобили",
          img: "cars_for_travel.svg",
        },
        {
          title: "Семейные5 автомобили",
          img: "cars_for_travel.svg",
        },
        {
          title: "Семейные6 автомобили",
          img: "cars_for_travel.svg",
        },
      ],
      offerItems: [
        {
          title: "Первый автомобиль1",
          subTitle: "1,9% по льготной ставке",
          img: "first_auto.svg",
        },
        {
          title: "Семейный автомобиль2",
          subTitle: "1,9% по льготной ставке",
          img: "fam_credit_auto.svg",
        },
        {
          title: "Экспресс-кредит3",
          subTitle: "1,9% по льготной ставке",
          img: "exp_credit_auto.svg",
        },
        {
          title: "Экспресс-кредит4",
          subTitle: "1,9% по льготной ставке",
          img: "exp_credit_auto.svg",
        },
        {
          title: "Экспресс-кредит5",
          subTitle: "1,9% по льготной ставке",
          img: "exp_credit_auto.svg",
        },
        {
          title: "Экспресс-кредит6",
          subTitle: "1,9% по льготной ставке",
          img: "exp_credit_auto.svg",
        },
      ],
      applicatonItems: [
        {
          title: "Марка",
          marksItems: {
            toyota: {
              name: "Toyota",
              model: {
                camry: "Camry",
                land: "Land Cruiser",
              },
              equip: {
                base: "Базовая",
                min: "Минимал",
              },
            },
            nissan: {
              name: "Nissan",
              model: {
                prada: "Prada",
                note: "Note",
              },
              equip: {
                base: "Базовая",
              },
            },
            lada: {
              name: "Lada",
              model: {
                priora: "Priora",
                granta: "Grante",
              },
              equip: {
                base: "Базовая",
                limited: "Лимитед",
              },
            },
            skoda: {
              name: "Skoda",
              model: {
                rapid: "Rapid",
                ocatvia: "Octavia",
              },
              equip: {
                base: "Базовая",
                max: "Максимальная",
              },
            },

            opel: {
              name: "Opel",
              model: {
                astra: "Astra",
                antara: "Antara",
              },
              equip: {
                max: "Максимальная",
                limited: "Лимитед",
              },
            },
          },
        },
      ],
      modelItems: [
        {
          title: "Модель",
          modelItem: [],
        },
      ],
      equipItems: [
        {
          title: "Комплектация",
          equipItem: [],
        },
      ],
      banksPartners: [
        {
          img: "alfa-bank.svg",
        },
        {
          img: "strah_bank.svg",
        },
        {
          img: "sovkom_bank.svg",
        },
        {
          img: "ros_bank.svg",
        },
        {
          img: "strah_bank.svg",
        },
        {
          img: "sovkom_bank.svg",
        },
        {
          img: "alfa-bank.svg",
        },
      ],
      feedbacks: [
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
        {
          title: "Сайт отзовик",
          body: "Название салона",
          raiting: "Рекомендуют 90%",
        },
      ],
      reviewsItems: [
        {
          title: "Сергей Васильев",
          body: "«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA",
          video: "",
        },
        {
          title: "Сергей Васильев",
          body: "«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA",
          video: "",
        },
        {
          title: "Сергей Васильев",
          body: "«Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантия 100 % точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA",
          video: "",
        },
      ],
      blogItems: [
        {
          title:
            "Тест1 Skoda Karoq Scout - городской карлик или настоящий скаут",
          date: "",
        },
        {
          title:
            "Тест2 Skoda Karoq Scout - городской карлик или настоящий скаут",
          date: "",
        },
        {
          title:
            "Тест3 Skoda Karoq Scout - городской карлик или настоящий скаут",
          date: "",
        },
        {
          title:
            "Тест4 Skoda Karoq Scout - городской карлик или настоящий скаут",
          date: "",
        },
        {
          title:
            "Тест5 Skoda Karoq Scout - городской карлик или настоящий скаут",
          date: "",
        },
        {
          title:
            "Тест6 Skoda Karoq Scout - городской карлик или настоящий скаут",
          date: "",
        },
      ],
      infoCardealItems: [
        {
          title: "Об автосалоне ABC",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamussed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollismagna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.",
          titleInput: "Автосалон",
          id: 1,
        },
        {
          title: "Информация о Trade-in",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamussed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollismagna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.",
          titleInput: "Трейд-ин",
          id: 2,
        },
        {
          title: "Информация о покупке",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss pulvinar auctor tellus, id volutpat dui dictum vitae. Sed ac mauris nisi. Maecenas quis sollicitudin dolor, eget molestie dolor. Vivamussed magna euismod, iaculis eros vitae, vehicula justo. Ut id consequat risus, vitae accumsan ligula. Proin egestas odio sit amet laoreet vulputate. Suspendisse vitae vestibulum quam. Vivamus lectus justo, bibendum at laoreet vel, rhoncus nec sem. Phasellus at mollismagna, in bibendum massa. Praesent malesuada sit amet nibh ut vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla iaculis a orci sit amet iaculis. Nulla in magna posuere nunc pharetra faucibus. Phasellus id enim libero.",
          titleInput: "Покупка",
          id: 3,
        },
      ],

      modalIsOpen: false,
      handlerCar: {},
    };
  },
  props: {
    scrollPoint: {
      type: String,
    },
    favoritesItems: {
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
    handlerCity: {
      type: String,
      required: true,
    },
  },
  methods: {
    openCreditPopup() {
      this.$emit("openCreditPopup");
    },
    goToBuyAuto(autoCart, equipment) {
      this.$emit("goToBuyAuto", autoCart, equipment);
    },
    moreInfo(autoCart) {
      this.$emit("moreInfo", autoCart);
    },
    pickBody(e) {
      this.$emit("pickBody", e);
    },
    pickBox(e) {
      this.$emit("pickBox", e);
    },
    filterPrice(e) {
      this.$emit("filterPrice", e);
    },
    modelOpenOrClose() {
      this.modalIsOpen = !this.modalIsOpen;
    },
    pickItemMark(e) {
      this.handlerCar = e;
    },
    test() {
      console.log(this.handlerCity)
    },
    async scrolltoItem(item) {
      let slide = this.$refs[`${item}`];
      let top = window.scrollY + slide.getBoundingClientRect().y;
      let count = 200;
      let startTop = window.scrollY;
      let delta = (top - window.scrollY) / 100;
      for (let i = 0; i < 100; i++) {
        await new Promise((resolve) => {
          window.setTimeout(() => {
            resolve();
          }, 1500 / count);
        });
        window.scrollTo(0, (startTop += delta) - 500);
      }
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
  },
  computed: {
    printDate() {
      return new Date().toLocaleDateString();
    },
  },
  mounted() {},
  watch: {
    scrollPoint() {
      this.scrolltoItem(this.scrollPoint);
    },
  },
};
</script>

<style></style>
