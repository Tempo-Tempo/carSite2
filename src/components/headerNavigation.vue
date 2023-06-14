<template>
  <header class="header">
    <div class="container">
      <div class="outclick_left_menu" @click="checkOutClick" id="123">
        <button @click="leftMenuOpen = !leftMenuOpen" class="list">
          <img class="list_img" src="@/assets/icon/list_icon.svg" alt="" />
        </button>
        <leftMenu
          :leftMenuOpen="leftMenuOpen"
          :leftMenu="leftMenu"
          @fastPick="fastPick"
          @aboutCompany="aboutCompany"
          @techCenter="techCenter"
          @rewviews="rewviews"
          @contacts="contacts"
        />
      </div>

      <router-link to="/">
        <img
          class="logo"
          @mouseenter="helperOpen = true"
          @mouseleave="helperOpen = false"
          src="@/assets/icon/logo.svg"
          alt=""
          srcset=""
        />
      </router-link>
      <div class="tool_tip" v-if="helperOpen">Вернуться на главную</div>

      <div class="centre">
        <div class="icon_search"></div>
        <input
          type="text"
          class="input_search"
          autocomplete="off"
          placeholder="Поиск..."
          id="input"
          v-model="serachHandler"
          @input="helperChoose(serachHandler)"
        />
        <div class="autocomplite" v-if="searchIsOpen">
          <ul>
            <span
              v-if="searchReusltItems.length === 0 && historyItems.length !== 0"
              class="history_title"
              >История
              <li
                class="history_item"
                v-for="historyItem in historyItems"
                :key="historyItem.id"
              >
                <img
                  src="@/assets/icon/clock_history.png"
                  class="clock_history"
                  alt=""
                  srcset=""
                />{{ historyItem?.title }}
              </li>
            </span>
            <span class="history_title">
              <router-link to="/auto_cart_info">
                <li
                  class="search_item"
                  v-for="searchReusltItem in searchReusltItems"
                  :key="searchReusltItem.id"
                  @click="moreInfo(searchReusltItem)"
                >
                  <img
                    src="@/assets/icon/search.svg"
                    class="clock_history"
                    alt=""
                    srcset=""
                  />{{ searchReusltItem?.title }} (Model:
                  {{ searchReusltItem?.model }})
                </li>
              </router-link>
            </span>
          </ul>
        </div>
      </div>
      <nav-bar
        :favoritesNum="favoritesNum"
        :comprasionNum="comprasionNum"
      ></nav-bar>
      <button @click="featBack" class="feat_back">Обратная связь</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerNavigation",
  data() {
    return {
      searchIsOpen: false,
      serachHandler: "",
      helperOpen: false,
      historyItems: [],
      ru: ("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-"),
      eng: ("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya").split("-"),
      translitRes: '',
    };
  },
  props: {
    leftMenu: {
      type: Array,
    },
    leftMenuOpen: {
      type: Boolean,
    },
    favoritesItems: {
      type: Array,
      required: true,
    },
    categoriesFull: {
      type: Array,
      required: true,
    },
    favoritesNum: {
      type: Number,
      required: true,
    },
    comprasionNum: {
      type: Array,
      required: true,
    },
    searchReusltItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    fastPick(e) {
      this.$emit("fastPick", e);
    },
    aboutCompany(e) {
      this.$emit("aboutCompany", e);
    },
    techCenter(e) {
      this.$emit("techCenter", e);
    },
    rewviews(e) {
      this.$emit("rewviews", e);
    },
    contacts(e) {
      this.$emit("contacts", e);
    },
    featBack(e) {
      this.$emit("featBack", e);
    },
    addHistory(e) {
      if (this.historyItems?.find((auto) => auto === e)) {
        return;
      } else {
        this.historyItems.push(e);
      }
    },
    checkOutClick(e) {
      if (e.currentTarget.id === "123") {
        this.$emit("checkOutClick", e);
      }
    },
    helperChoose(e) {
      if (e === "") {
        this.searchIsOpen = false;
      } else {
        this.searchIsOpen = true;
      }
      
      this.translitRes = '';
      for (var i = 0, l = e.length; i<l; i++) {
        var s = e.charAt(i);
        console.log(e)
        console.log(e.charAt(i))
        var n = this.ru.indexOf(s);
        if(n >= 0) {
          this.translitRes += this.eng[n];
        } else {
          this.translitRes += s;
        }
        console.log(this.translitRes)
        this.$emit("helperChoose", this.translitRes.toLowerCase());
      }
    },
    moreInfo(autoCart) {
      this.$emit("moreInfo", autoCart);
      this.searchIsOpen = false;
      this.serachHandler = `${autoCart.title} (Model:${autoCart.model})`
    },
  },
  mounted() {
    input.onfocus = () => {
      input.classList.add("input_search_focus");
    };
    input.onblur = () => {
      input.classList.remove("input_search_focus");
      setTimeout(() => {
        if (this.serachHandler === "") {
          this.searchIsOpen = false;
        }
      }, 100);
    };
  },
  watch: {
    serachHandler() {
      if (this.searchReusltItems?.length === 0 && this.serachHandler !== "") {
        this.resultText = "Ничего не найдено :(";
      } else {
        this.resultText = "Результат поиска";
      }
    },
  },
};
</script>

<style scoped>

.search_item{
  width: 90%;
  margin-left: 40px;
  padding-left: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  list-style-type: none;
  color: black;
}
.clock_history {
  position: absolute;
  left: -30px;
  top: 5px;
  opacity: 0.5;
}
.history_item {
  width: 90%;
  margin-left: 30px;
  padding-left: 10px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  list-style-type: none;
}
.history_item:hover {
  transition: 0.3s;
  background: rgba(128, 128, 128, 0.132);
}

.search_item:hover {
  transition: 0.3s;
  background: rgba(128, 128, 128, 0.132);
}
.header {
  border-top: none;
  padding: 10px 0px 10px 0px;
}

.header .container {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
}
.list {
  background: none;
  border: none;
  cursor: pointer;
}

.list:hover {
  transition: 0.3s;
  opacity: 0.5;
}

.list_item {
  padding: 30px 0px 30px 0px;
  margin-left: 40px;
}

.list_item a {
  text-decoration: none;
  color: #262626;
}

.list_item li {
  list-style-type: none;
  color: #262626;
}

.list_items {
  width: 250px;
  height: 86vh;
  position: absolute;
  top: 85px;
  left: -300px;
  box-shadow: 0px 1px 5px gray;
  background: #f2f2f2;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 5;
  text-align: left;
  transition: 0.4s;
}
.logo {
  border-right: 1px solid rgba(128, 128, 128, 0.521);
  padding-right: 25px;
}

.logo:hover {
  opacity: 0.5;
  transition: 0.4s;
  border-radius: 10px;
}

.text_logo {
  display: block;
  font-size: 15px;
  font-weight: bold;
  line-height: 3px;
  margin-top: 1rem;
  text-align: left;
  margin-left: 5px;
}

.nav a {
  color: black;
  margin-right: 20px;
}

.nav a:hover {
  transition: 0.3s;
  color: #ca0100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.493);
}

.calls {
  display: block;
  line-height: 25px;
  text-align: right;
  position: relative;
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

.icon_call {
  position: absolute;
  left: 23%;
  top: 54%;
  cursor: pointer;
  z-index: 1;
  width: 20px;
}

.icon_call:hover {
  transition: 0.3s;
  transform: scale(1.1, 1.1);
}

.feat_back {
  padding: 15px 60px 15px 60px;
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

.icon_search {
  position: absolute;
  background: url(@/assets/icon/search.svg);
  width: 22px;
  height: 22px;
  cursor: pointer;
  left: 10px;
}

.centre {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 660px;
  position: relative;
}

.icon_search:hover {
  transition: 0.3s;
  background: url(@/assets/icon/search_red.svg);
  width: 22px;
  height: 22px;
}

.input_search {
  width: 100%;
  border-radius: 5px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #ca0100;
  outline: none;
  padding-left: 40px;
  font-size: 16px;
}

.input_search_focus {
  border: 2px solid #ca0100;
}

.autocomplite {
  position: absolute;
  width: 99.4%;

  max-height: 500px;
  background: red;
  top: 40px;
  cursor: pointer;
  border: 2px solid #ca0100;
  outline: none;
  font-size: 16px;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: none;
  z-index: 99999;
  background: white;
}

.autocomplite ul {
  margin-top: 0px;
  padding-left: 0;
  text-align: left;
  line-height: 35px;
}

.history_title {
  padding-left: 40px;
  font-size: 15px;
 
}

.autocmplite ul li {
  list-style-type: none;
  font-size: 15px;
  width: 100%;
}

.tool_tip {
  position: absolute;
  bottom: -45px;
  left: 235px;
  padding: 10px;
  background: #000000c8;
  color: white;
  border-radius: 5px;
}
</style>
