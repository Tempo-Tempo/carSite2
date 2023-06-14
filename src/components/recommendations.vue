<template>
  <div class="rec">
    <div class="container">
      <div class="header_rec">
        <div class="reс_title">
          <div class="reс_inner">
            <span class="reс_text">Наши подборки</span>
            <span class="red">Все подборки</span>
          </div>
        </div>
        <arrowsAndTitle @next="next" @prev="prev"/>
      </div>

      <div class="type_cars">
        <div
          v-for="recItem in recItems"
          :key="recItem.id"
          @click="test(recItem)"
          class="family_cars"
          :style="styleRec"
          id="family1"
        >
          <div class="info_cars">
            <img
              class="info_img"
              :src="require('../assets/icon/' + recItem.img)"
              width="480"
              height="380"
              alt=""
              srcset=""
            />
            <div class="title_info">
              {{ recItem.title }}
            </div>
            <button class="sh_info">Посмотреть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendations",
  props: {
    recItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      styleRec: {
        transform: "translateX(-0px)",
      },
      nextPos: 0,
    };
  },
  methods: {
    next() {
      this.nextPos = this.nextPos + 500;
      if (this.nextPos === 2000) {
        this.nextPos = 0;
      }
      this.styleRec.transform = `translateX(-${this.nextPos}px)`;
    },
    prev() {
      this.nextPos = this.nextPos - 500;
      if (this.nextPos === -500) {
        this.nextPos = 1500;
      }
      this.styleRec.transform = `translateX(-${this.nextPos}px)`;
    },
  },
};
</script>

<style scoped>
.rec {
  margin-top: 0px;
  display: block;
}

.rec .container .header_rec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 5px;
}

.rec_inner {
  position: relative;
}

.reс_text {
  font-size: 36px;
}

.rec .red {
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-weight: normal;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
}

.rec .red:hover {
  transform: translateY(50%) scale(1.05, 1.05);
}

.arrow_rec_left {
  padding: 15px 20px 15px 20px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.arrow_rec_left:hover {
  transition: 0.3s;
  opacity: 0.6;
}

.arrow_rec_right {
  padding: 15px 20px 15px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.arrow_rec_right:hover {
  transition: 0.3s;
  opacity: 0.6;
}
.dp0 {
  display: none;
}

.type_cars {
  display: flex;
  width: 100%;
  max-height: 380px;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.8s;
}

.info_cars {
  position: relative;
}

.family_cars {
  margin-right: 19px;
  transition: 0.8s;
}
.title_info {
  position: absolute;
  bottom: 10%;
  left: 7%;
  font-size: 22px;
  color: white;
  font-weight: bold;
  width: 200px;
}

.sh_info {
  position: absolute;
  bottom: 10%;
  right: 7%;
  font-size: 16px;
  color: white;
  font-weight: normal;
  border: none;
  background-color: #ca0100;
  padding: 15px 50px 15px 50px;
  border-radius: 10px;
  cursor: pointer;
}

.sh_info:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}
</style>
