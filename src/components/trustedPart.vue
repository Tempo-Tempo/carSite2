<template>
  <div class="special_offers">
    <div class="container">
      <arrowsAndTitle @next="next" @prev="prev">
         <template #speciTitle>
            Нам доверяют
         </template>
      </arrowsAndTitle>
      <div class="feedbacks">
        <div
          class="item_feedbacks"
          v-for="feedback in feedbacks"
          :key="feedback.id"
          :style="slidePart"
        >
          <div class="title_feedback">{{ feedback.title }}</div>
          <div class="subtitle_feedback">{{ feedback.body }}</div>
          <div class="rating">
            <span class="rating_title">{{ feedback.raiting }}</span>
            <div class="rating_stars">
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span
                ><img src="@/assets/img/star_yellow_grey.svg" alt=""
              /></span>
              <span class="green_bg">4.5</span>
            </div>
          </div>
        </div>
      </div>
      <div class="feedbacks_v2">
        <div class="item_feedbacks_v2">
          <div class="title_feedback_v2">
            <img src="@/assets/img/yandex-maps-logo1.svg" alt="" />
          </div>
          <div class="subtitle_feedback_v2">Название автосалона</div>
          <div class="rating_v2">
            <span class="rating_title_v2">Рекомендуют 90%</span>
            <div class="rating_stars_v2">
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span
                ><img src="@/assets/img/star_yellow_grey.svg" alt=""
              /></span>
            </div>
            <span class="green_bg_v2">4.5</span>
          </div>
        </div>
        <div class="item_feedbacks_v2">
          <div class="title_feedback_v2">
            <img src="@/assets/img/Google_Maps_Logo2.svg" alt="" />
          </div>
          <div class="subtitle_feedback_v2">Название автосалона</div>
          <div class="rating_v2">
            <span class="rating_title_v2">Рекомендуют 90%</span>
            <div class="rating_stars_v2">
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span><img src="@/assets/img/star_yellow.svg" alt="" /></span>
              <span
                ><img src="@/assets/img/star_yellow_grey.svg" alt=""
              /></span>
            </div>
            <span class="green_bg_v2">4.1</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "trustedPart",
  props: {
    feedbacks: {
      type: Array,
      required: true,
    },
  },
  data() {
   return {
      slidePart: {
         overflow: 'visible',
         transform: 'translateX(0px)',
      },
      currentPos: 0,
      
   }
  },
  methods: {
   next() {
      console.log('next')
      this.currentPos += 380;
      console.log(this.currentPos)
      if(this.currentPos === 1520) {
         this.currentPos = 0;
         console.log(this.currentPos)
      }
      this.slidePart.transform = `translateX(-${this.currentPos}px)`
   },
   prev() {
      console.log('prev')
      this.currentPos -= 380;
      if(this.currentPos < 0) {
         this.currentPos = 1140;
      }
      this.slidePart.transform = `translateX(-${this.currentPos}px)`
   }
  }
};
</script>

<style>
.feedbacks {
  display: flex;
  max-width: 2500px;
  height: 300px;
  overflow: hidden;
  margin-bottom: 50px;
  margin-top: 0px;
}

.item_feedbacks {
  position: relative;
  height: 150px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.452);
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 165px 30px 170px;
  margin-top: 50px;
  cursor: pointer;
  margin-right: 25px;
  margin-left: 13px;
  transition: 0.6s;
}

.item_feedbacks:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.452);
}

.title_feedback {
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: #262626;
  margin-bottom: 5px;
  left: 30px;
}

.subtitle_feedback {
  position: absolute;
  top: 27%;
  font-size: 18px;
  font-weight: normal;
  color: #adadb0;
  left: 30px;
}

.rating_stars {
  position: absolute;
  bottom: 14%;
  right: 5%;
}

.rating_title {
  position: absolute;
  bottom: 14%;
  left: 30px;
}

.green_bg {
  background-color: #55bc6b;
  font-size: 18px;
  font-weight: normal;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  margin-left: 10px;
  color: white;
}

.item_feedbacks_v2 {
  width: 40%;
  height: 120px;
  background-color: #eff0f0;
  padding: 40px 60px 40px 60px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
}

.feedbacks_v2 {
  display: flex;
  justify-content: space-between;
}
.item_feedbacks_v2:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.452);
}

.title_feedback_v2 {
  position: absolute;
  top: 40%;
  left: 10%;
  transform: translateY(-50%);
}

.subtitle_feedback_v2 {
  position: absolute;
  top: 57%;
  left: 10%;
  transform: translateY(-50%);
  color: #adadb0;
  font-size: 18px;
  font-weight: normal;
}

.rating_title_v2 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: normal;
  color: #262626;
}

.rating_stars_v2 {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateY(-50%);
}

.green_bg_v2 {
  position: absolute;
  top: 47%;
  right: 5%;
  transform: translateY(-50%);
  padding: 30px 50px 30px 50px;
  background-color: #55bc6b;
  font-size: 43px;
  color: white;
  border-radius: 10px;
}
</style>
