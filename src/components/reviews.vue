<template>
   <div class="reviews">
         <div class="container">
            <div class="title_reviews">Отзывы</div>
               <div class="reviews_items">
                  <div class="reviews_inner "  v-for="review in reviewsItems" :key="review.id">
                     <div class="head_reviews">
                        <button class="btn_play"><img class="img_play" src="@/assets/img/play.svg" alt=""></button> 
                        <img class="bg_a" src="@/assets/img/bg_a.svg" alt="">
                     </div>
                  <div class="footer_reviews">
                     <div class="title_footer_reviews">{{ review.title }}</div>
                     <div class="text_footer_reviews">
                       {{ review.body }}
                     </div>
                     <div class="more_footer_reviews">
                        <button class="btn_footer_reviews">Подробнее</button>
                     </div>
                  </div>
                  </div>
               </div>
         </div>
      </div>
</template>


<script>
export default {
   name: 'reviews',
   props: {
      reviewsItems: {
         type: Array,
         required: true,
      }
   }
}

</script>

<style scoped>
.reviews {
   margin-top: 100px;
}

.title_reviews {
   font-size: 40px;
   font-weight: bold;
   margin-bottom: 50px;
}


.reviews_items {
   display: flex;
   justify-content: space-between;
   margin-bottom: 50px;
}

.reviews_inner {
   position: relative;
   width: 30%;
   height: 565px;
   border-radius: 20px;
   box-shadow: 0px 1px 5px black;
}

.head_reviews {
   position: absolute;
   top: 0%;
   width: 100%;
   height: 50%;
   background-color: #262626;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
}

.btn_play {
   position: absolute;
   left: 50%;
   top: 47%;
   transform: translate(-50%, -50%);
   background: none;
   border: none;
   cursor: pointer;
   z-index: 1;
}

.btn_play:hover {
   transition: 0.3s;
   transform: translate(-50%, -50%) scale(1.2, 1.2);
}


.bg_a {
   position: absolute;
   left: 50%;
   top: 47%;
   transform: translate(-50%, -50%);
}

.footer_reviews {
   position: absolute;
   width: 100%;
   height: 50%;
   bottom: 0%;
   background-color: #F2F2F2;
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;
   color: #737373;
   font-size: 16px;
   font-weight: normal;
   
}

.title_footer_reviews {
   position: absolute;
   top: 10%;
   left: 5%;
   font-size: 20px;
   font-weight: bold;
   color:#232323
}

.text_footer_reviews {
   position: absolute;
   top: 25%;
   left: 5%;
   max-width: 430px;
}
  
.more_footer_reviews {
   position: absolute;
   bottom: 15%;
   left: 5%;
}

.btn_footer_reviews {
   font-size: 14px;
   font-weight: bold;
   padding: 10px 90px 10px 20px;
   background-color: #E1E1E1;
   border: none;
   border-radius: 20px;
}

.btn_footer_reviews::after {
   position: absolute;
   content: '';
   background: url(@/assets/icon/Vector.svg);
   width: 12px;
   height: 8px;
   right: 6%;
   top: 50%;
   transform: translateY(-50%);
}


</style>