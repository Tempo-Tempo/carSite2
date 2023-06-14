<template>
  <form class="form_offers">
    <div class="pos_relative">
      <input
        class="u_name"
        type="text"
        placeholder="Ваше имя"
        v-model="uName"
      />
      <span v-if="errorName" class="error_text_number">Исправтье данные</span>
    </div>
    <div class="pos_relative">
      <input
        class="u_number"
        type="number"
        v-model="uNumber"
        placeholder="Ваш телефон"
      />
      <span v-if="errorNum" class="error_text_name">Исправтье данные</span>
    </div>

    <div class="form_text">
      Нажимая кнопку “Оформить заявку” Вы даете согласие на обработку своих
      <u>персональных данных</u>
    </div>
    <component is="modalAlert" :okey="okey" :errors="errors"> </component>
  </form>
</template>

<script>
export default {
  name: "forOffersForm",
  data() {
    return {
      errorName: false,
      errorNum: false,
      uName: "",
      uNumber: "",
      okey: false,
      errors: false,
    };
  },
  props: {
    startCheck: {
      type: Boolean,
      required: true,
    },
  },

  watch: {
    startCheck() {
      
      if (this.uName === "") {
        this.errorName = true;
        setTimeout(() => {
          this.errorName = false;
        }, 5000);
      }
      if (JSON.stringify(this.uNumber).length !== 11) {
        this.errorNum = !this.errorNum;
        setTimeout(() => {
          this.errorNum = !this.errorNum;
        }, 5000);
      }
    if(this.uName !== "" && JSON.stringify(this.uNumber).length === 11) {
      this.okey = !this.okey;
      setTimeout(() => {
         this.okey = !this.okey  
      }, 2000)
      this.uNumber = '';
      this.uName = '';
    }
      // if (this.uName !== "" && this.uNumber !== "") {
      //   this.okey = !this.okey;
      //   setTimeout(() => {
      //     this.okey = !this.okey;
      //   }, 3000);
      //   this.uName = '';
      //   this.uNumber = '';
      // } else {
      //   this.errors = !this.errors;
      //   setTimeout(() => {
      //     this.errors = !this.errors;
      //   }, 3000);
      // }
    },
  },
};
</script>

<style scoped>
.u_name {
  font-size: 14px;
  font-weight: normal;
  color: #262626;
  outline: none;
  padding: 15px 60px 15px 20px;
  border: none;
 
  border-radius: 10px;
  background-color: #eff0f0;
  cursor: pointer;
}
.u_number {
  font-size: 14px;
  font-weight: normal;
  color: #262626;
  outline: none;
  padding: 15px 60px 15px 20px;
  border: none;
  border-radius: 10px;
  
  background-color: #eff0f0;
  cursor: pointer;
  position: relative;
}

.pos_relative {
  position: relative;
  margin-bottom: 20px;
  margin-right: 10px;
 
}
.form_text {
  font-size: 11px;
  font-weight: normal;
  color: #737373;
  margin-top: 10px;
  margin-bottom: 10px;
}

.form_offers {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: left;
}

.form_text u {
  cursor: pointer;
}

u {
  cursor: pointer;
}

.error_text_number {
  position: absolute;
  font-size: 10px;
  right: 10px;
  top: 18px;
  color: red;
}

.error_text_name {
  position: absolute;
  font-size: 10px;
  right: 10px;
  top: 18px;
  color: red;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
