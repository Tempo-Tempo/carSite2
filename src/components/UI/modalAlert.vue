<template>
  <div class="alert_okey alert_okey_offer" :class="{new_closed: !okey}">
    <img class="okey_green" src="@/assets/img/okey_green.png" alt="" />
    <span class="alert_text">Ваша заявка принята</span>
  </div>
  <div class="error_red error_red_offer" :class="{new_closed: !errors}" >
    <img class="okey_green" src="@/assets/img/error_red.jpg" alt="" />
    <span class="alert_text">Заполните все данные</span>
  </div>
</template>

<script>
export default {
   name: 'modalAlert',
   props: {
      okey: {
         type: Boolean,
         required: true,
      },
      errors: {
         type: Boolean,
         required: true,
      },
   },
   data() {
      return {
         alertInfo: '',
      }
   },
  watch: {
   offerNumber() {
      console.log(this.okey)
      console.log(this.errors)
   }
  }
}
</script>

<style>
.alert_okey {
  position: fixed;
  z-index: 4;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
  width: 350px;
  height: 200px;
  box-shadow: 0px 1px 3px rgba(128, 128, 128, 0.39);
  background-color: white;
  border-radius: 20px;
  transition: 0.6s ease-in;
}

.alert_text {
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  width: 100%;
  text-align: center;
}

.okey_green {
  position: absolute;
  z-index: 4;
  width: 100px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s;
}

.error_red {
   position: fixed;
   z-index: 4;
   width: 100px;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   transition: 0.3s;
   width: 350px;
   height: 200px;
   box-shadow: 0px 1px 3px rgba(128, 128, 128, 0.39);
   background-color: white;
   border-radius: 20px;
}
</style>
