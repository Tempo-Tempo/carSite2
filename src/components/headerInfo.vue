<template>
  <div class="info">
    <div class="bg_for_compliter" :class="{ new_closed: !serachCity }" @click.stop="closeOutClick">
      <div class="form_compliter">
        <div class="windowCompliter" :class="{ new_closed: compliter }">
          <ul class="compliter">
            <li
              class="cityes"
              v-for="city in currentCity"
              :key="city.id"
              @click="takeCity(city.name)"
            >
              <b> {{ city.name }}</b
              >, <br />{{ country }}, {{ city.parent_id }}
            </li>
          </ul>
        </div>
        <div class="u_location_now">
          <input
            v-model="handlerInput"
            @input="hanldeInput"
            v-on:keyup.enter="takeCity(currentCity[0].name)"
            class="specify_location"
            placeholder="Поиск вашего города..."
          />
        </div>
      </div>
      <meMaps v-if="compliter" :handlerCity="pickedCity"></meMaps>
    </div>
    <div class="container">
      <div class="location" @click="openComp">
        <div class="icon_location"></div>
        <div class="info_location">
          {{ pickedCity.name }}
        </div>
      </div>
      <div class="work_time">
        <div class="icon_work"></div>
        <div class="info_work">Время работы: c 08:00 до 21:00</div>
      </div>

      <div class="social">
        <div class="icon_wathsapp"></div>
        <a class="wathsapp" href="#">Wathsapp</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerInfo",
  data() {
    return {
      handlerInput: "",
      compliter: true,
      serachCity: false,
      country: "Россия",
      pickedCity: { name: "Ангарск" },
    };
  },
  props: {
    currentCity: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openComp() {
      this.serachCity = !this.serachCity;
    },
    hanldeInput() {
      if (this.handlerInput !== "") {
        this.compliter = false;
      } else {
        this.compliter = true;
      }
      this.$emit("hanldeInput", this.handlerInput);
    },
    takeCity(handlerCity) {
      this.handlerInput = handlerCity;
      this.pickedCity.name = handlerCity;
      console.log(this.pickedCity);
      this.compliter = true;
      this.$emit("handleСity", handlerCity);
      this.handlerInput = "";
    },
    closeOutClick(e) {
      if(e.target.classList.value === 'bg_for_compliter') {
        this.openComp();
      }
    }
  },
};
</script>

<style scoped>
.form_compliter {
  position: absolute;
  left: 47%;
  top: 40%;
  transform: translate(-50%, -50%);
  background: white;
  width: 880px;
  height: 600px;
  border-radius: 20px;
  padding-left: 20px;
}
.bg_for_compliter {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background: #00000039;
  z-index: 999;
}
.compliter {
  list-style-type: none;
  padding: 0px;
  transition: 0.3s;
}

.windowCompliter {
  position: absolute;
  font-size: 14px;
  font-weight: normal;
  margin-left: 25px;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  width: 88%;
  max-height: 480px;
  background-color: #595d6019;
  top: 13%;
  border: none;
  transition: 0.5s;
  overflow: hidden;
}

.cityes {
  padding-bottom: 10px;
  margin-bottom: 15px;
  margin-right: 15px;
  cursor: pointer;
}

.cityes:hover {
  transform: scale(1.01, 1.01);
  transition: 0.3s;
}
.specify_location {
  font-size: 14px;
  font-weight: normal;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  margin-left: 25px;
  width: 90%;
  background-color: #595d6044;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  outline: none;
  color: white;
  border: none;
  height: 25px;
}
.u_location_now:hover .specify_location::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
}
.info {
  background-color: #73737321;
  font-size: 14px;
  font-weight: normal;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #737373;
}

.info .container {
  display: flex;
  justify-content: space-between;
}

.work_time {
  margin-right: 25%;
  display: flex;
  position: relative;
  margin-left: 50px;
}

.icon_work {
  display: block;
  background: url(@/assets/icon/work_time_icon.svg);
  width: 16px;
  height: 16px;
  margin-right: 7px;
}
.icon_location {
  display: block;
  background: url(@/assets/icon/location_icon.svg);
  width: 15px;
  height: 16px;
  margin-right: 7px;
}
.location {
  display: flex;
  position: relative;
  cursor: pointer;
}

.location:hover {
  opacity: 0.5;
}
.social {
  display: flex;
  position: relative;
}
.icon_wathsapp {
  display: block;
  background: url(@/assets/icon/whatsapp_icon.svg);
  width: 20px;
  height: 20px;
  margin-right: 7px;
}

a {
  text-decoration: none;
  outline: none;
}

.wathsapp {
  color: #737373;

  outline: none;
}

.wathsapp:hover {
  border-bottom: 1px solid #737373;
}

.marks_auto {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 30px;
}

.auto_item {
  display: flex;
  margin-top: 8px;
  align-items: center;
  margin-left: 20px;
  padding-left: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.check_answer {
  position: relative;
  z-index: 3;
}

.check_answer::before {
  position: absolute;
  content: "Данные не заполнены";
  z-index: 4;
  font-size: 14px;
  color: #ca0100;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -55px;
  text-align: center;
  transition: 0.3s;
  font-weight: normal;
}
</style>
