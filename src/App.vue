<template>
  <div class="app" id="app">
    <creditOnline :creditPopup="creditPopup"></creditOnline>
    <formForOffers
      :modalIsOpen="modalIsOpen"
      @modalIsClose="modelOpenOrClose"
    />
    <header-info
      @handleСity="takeCity"
      :currentCity="currentCity"
      @hanldeInput="hanldeInput"
    />
    <div ref="observer" class="observer"></div>
    <div class="fixedHeader" :class="{ fixedOn: fixedHead }">
      <header-navigation
        @fastPick="scrolltoItem"
        @aboutCompany="scrolltoItem"
        @techCenter="scrolltoItem"
        @rewviews="scrolltoItem"
        @contacts="scrolltoItem"
        @featBack="modelOpenOrClose"
        @checkOutClick="checkOutClick"
        @helperChoose="helperChoose"
        @moreInfo="moreInfo"
        :searchReusltItems="searchReusltItems"
        :categoriesFull="categoriesFull"
        :favoritesNum="favoritesItems.length"
        :comprasionNum="comprasionItems"
        :leftMenu="leftMenu"
        :leftMenuOpen="leftMenuOpen"
      />
    </div>
    <!-- РАЗОБРАТЬСЯ ЧТО ЗДЕСЬ ИСПОЛЬЗУЕТСЯ, А ЧТО НЕТ -->
    <div @click="checkOutClick">
      <router-view
        @addFavItem="addFavItem"
        @carFavoriteRemove="removeFavorite"
        @carFavoriteAdd="addFavorite"
        @carComprasionRemove="removeCompres"
        @pickBody="pickBody"
        @pickBox="pickBox"
        @filterPrice="filterPrice"
        @moreInfo="moreInfo"
        @saveInfoCart="moreInfo"
        @goToBuyAuto="goToBuyAuto"
        @openCreditPopup="openCreditPopup"
        :favoritesItems="favoritesItems"
        :filterCate="filterCate"
        :scrollPoint="scrollPoint"
        :autousCart="autousCart"
        :letsGoSort="letsGoSort"
        :autoCartInfo="moreInfoCart"
        :purchAuto="purchAuto"
        :handlerCity="handlerCity"
      />
      <footerFooter />
    </div>
    1. Исправить отображение города в headerInfo
    2. Исправить ошибку из-за которой главная страница загружатся только если что-то изменишь в app ф
  </div>
</template>

<script>
import { testApi } from "@/components/UI/testApi.js";
export default {
  name: "App",
  data() {
    return {
      favoritesItems: [],
      comprasionItems: [],
      categoriesFull: [
        {
          title: "Каталог аaто",
          body: {
            tayota: "Tayota",
            lada: "Lada",
            skoda: "SKODA",
            gac: "GAC",
          },
          id: 1,
          hover: false,
        },
        {
          title: "Кредит и рассрочка",
          body: {
            car: "Tayota",
            car: "Lada",
            car: "SKODA",
            car: "GAC",
          },
          id: 2,
          hover: false,
        },
        {
          title: "Авто с пробегом",
          body: {
            car: "Tayota",
            car: "Lada",
            car: "SKODA",
            car: "GAC",
          },
          id: 3,
          hover: false,
        },
        {
          title: "Спецпредложения",
          body: {
            car: "Tayota",
            car: "Lada",
            car: "SKODA",
            car: "GAC",
          },
          id: 4,
          hover: false,
        },
        {
          title: "Такси в кредит",
          body: {
            car: "Tayota",
            car: "Lada",
            car: "SKODA",
            car: "GAC",
          },
          id: 5,
          hover: false,
        },
      ],
      leftMenu: [
        {
          title: "Каталог",
          img: "free-icon-search-4230232.png",
          active: true,
          titleBody: [
            {
              title: "Подкаталог",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "Подкаталог",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "Подкаталог",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "Подкаталог",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "Подкаталог",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "Подкаталог",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст ",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то Какой-то текст текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
          ],
        },
        {
          title: "Купить",
          img: "free-icon-shopping-cart-2543378.png",
          active: false,
          titleBody: [
            {
              title: "Купить",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "купить2",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "купить3",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "купить4",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "купить5",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "купить6",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст ",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то Какой-то текст текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
          ],
        },
        {
          title: "Продать",
          img: "deal.png",
          active: false,
          titleBody: [
            {
              title: "продать",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "продать1",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "продать2",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "продать3",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "продать4",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "продать5",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст ",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то Какой-то текст текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
          ],
        },
        {
          title: "Аренда",
          img: "free-icon-rent-2603629.png",
          active: false,
          titleBody: [
            {
              title: "аренда",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "аренда1",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "аренда2",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "аренда3",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
          ],
        },
        {
          title: "Скидки",
          img: "free-icon-discount-2652181.png",
          active: false,
          titleBody: [
            {
              title: "скидки",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },

            {
              title: "скидки2",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "скидки3",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "скидки4",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
          ],
        },
        {
          title: "Акции",
          img: "free-icon-promotions-8143279.png",
          active: false,
          titleBody: [
            {
              title: "Акции1",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },

                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то туйцвжфыдвфвыжфвыфекст",
                },
              ],
            },
            {
              title: "акции2",
              body: [
                {
                  bodyText: "Какой-то текст фвыьчябфыдвфлывф",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст фвыджвлйцху12уфыждв",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-тофыжвдыфжвыфвфыо текст",
                },
              ],
            },
            {
              title: "акции3",
              body: [
                {
                  bodyText: "Какой-увлузйцщвлыфджвыфо текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какоыфвлдыоуйзщуфвдыфкой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "акции4",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "вфывфывфывффывфваьвлащйц фыв фвф ывыф в",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
              ],
            },
            {
              title: "акции5",
              body: [
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "вфывфывфывфывфывфыв23уфывффыв фыв фвф ывыф в",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
              ],
            },
            {
              title: "акции6",
              body: [
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "Какой-то Какой-то текст текст",
                },
                {
                  bodyText: "Какой-то текст Какой-то текст",
                },
                {
                  bodyText: "Какой-то текст",
                },
                {
                  bodyText: "вфывфывфывфывфывфывфывфыв фыв фвф ывыф в",
                },
              ],
            },
          ],
        },
        {
          title: "Кредит",
          img: "free-icon-refinance-7238513.png",
          active: false,
        },
        {
          title: "Отзывы",
          img: "free-icon-feedback-813419.png",
          active: false,
        },
        {
          title: "Задай вопрос",
          img: "free-icon-question-5194661.png",
          active: false,
        },
      ],
      autousCart: [
        {
          title: "Kia",
          model: "rewfeew",
          bodyType: "of_road",
          boxType: "boxMech",
          price: 2815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4400,
            width: 1470,
            height: 1740,
            wheelBase: 2600,
            clearance: 160,
          },
          equipment: [
            {
              title: "Стандарт 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2018",
              box: "МехТ",
              wd: "2WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "МехТ",
              wd: "4WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "МехТ",
              wd: "2WD",
              engine: "1.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          equipOpen: false,
          favorites: false,
          comprasion: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Great Wall",
          model: "rewfeewdsadsad",
          bodyType: "of_road",
          boxType: "boxMech",
          price: 2815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 3800,
            width: 1270,
            height: 1540,
            wheelBase: 2000,
            clearance: 140,
          },
          equipment: [
            {
              title: "Стандарт 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2015",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
          ],
          equipOpen: false,
          favorites: false,
          comprasion: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Briliance",
          model: "regtfds",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4600,
            width: 1570,
            height: 2040,
            wheelBase: 2800,
            clearance: 180,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          equipOpen: false,
          favorites: false,
          comprasion: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Citroen",
          model: "thygfds",
          bodyType: "hatchback",
          boxType: "boxRobo",
          price: 815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4000,
            width: 1370,
            height: 1640,
            wheelBase: 2500,
            clearance: 150,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
          ],
          equipOpen: false,
          favorites: false,
          comprasion: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Ford",
          model: "ewfdsg",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 3900,
            width: 2070,
            height: 2040,
            wheelBase: 2000,
            clearance: 160,
          },
          equipment: [
            {
              title: "Стандарт 2011",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2018",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
          ],
          equipOpen: false,
          favorites: false,
          comprasion: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Lifan",
          model: "ukjyhgyfdsea",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 2815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 5000,
            width: 2170,
            height: 2040,
            wheelBase: 3000,
            clearance: 200,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Peugout",
          model: "asd23qfwhtyj",
          bodyType: "crossover",
          boxType: "boxMech",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4200,
            width: 1670,
            height: 1240,
            wheelBase: 2100,
            clearance: 165,
          },
          equipment: [
            {
              title: "Стандарт 2019",
              box: "МехТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "МехТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2017",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Uaz",
          model: "asdsadsaddddz",
          bodyType: "of_road",
          boxType: "boxMech",
          price: 915000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4450,
            width: 1480,
            height: 1790,
            wheelBase: 2620,
            clearance: 176,
          },
          equipment: [
            {
              title: "Стандарт 2021",
              box: "МехТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2018",
              box: "МехТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Hyundai",
          model: "3edsaa",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4220,
            width: 1820,
            height: 1120,
            wheelBase: 2450,
            clearance: 190,
          },
          equipment: [
            {
              title: "Стандарт 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2015",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2018",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Changan",
          model: "sdgfdfgdf",
          bodyType: "liftback",
          boxType: "boxAuto",
          price: 815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4115,
            width: 1575,
            height: 1350,
            wheelBase: 1800,
            clearance: 125,
          },
          equipment: [
            {
              title: "Стандарт 2011",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Datsun",
          model: "qweweeeeqqs",
          bodyType: "liftback",
          boxType: "boxRobo",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 3490,
            width: 1280,
            height: 1540,
            wheelBase: 2050,
            clearance: 180,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Foton",
          model: "dsdqqs",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 2815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4750,
            width: 1980,
            height: 2040,
            wheelBase: 2650,
            clearance: 205,
          },
          equipment: [
            {
              title: "Стандарт 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2018",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "МехТ",
              wd: "4WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "МехТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2021",
              box: "МехТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "МехТ",
              wd: "2WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Foton",
          model: "asdsafdd",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 2815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 2400,
            width: 970,
            height: 1040,
            wheelBase: 1000,
            clearance: 90,
          },
          equipment: [
            {
              title: "Стандарт 2021",
              box: "МехТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2013",
              box: "МехТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2021",
              box: "МехТ",
              wd: "4WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Haval",
          model: "hkhj;erw",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 2115000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4995,
            width: 2085,
            height: 2155,
            wheelBase: 2600,
            clearance: 160,
          },
          equipment: [
            {
              title: "Стандарт 2010",
              box: "МехТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2010",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "2.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Haval",
          model: "sda1ewsgsd",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 2115000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 5000,
            width: 2675,
            height: 2455,
            wheelBase: 3150,
            clearance: 210,
          },
          equipment: [
            {
              title: "Стандарт 2010",
              box: "МехТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2018",
              box: "МехТ",
              wd: "4WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "МехТ",
              wd: "4WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2017",
              box: "МехТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2010",
              box: "МехТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Mazda",
          model: "weqw3132",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 2412000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 4.3,
            speed: 159,
            drive: 9.3,
          },
          proportions: {
            length: 4405,
            width: 1695,
            height: 1585,
            wheelBase: 1900,
            clearance: 135,
          },
          equipment: [
            {
              title: "Стандарт 2010",
              box: "МехТ",
              wd: "2WD",
              engine: "1.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2018",
              box: "МехТ",
              wd: "4WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "МехТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2018",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Mazda",
          model: "eqweeas",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 1412000,
          creditPrice: 115000,
          characters: {
            power: 188,
            oil: 7.3,
            speed: 199,
            drive: 7.3,
          },
          proportions: {
            length: 2900,
            width: 1470,
            height: 1400,
            wheelBase: 2000,
            clearance: 125,
          },
          equipment: [
            {
              title: "Стандарт 2011",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2019",
              box: "МехТ",
              wd: "4WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2021",
              box: "МехТ",
              wd: "4WD",
              engine: "2.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2018",
              box: "МехТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Mazda",
          model: "asdasdas",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 3412000,
          creditPrice: 215000,
          characters: {
            power: 198,
            oil: 3.9,
            speed: 179,
            drive: 8.3,
          },
          proportions: {
            length: 4200,
            width: 1550,
            height: 1660,
            wheelBase: 1700,
            clearance: 175,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2018",
              box: "МехТ",
              wd: "4WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Mazda",
          model: "asfdghjkh",
          bodyType: "hatchback",
          boxType: "boxMech",
          price: 1812000,
          creditPrice: 155000,
          characters: {
            power: 228,
            oil: 6.3,
            speed: 209,
            drive: 7.3,
          },
          proportions: {
            length: 3850,
            width: 2050,
            height: 1660,
            wheelBase: 1695,
            clearance: 195,
          },
          equipment: [
            {
              title: "Улучшенная 2020",
              box: "МехТ",
              wd: "4WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "МехТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2017",
              box: "МехТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Ravon",
          model: "sahthyrewas",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 812000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 3750,
            width: 1650,
            height: 1960,
            wheelBase: 1100,
            clearance: 115,
          },
          equipment: [
            {
              title: "Стандарт 2009",
              box: "МехТ",
              wd: "2WD",
              engine: "1.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "МехТ",
              wd: "4WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2021",
              box: "МехТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2017",
              box: "МехТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Ravon",
          model: "sahtdsadsada21esaa",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 812000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4005,
            width: 1959,
            height: 1665,
            wheelBase: 1702,
            clearance: 197,
          },
          equipment: [
            {
              title: "Стандарт 2015",
              box: "МехТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "МехТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "МехТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "МехТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Zoyte",
          model: "wqeertwqsahjk",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 2815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4900,
            width: 1550,
            height: 1660,
            wheelBase: 1700,
            clearance: 175,
          },
          equipment: [
            {
              title: "Стандарт 2017",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2021",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Skoda",
          model: "ewrfhgtyjuki",
          bodyType: "liftback",
          boxType: "boxMech",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 4222,
            width: 1757,
            height: 1899,
            wheelBase: 1755,
            clearance: 195,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "МехТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "МехТ",
              wd: "4WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "МехТ",
              wd: "4WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "МехТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "МехТ",
              wd: "2WD",
              engine: "2.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "МехТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Chery",
          model: "3eiroutipe[w]",
          bodyType: "liftback",
          boxType: "boxRobo",
          price: 1815000,
          creditPrice: 115000,
          characters: {
            power: 158,
            oil: 3.3,
            speed: 139,
            drive: 9.3,
          },
          proportions: {
            length: 3595,
            width: 1250,
            height: 1566,
            wheelBase: 1777,
            clearance: 111,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2021",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "DongFeng",
          model: "3irefkdlsap[]",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 2715000,
          creditPrice: 115000,
          characters: {
            power: 128,
            oil: 4.3,
            speed: 120,
            drive: 12.3,
          },
          proportions: {
            length: 3200,
            width: 1350,
            height: 1330,
            wheelBase: 1300,
            clearance: 105,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "МехТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: true,
          img: "auto_cart.svg",
        },
        {
          title: "GAC",
          model: "123sdp[q[sa;;]]",
          bodyType: "crossover",
          boxType: "boxRobo",
          price: 1714000,
          creditPrice: 115000,
          characters: {
            power: 128,
            oil: 4.0,
            speed: 120,
            drive: 12.2,
          },
          proportions: {
            length: 4955,
            width: 2550,
            height: 2260,
            wheelBase: 1770,
            clearance: 199,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2022",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Honda",
          model: "ghkjiewops;z",
          bodyType: "hatchback",
          boxType: "boxRobo",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 127,
            oil: 7.3,
            speed: 177,
            drive: 9.3,
          },
          proportions: {
            length: 4211,
            width: 1551,
            height: 1642,
            wheelBase: 1726,
            clearance: 175,
          },
          equipment: [
            {
              title: "Стандарт 2017",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2018",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Mitsubishi",
          model: "salkqewiaop[sss]",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 1515000,
          creditPrice: 115000,
          characters: {
            power: 198,
            oil: 8.3,
            speed: 199,
            drive: 6.3,
          },
          proportions: {
            length: 4224,
            width: 1658,
            height: 1688,
            wheelBase: 1820,
            clearance: 205,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2012",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2011",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2010",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2009",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Renault",
          model: "1gjgfflkddsa;lvmnzz",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 2915000,
          creditPrice: 115000,
          characters: {
            power: 118,
            oil: 5.3,
            speed: 189,
            drive: 10.3,
          },
          proportions: {
            length: 4251,
            width: 1750,
            height: 1990,
            wheelBase: 1900,
            clearance: 117,
          },
          equipment: [
            {
              title: "Стандарт 2009",
              box: "МехТ",
              wd: "2WD",
              engine: "1.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2015",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2018",
              box: "МехТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: false,
          old: true,
          img: "auto_cart.svg",
        },
        {
          title: "Volkswagen",
          model: "s[epqwspoaopspd[pqwsaz]]",
          bodyType: " hatchback",
          boxType: "boxAuto",
          price: 2615000,
          creditPrice: 115000,
          characters: {
            power: 200,
            oil: 9.3,
            speed: 220,
            drive: 7.3,
          },
          proportions: {
            length: 4232,
            width: 1654,
            height: 1949,
            wheelBase: 1545,
            clearance: 123,
          },
          equipment: [
            {
              title: "Максимальная 2020",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "CheryExeed",
          model: "asepqwpsaxnznz,z,,ss",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 1515000,
          creditPrice: 115000,
          characters: {
            power: 188,
            oil: 9.3,
            speed: 149,
            drive: 11.3,
          },
          proportions: {
            length: 3333,
            width: 1123,
            height: 1492,
            wheelBase: 1110,
            clearance: 99,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: false,
          old: true,
          img: "auto_cart.svg",
        },
        {
          title: "DW Hower",
          model: "aspeqwpdlaskzlqwesax",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 1915000,
          creditPrice: 115000,
          characters: {
            power: 120,
            oil: 8.3,
            speed: 200,
            drive: 12.2,
          },
          proportions: {
            length: 3224,
            width: 1258,
            height: 1448,
            wheelBase: 1220,
            clearance: 168,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Geely",
          model: "wqeiefopdsl;zsadas",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 2115000,
          creditPrice: 115000,
          characters: {
            power: 144,
            oil: 6.3,
            speed: 119,
            drive: 11.3,
          },
          proportions: {
            length: 4114,
            width: 1373,
            height: 1292,
            wheelBase: 1234,
            clearance: 155,
          },
          equipment: [
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2017",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: false,
          old: true,
          img: "auto_cart.svg",
        },
        {
          title: "JAC",
          model: "09894olflglf",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 1015000,
          creditPrice: 115000,
          characters: {
            power: 100,
            oil: 4.3,
            speed: 165,
            drive: 12.8,
          },
          proportions: {
            length: 4224,
            width: 1658,
            height: 1688,
            wheelBase: 1820,
            clearance: 205,
          },
          equipment: [
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: true,
          taxi: false,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Nissan",
          model: "1239eksdlsaldsldls",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 5123,
            width: 2968,
            height: 2688,
            wheelBase: 2820,
            clearance: 255,
          },
          equipment: [
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2018",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "SsangYoung",
          model: "]we]qe[sa;d;azsa]",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3220,
            width: 1194,
            height: 1228,
            wheelBase: 1120,
            clearance: 105,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2019",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Tayota",
          model: "xc,hgdysioap,.,.",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 2615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3901,
            width: 1901,
            height: 1539,
            wheelBase: 1354,
            clearance: 177,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "3.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Tayota",
          model: "asdqjoweksa,xzasdssss",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 2615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 2324,
            width: 2358,
            height: 1288,
            wheelBase: 1333,
            clearance: 133,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "3.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.8",
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Tayota",
          model: "1sdaweqqwdsa22123",
          bodyType: "of_road",
          boxType: "boxRobo",
          price: 2615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3999,
            width: 1958,
            height: 1778,
            wheelBase: 2020,
            clearance: 162,
          },
          equipment: [
            {
              title: "Стандарт 2018",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2021",
              box: "РобоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2021",
              box: "РобоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Chevrolet",
          model: "adsqewqdsadsas123rt3",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 4321,
            width: 2101,
            height: 2329,
            wheelBase: 1720,
            clearance: 178,
          },
          equipment: [
            {
              title: "Стандарт 2018",
              box: "МехТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2017",
              box: "МехТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "МехТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Chevrolet",
          model: "kdmsadkaskzz;q[e]",
          bodyType: "rodster",
          boxType: "boxMech",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 4024,
            width: 1758,
            height: 1288,
            wheelBase: 1520,
            clearance: 105,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "МехТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "МехТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "МехТ",
              wd: "4WD",
              engine: "2.1",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2012",
              box: "МехТ",
              wd: "2WD",
              engine: "1.6",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "МехТ",
              wd: "2WD",
              engine: "1.7",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "FAW",
          model: "123sadssadsada",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 4131,
            width: 1958,
            height: 1988,
            wheelBase: 120,
            clearance: 193,
          },
          equipment: [
            {
              title: "Максимальная 2023",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2021",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "FAW",
          model: "]q]q][q[w;s]]",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3324,
            width: 1958,
            height: 1918,
            wheelBase: 1321,
            clearance: 161,
          },
          equipment: [
            {
              title: "Стандарт 2012",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2019",
              box: "АвтоТ",
              wd: "4WD",
              engine: "1.9",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2019",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "FAW",
          model: "asdpqwoes,z,,z,z,z,z,x",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 2224,
            width: 958,
            height: 988,
            wheelBase: 820,
            clearance: 75,
          },
          equipment: [
            {
              title: "Стандарт 2020",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2020",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2020",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "FAW",
          model: "1dsad31kewidjuhgf",
          bodyType: "crossover",
          boxType: "boxAuto",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3224,
            width: 1256,
            height: 1458,
            wheelBase: 1522,
            clearance: 145,
          },
          equipment: [
            {
              title: "Улучшенная 2014",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.5",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2016",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2022",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2020",
              box: "АвтоТ",
              wd: "2WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },

        {
          title: "Lada",
          model: "123sdp232222222",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3224,
            width: 1262,
            height: 1353,
            wheelBase: 1342,
            clearance: 205,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Lada",
          model: "231333333333333333",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 4119,
            width: 1998,
            height: 1888,
            wheelBase: 2312,
            clearance: 213,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Lada",
          model: "132w9sikjdjhaisdkla",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3224,
            width: 1466,
            height: 1477,
            wheelBase: 1990,
            clearance: 173,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Lada",
          model: "31209osakdaskdals",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3294,
            width: 3838,
            height: 2671,
            wheelBase: 2820,
            clearance: 232,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Lada",
          model: "dsaqew123123asdggfhas1sz122",
          bodyType: "rodster",
          boxType: "boxRobo",
          price: 615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 2997,
            width: 1789,
            height: 1493,
            wheelBase: 1420,
            clearance: 139,
          },
          equipment: [
            {
              title: "Стандарт 2016",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.3",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Максимальная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Стандарт 2022",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2023",
              box: "РобоТ",
              wd: "2WD",
              engine: "1.4",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Opel",
          model: "1sfhgvqwhkmsaj,l;",
          bodyType: "of_road",
          boxType: "boxAuto",
          price: 1615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3209,
            width: 1709,
            height: 1801,
            wheelBase: 1507,
            clearance: 107,
          },
          equipment: [
            {
              title: "Стандарт 2022",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.8",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
        {
          title: "Nissan",
          model: "lokjihugyfdtshjkail",
          bodyType: "hatchback",
          boxType: "boxAuto",
          price: 2615000,
          creditPrice: 115000,
          characters: {
            power: 140,
            oil: 8.3,
            speed: 220,
            drive: 9.3,
          },
          proportions: {
            length: 3282,
            width: 1809,
            height: 1798,
            wheelBase: 2023,
            clearance: 176,
          },
          equipment: [
            {
              title: "Стандарт 2020",
              box: "АвтоТ",
              wd: "2WD",
              engine: "1.2",
              isOpen: false,
              fullInfo: false,
            },
            {
              title: "Улучшенная 2022",
              box: "АвтоТ",
              wd: "4WD",
              engine: "2.0",
              isOpen: false,
              fullInfo: false,
            },
          ],
          favorites: false,
          comprasion: false,
          equipOpen: false,
          new: false,
          taxi: true,
          old: false,
          img: "auto_cart.svg",
        },
      ],
      scrollPoint: "",
      modalIsOpen: false,
      fixedHead: false,
      filterCate: {
        bodyType: "",
        boxType: "",
        price: "",
      },
      letsGoSort: false,
      moreInfoCart: {},
      purchAuto: {
        auto: {},
        equip: {},
      },
      leftMenuOpen: false,
      creditPopup: false,
      searchReusltItems: [],
      city: [],
      currentCity: [],
     
      regionAndRepublick: [],
      handlerCity: "",
    };
  },
  methods: {
    hanldeInput(e) {
      this.currentCity = [];
      
      
      this.city.filter((city) => {
        city.name = city.name.replace(/\(.+\)/, "");
        let findingCity = city.name.toLowerCase();
        let handlerCity = e.toLowerCase();
        if (findingCity.includes(handlerCity)) {
          this.currentCity.push(city);
          
        }
      });
      this.currentCity = this.currentCity.slice(-8)
    },
    takeCity(city) {
      this.handlerCity = city;
    },
    openCreditPopup() {
      this.creditPopup = !this.creditPopup;
    },
    helperChoose(e) {
      this.searchReusltItems = [];
      if (e === "") {
        return (this.searchReusltItems = []);
      }
      this.autousCart.forEach((auto) => {
        if (
          auto.title.toLowerCase().includes(e) ||
          auto.model.toLowerCase().includes(e)
        ) {
          this.searchReusltItems.push(auto);
          
          this.searchReusltItems = this.searchReusltItems.slice(-5);
        }
      });
    },
    goToBuyAuto(autoCart, equipment) {
      this.purchAuto.auto = autoCart;
      this.purchAuto.equip = equipment;
      localStorage.setItem("carToBuy", JSON.stringify(this.purchAuto));
    },
    checkOutClick(e) {
      if (e.target.classList.value === "item_history") {
        return (this.leftMenuOpen = false);
      }
      if (e.currentTarget.classList.value === "outclick_left_menu") {
        return (this.leftMenuOpen = true);
      } else {
        return (this.leftMenuOpen = false);
      }
    },
    moreInfo(autoCart) {
      this.moreInfoCart = autoCart;
      localStorage.setItem("infoCart", JSON.stringify(this.moreInfoCart));
    },
    modelOpenOrClose() {
      this.modalIsOpen = !this.modalIsOpen;
    },
    pickBody(e) {
      this.filterCate.bodyType = e;
    },
    pickBox(e) {
      this.filterCate.boxType = e;
    },
    filterPrice(e) {
      this.filterCate.price = e;
      if (
        this.filterCate.bodyType !== "" &&
        this.filterCate.boxType !== "" &&
        this.filterCate.price !== 0
      ) {
        this.letsGoSort = !this.letsGoSort;
      }
    },
    addFavItem(e) {
      this.favoritesItems = e;
     
    },
    addFavorite(e) {
      if (e.favorites === true) {
        return this.favoritesItems.push(e);
      }
      if (e.comprasion === true) {
        return this.comprasionItems.push(e);
      }
    },
    removeFavorite(i) {
      if (i.favorites === false) {
        this.favoritesItems = this.favoritesItems.filter(
          (r) => r.title !== i.title
        );
      }
    },
    removeCompres(i) {
      if (i.comprasion === false) {
        return (this.comprasionItems = this.comprasionItems.filter(
          (r) => r !== i
        ));
      }
    },
    scrolltoItem(e) {
      this.$router.push({ name: "mainHome" });
      setTimeout(() => {
        this.scrollPoint = e;
      }, 500);
    },
    addfavFromLocalStore() {
      if (localStorage.getItem("test") !== null) {
        let favLocalItems = JSON.parse(localStorage.getItem("test"));
        if (this.favoritesItems.length === 0) {
          favLocalItems = favLocalItems?.filter(
            (auto) => auto.favorites === true
          );
          favLocalItems.forEach((auto) => {
            this.addFavorite(auto);
          });
        }
      }
    },
    checkToBuyAuto() {
      if (JSON.parse(localStorage.getItem("carToBuy")) === null) {
        this.goToBuyAuto();
      } else {
        this.purchAuto = JSON.parse(localStorage.getItem("carToBuy"));
      }
    },
  },
  computed: {
    favoritesNumber() {
      return this.favoritesItems;
    },
  },
  async mounted() {
    let allAreas = await testApi();

    this.regionAndRepublick = Object.entries(allAreas[0].areas);

    this.regionAndRepublick.forEach((c) => {
      
      c[1].areas.forEach((q) => {
        if (parseInt(c[1].id) === parseInt(q.parent_id)) {
          q.parent_id = c[1].name;
        }
        this.city.push(q);
      });
    });

    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    let callback = (entries, observer) => {
      if (!entries[0].isIntersecting) {
        this.fixedHead = true;
      } else if (entries[0].isIntersecting) {
        this.fixedHead = false;
      }
    };
    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  created() {
    if (JSON.parse(localStorage.getItem("infoCart")) === null) {
      localStorage.setItem("infoCart", JSON.stringify(this.moreInfoCart));
    } else {
      this.moreInfoCart = JSON.parse(localStorage.getItem("infoCart"));
    }
    this.checkToBuyAuto();
    this.addfavFromLocalStore();
  },
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  margin: 0px;
  position: relative;
  height: 100%;
  overflow-y: hidden;
}
.test {
  display: flex;
  flex-direction: column;
}

.fixedHeader {
  width: 100%;
  max-height: 100%;
  z-index: 99;
  background: white;
  box-shadow: 1px 1px 5px gray;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 0.5s;
}

.fixedOn {
  transition: 0.5s;
  top: 0;
  margin: 0;
  position: fixed;
}

.order_one {
  order: 0;
}
.alo {
  font-size: 20px;
  z-index: 9999;
}

.order_two {
  order: 1;
}

.user_offer:hover {
  opacity: 0.5;
  cursor: pointer;
}

.container {
  padding-left: 10%;
  padding-right: 10%;
  position: relative;
}
a {
  text-decoration: none;
  outline: none;
}
.red {
  background-color: #ca0100;
  color: white;
  padding: 0px 2px 0px 4px;
  border-radius: 10px;
  margin-right: 5px;
  transition: 0.3s;
}
.new_closed {
  opacity: 0;
  visibility: hidden;
  appearance: none;
  z-index: 0;
}
.red_text {
  font-weight: bold;
  color: #ca0100;
}

.siteUp {
  position: fixed;
  bottom: 30px;
  right: 50px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.164);
  border: none;
  transition: 0.3s;
  cursor: pointer;
  z-index: 9;
}

.siteUp:hover {
  transform: scale(1.1, 1.1);
}

.observer {
  height: 1 px;
  width: 100%;
  background: red;
}
</style>
