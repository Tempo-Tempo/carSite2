<template>
  <div class="icons_categories" @click="test">
    <a href="#/cart"
      ><div class="centre">
        <div class="icon_hearth">
          <span class="favorites_num">{{ favoritesNum }} </span>
        </div>
        <span class="text_fav">Избранное</span>
      </div></a
    >

    <div class="centre2">
      <div class="icon_tubs">
        <span class="favorites_num_tubs">{{ comprasionNum.length }}</span>
      </div>
      <span class="text_tubs">Сравнение</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  props: {
    comprasionNum: {
      type: Number,
      required: true,
    },
    favoritesNum: {
      type: Number,
      required: true,
    },
  },
  methods: {
      test() {
        console.log(this.favoritesNum)
        console.log(this.comprasionNum)
      }
  },
  watch:
 {
  favoritesNum(){
    console.log(this.favoritesNum)
  }
 }};
</script>

<style scoped>
a {
  text-decoration: none;
}
.icons_categories {
  position: relative;
  width: 150px;
  margin-bottom: 12px;
  height: 45px;
  display: flex;
  justify-content: space-between;
}

.centre {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 33%;
  height: 100%;
  justify-content: center;
}

.centre2 {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 33%;
  height: 100%;
  justify-content: center;
  
}


.centre2:hover .text_tubs {
  color: #ca0100;
  cursor: pointer;
}


.centre2:hover .icon_tubs {
  transition: 0.3s;
  background: url(@/assets/icon/tubs_red.svg);
  width: 19px;
  height: 23px;
  margin-right: 30px;
}

.centre:hover .text_fav {
  color: #ca0100;
  cursor: pointer;
}

.centre:hover .icon_hearth {
  transition: 0.3s;
  background: url(@/assets/icon/hearth_red.svg);
  width: 26px;
  height: 23px;
}
.icon_hearth {
  background: url(@/assets/icon/hearth_grey.svg);
  width: 26px;
  height: 23px;
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: 26px;
}

.text_fav {
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 11px;

  text-decoration: none;
  color: black;
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
  cursor: pointer;
  left: 15px;
  top: 10px;
}

.text_tubs {
  position: absolute;
  left: -5px;
  bottom: -9px;
  font-size: 11px;
}
.icon_tubs:hover {
  transition: 0.3s;
  background: url(@/assets/icon/tubs_red.svg);
  width: 19px;
  height: 23px;
  margin-right: 30px;
}
</style>
