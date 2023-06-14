<template>
  <div class="categories">
    <div class="container">
      <nav class="nav">
        <ul>
          <div>
            <a class="nav_categories" @click="fastPick" href="#">Подбор авто</a>
          </div>
          <div>
            <a class="nav_company" @click="aboutCompany" href="#">О компании</a>
          </div>
          <div>
            <a class="nav_car_deals" @click="techCenter" href="#">Техцентр</a>
          </div>
          <div>
            <a class="nav_reviews" @click="rewviews" href="#">Отзывы</a>
          </div>
          <div>
            <a class="nav_contatcs" @click="contacts" href="#">Контакты</a>
          </div>
          
        </ul>
      </nav>
      <!-- <div
        class="kat_auto"
        v-for="kat in categoriesFull"
        :key="kat.id"
        @mouseleave="kat.hover = false"
      >
        <div
          class="title_cate"
          
          @mouseover="kat.hover = true"
        >
          {{ kat.title }}
        </div>
        <div
          class="title_cate_full_info"
          :class="{ new_closed: kat.hover !== true }"
          id="info_first"
        >
          <ul v-for="kat in categoriesFull" :key="kat.id" class="title_cat_ul">
            <li>
              <a href="#">{{ kat.body.tayota }}</a>
            </li>
            <li>
              <a href="#">{{ kat.body.lada }}</a>
            </li>
            <li>
              <a href="#">{{ kat.body.skoda }}</a>
            </li>
            <li>
              <a href="#">{{ kat.body.gac }}</a>
            </li>
          </ul>
        </div>
      </div> -->
      <div class="calls">
        <img class="icon_call" src="@/assets/icon/call.svg" alt="" />
        <div href="tel:78005519431" class="number_main">+7 (800) 551-94-31</div>
        <div class="number_twink">+7 (495) 292-18-67</div>
      </div>

      <button @click="featBack" class="feat_back">Обратная связь</button>
    
 <!-- <nav-bar :favoritesNum="favoritesNum.length" :comprasionNum="comprasionNum.length"/> -->
     
    </div>
    
  </div>
</template>

<script>
export default {
 
  name: "categoriesInfo",
  data() {
    return {
      hover: false,
      handlerCat: undefined,
    };
  },
  props: {
    categoriesFull: {
      type: Array,
      requaried: true,
    },
    favoritesNum: {
      type: Number,
      requaried: true,
    },
    comprasionNum: {
      type: Number,
      requaried: true,
    },
  },
};
</script>

<style scoped>
.categories .container {
  display: flex;
  padding-top: 25px;
  padding-bottom: 15px;
  font-size: 16px;
  
  text-transform: uppercase;
  align-items: center;
  z-index: 0;
  height: 50px;
 
}


.icon_call {
  position: absolute;
  left: 23%;
  top: 54%;
  cursor: pointer;
  z-index: 1;
  width: 20px;
}

.number_main {
  font-size: 25px;
  cursor: pointer;
}

.number_main:hover {
  transition: 0.3s;
  opacity: 0.5;
}

.number_twink {
  cursor: pointer;
  margin-left: 50px;
}

.number_twink:hover {
  transition: 0.3s;
  opacity: 0.5;
}

.calls {
  display: block;
  line-height: 25px;
  text-align: right;
  position: relative;
  width: 310px;
  margin-right: 50px;
}
.nav a {
  color: black;
  
}

.feat_back {
  width: 360px;
  height: 50px;
  background-color: #ca0100;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
}

.feat_back:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
.nav {
  width: 90%;
  font-size: 16px;
 
}
.nav ul {
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-right: 50px;
}

.nav a:hover {
  transition: 0.3s;
  color: #ca0100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.493);
}

.kat_auto {
  display: block;
  position: relative;
  padding-right: 25px;
  cursor: pointer;
  
}
.title_cate {
  padding-bottom: 15px;
}

.title_cate:hover {
  opacity: 0.7;
}

.title_cate::after {
  position: absolute;
  content: "";
  background: url(@/assets/icon/Vector.svg);
  width: 12px;
  height: 8px;
  right: 0%;
  top: 30%;
  transform: translateY(-50%);
}
.title_cat_ul {
  line-height: 35px;
  list-style-type: none;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
  z-index: 999;
  position: absolute;
}

.title_cat_ul a {
  outline: none;
  color: #262626;
  text-decoration: none;
}
.title_cat_ul a:hover {
  transition: 0.3s;
  border-bottom: 1px solid;
  padding-bottom: 5px;
}

.title_cate_full_info {
  width: 200px;
  height: 200px;
  box-shadow: 0px 1px 5px gray;
  border-radius: 10px;
position: absolute  ;
  background-color: white;
  opacity: 1;

}


.kat_auto:hover .title_cate::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
  right: 0%;
  top: 30%;
}


</style>
