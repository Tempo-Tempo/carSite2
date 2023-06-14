<template>
   
   <div class="footer_footer">
      <div class="container">
         <div class="abc_auto">
            <div class="title_abc_auto">
               © 2021 Автосалон "ABC AUTO". Официальный дилер
               <div class="text_abc">
                  
                  <span class="text_footer_footer "><u>Политика конфиденциальности</u></span>
                  <span class="text_footer_footer user_offer"><u>Пользовательское соглашение</u></span>
               </div>
            </div>
            <div class="text_footer_footer">Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер
                и ни при каких условиях не является публичной офертой,
                 определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации.</div>
               <img class="yandex_5" src="@/assets/img/yandex_5.svg" alt="">

         </div>
      </div>
  </div>
</template>
<script>
export default {
   name: 'footerFooter'
}
</script>


<style scoped>
.footer_footer {
   background-color: black;
}

.footer_footer .container .abc_auto {
   margin-top: -10px;
   padding: 50px 0px 40px 0px;
   display: flex;
   justify-content: space-between;
}

.text_footer_footer {
   font-size: 14px;
   font-weight: normal;
   color: #737373;
   max-width: 613px;
   
}

.text_abc {
   margin-top: 50px;
   display: flex;
   justify-content: space-between;
   cursor: pointer;
}


.title_abc_auto {
   color: white;
   font-weight: normal;
   font-size: 20px;
}

</style>