<template>
   
   <div class="about_company">
         <div class="container">
            <div class="title_company">О компании</div>
            <div class="company_text">
               Мы располагаем огромной торговой площадкой более 5000 квадратных метров, у нас в наличии не менее 200 
               автомобилей как отечественного, так и иностранного производства. В штате автосалона «Альтера» работают настоящие 
               профессионалы, которые знают особенности каждого конкретного автомобиля.
            </div>
            <div class="video_company">
               <img class="img_company" src="@/assets/img/about_company.svg" alt="" srcset="">
               <button class="btn_play"><img class="img_play" src="@/assets/img/play.svg" alt=""></button> 
            </div>

         </div>
      </div>
</template>

<script>
export default {
   name: 'aboutCompany'
}
</script>

<style scoped>

.about_company .container {
  text-align: center;
   margin-top: 100px;
   margin-bottom: 100px;
}

.title_company {
   color: #262626;
   font-size: 40px;
   font-weight: bold;
   margin-bottom: 30px;
}

.company_text {
   color: #737373;
   font-weight: normal;
   font-size: 16px;
   width: 650px;
   margin: auto;
   margin-bottom: 30px;
}

.video_company {
   position: relative;
   margin-top: 50px;
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

</style>