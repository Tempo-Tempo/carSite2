<template>
  <div class="left_Menu" :class="{ new_closed: !leftMenuOpen }">
    <div class="mainMenuItems">
      <div class="navigation_items">
        <div class="title_left_menu">Навигация:</div>
        <div>
          <li class="item_history" @click="fastPick" href="#">Подбор авто</li>
        </div>
        <div>
          <li class="item_history" @click="aboutCompany" href="#">
            О компании
          </li>
        </div>
        <div>
          <li class="item_history" @click="techCenter" href="#">Техцентр</li>
        </div>
        <div>
          <li class="item_history" @click="rewviews" href="#">Отзывы</li>
        </div>
        <div>
          <li class="item_history" @click="contacts" href="#">Контакты</li>
        </div>
      </div>

      <div class="lienar_passive"></div>

      <div class="social">
        <div class="title_left_menu">Наши соц. сети:</div>
        <img src="@/assets/icon/icon-telegram.png" class="icon_params" alt="" />
        <img src="@/assets/icon/icon-whatsapp.png" class="icon_params" alt="" />
        <img src="@/assets/icon/icon-vk.png" class="icon_params" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftMenu",
  data() {
    return {
      leftMenuBody: [],
    };
  },
  props: {
    leftMenuOpen: {
      type: Boolean,
    },
    leftMenu: {
      type: Array,
    },
  },
  methods: {
    fastPick(e) {
      this.$emit("fastPick", "fastPick");
    },
    aboutCompany(e) {
      this.$emit("aboutCompany", "aboutCompany");
    },
    techCenter(e) {
      this.$emit("techCenter", "techCenter");
    },
    rewviews(e) {
      this.$emit("rewviews", "rewviews");
    },
    contacts(e) {
      this.$emit("contacts", "contacts");
    },
    featBack(e) {
      this.$emit("featBack");
    },
    activeItem(e) {
      this.leftMenuBody = [];
      this.leftMenu?.forEach((q) => {
        q.active = false;
        if (q === e) {
          q.active = true;
        }
      });
      this.leftMenu?.forEach((q) => {
        if (q.active === true) {
          q.titleBody.forEach((t) => {
            this.leftMenuBody.push(t);
          });
        }
      });
    },
  },
  mounted() {
    this.activeItem();
  },
 };
</script>

<style scoped>
.active {
  border-left: 2px solid rgba(255, 0, 0, 0.485);
  transform: scale(1.05, 1.05);
}

.item_history {
  width: 130px;
  font-size: 14px;
}

.navigation_items {
  width: 65%;
  display: flex;
  flex-wrap: wrap;
}
.icon_params {
  margin-top: 10px;
  width: 45px;
  height: 45px;
  cursor: pointer;
}

.social {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 30%;
  display: flex;
  flex-wrap: wrap;
}
.icon_params:hover {
  opacity: 0.5;
  transition: 0.3s;
}
.item_history:hover {
  opacity: 0.3;
  transition: 0.3s;
  color: black;
}

.lienar_passive {
  border-right: 1px solid rgba(128, 128, 128, 0.454);
  width: 0px;
  height: 130px;
  margin-right: 40px;
}
.open_sub_menu {
  transition: 0.5s;
}

.title_left_menu {
  font-size: 24px;
  margin-bottom: 10px;
  width: 100%;
}
.mainItem {
  list-style-type: none;
  font-weight: bold;
  font-size: 16px;
  border-bottom: 2px solid rgba(255, 0, 0, 0.485);
  padding-bottom: 15px;
  padding-left: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li {
  list-style-type: none;
}

li:hover {
  cursor: pointer;
  color: rgba(255, 0, 0, 0.485);
}

.title_subMenu {
  border-bottom: 1px solid red;
}

.list_sub_menu {
  line-height: 25px;
  font-weight: normal;
  font-size: 12px;
  padding-left: 5px;
}

.sub_Menu_Item {
  width: 250px;
  font-size: 16px;
  font-weight: bold;
  padding: 30px;
  transition: 0.6s all;
}
.subMenuItems {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 650px;
  transition: 0.6s all;
}

.mainItem:hover {
  transition: 0.1s;
  cursor: pointer;
}

.mainMenuItems {
  display: flex;
  width: 90%;
  padding: 20px 30px 20px 30px;
}

.mainItems {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.left_Menu {
  width: 40%;
  height: 160px;
  position: absolute;
  top: 70px;
  text-align: left;
  background: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 1px 1px 5px gray;
  z-index: 11;
  display: flex;
  transition: 0.4s;
  line-height: 40px;
}
</style>
