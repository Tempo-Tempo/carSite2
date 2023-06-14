<template>
  <div class="wrapper" id="slider">
    <h1
      v-for="slide in sliderItems"
      :key="slide.id"
      class="main_slider"
      :class="{ hidden: slide.id !== hidden }"
      id="1"
    >
      <div class="wrapper_slider">
        <img
          class="arrow_left"
          @click="slidePrev"
          src="@/assets/img/arrow_left.svg"
          alt=""
        />
        <img
          class="arrow_right"
          @click="slideNext"
          src="@/assets/img/arrow_right.svg"
          alt=""
        />
        <div class="">
          <div class="sliders">
            <div class="title_action">{{ slide.titleAction }}</div>
            <div class="title_slide">{{ slide.titleSlide }} {{ slide.id }}</div>
            <div class="text_slide">{{ slide.textSlide }}</div>
            <div class="slider_radio">
              <label v-for="checkbox in checkBoxItems" @click="certainSlide(checkbox.id)" :key="checkbox.id">
                <input
                  class="slide"
                  type="checkbox"
                  :checked="checkbox.checked"
                  name="slider"
                />
                <span class="castoum_radio"></span>
              </label>
            </div>
          </div>
          <img
            class="bg_city"
            :src="require('../assets/img/' + slide.bgImg)"
            alt=""
          />
          <img
            class="skoda_rapid"
            :src="require('../assets/img/' + slide.imgRapid)"
            alt=""
          />
          <img
            class="rav_new"
            :src="require('../assets/img/' + slide.imgRaw)"
            alt=""
          />
          <img
            class="kio_rio"
            :src="require('../assets/img/' + slide.imgRio)"
            alt=""
          />
        </div>
      </div>
    </h1>
  </div>
</template>
<script>
export default {
  name: "mainSlider",
  props: {
    sliderItems: {
      type: Array,
      required: true,
    },
    checkBoxItems: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      hidden: 1,
      checked: false,
    };
  },
  methods: {
    slidePrev() {
      this.hidden--;
      if (this.hidden === 0) {
        this.hidden = 5;
      }
    },
    slideNext() {
      this.hidden++;
      if (this.hidden > 5) {
        this.hidden = 1;
      }
    },
    certainSlide(e) {
      this.hidden = e;
    }
  },
  watch: {
    hidden() {
      this.checkBoxItems.forEach((item) => {
        if (this.hidden !== item.id) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      });
    }
  }
};
</script>

<style scoped>
.main_slider {
  position: absolute;
  width: 1470px;
  background-color: white;
  height: 600px;
  border-radius: 20px;
  left: 50%;
  transform: translate(-50%);
  margin-top: 40px;
  box-shadow: 0 1px 5px gray;
  transition: all 0.6s;

}
.arrow_left {
  position: absolute;
  left: 1%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  
}


.arrow_left:hover {
  opacity: 0.5;
}

.arrow_right {
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.arrow_right:hover {
  opacity: 0.5;
}
.bg_city {
  position: absolute;
  right: 0%;
  top: 0%;
  z-index: -1;
}

.kio_rio {
  position: absolute;
  right: 21%;
  top: 24%;
  z-index: 1;
}

.rav_new {
  position: absolute;
  right: 12%;
  top: 24%;
}
.skoda_rapid {
  position: absolute;
  right: 7%;
  top: 24%;
}

.title_action {
  display: inline-block;
  padding: 2px 10px 2px 10px;
  background-color: #ca0100;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  margin-left: 50px;
  margin-top: 5%;
}

.title_slide {
  font-size: 55px;
  font-weight: bold;
  margin-left: 50px;
  margin-top: 2%;
  position: absolute;
  top: 20%;
  width: 950px;
  transform: translateY(-30%);
}

.text_slide {
  color: #737373;
  font-size: 24px;
  font-weight: normal;
  margin-left: 50px;
  margin-top: 3%;
  position: absolute;
  bottom: 45%;
}

.slider_radio {
  margin-left: 50px;
  display: flex;

  position: absolute;
  bottom: 20%;
}

.slider_radio input {
  -webkit-appearance: none;
  appearance: none;
}

.castoum_radio {
  position: relative;
  margin-right: 20px;
  cursor: pointer;
}

.castoum_radio::after {
  content: "";
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #73737383;
  border: 5px solid white;
}

.castoum_radio:hover:after {
  opacity: 0.5;
}

.slider_radio input:checked + .castoum_radio::after {
  background-color: white;
  border: 5px solid #ca00009d;
  opacity: 1;
}

.wrapper {
  overflow: hidden;
  display: flex;
  width: 10000px;
  height: 800px;
  
}

.hidden {
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
  overflow-x: hidden;
  transform: scale(1.1);
  transition: all 0.6s;
}
</style>
