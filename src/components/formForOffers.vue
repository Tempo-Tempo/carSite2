<template>
  <div
    @click="modalIsClose"
    class="bg_for_modal"
    :class="{ new_closed: !modalIsOpen }"
  >
    <modalAlert :okey="okey" :errors="errors" />
    <div class="name_number">
      <form class="form_name_number">
        <input
          class="you_name"
          placeholder="Ваше имя"
          type="text"
          name=""
          id="you_name_offer"
          v-model="uName"
        />
        <input
          class="you_number you_number_offer"
          placeholder="Ваш телефон"
          type="text"
          name=""
          id="you_number_offer"
          v-model="uNumber"
          @input="errorAlert"
        />
        <span class="err_num" :class="{ new_closed: !errNumber }"
          >Введие корректный номер телефона</span
        >
        <button
          type="button"
          class="btn_name_number"
          id="btn_accept_name_number"
          @click="accpetOffer"
        >
          Получить предложение
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "formForOffers",
  data() {
    return {
      uName: "",
      uNumber: "",
      errNumber: false,
      okey: false,
      errors: false,
    };
  },
  methods: {
    accpetOffer() {
      if (this.uName !== "" && this.uNumber.length === 11) {
        this.okey = true;
        setTimeout(() => {
          this.okey = false;
          this.$emit("modalIsClose");
          this.uName = '';
          this.uNumber = '';
        }, 3000);
        
      } else {
        this.errors = true;
        setTimeout(() => {
          this.errors = false;
        }, 3000);
      }
      if (this.uNumber.length !== 11) {
        this.errNumber = true;
        setTimeout(() => {
         this.errNumber = false;
        }, 6000)
      }
      
    },
   
    modalIsClose(e) {
      if (e.target.className === "bg_for_modal") {
        this.$emit("modalIsClose");
      }
    },
  },
  props: {
    modalIsOpen: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    uNumber() {
      return (this.uNumber = this.uNumber.replace(/[^0-9+]/g, ""));
    },
  },
};
</script>

<style scoped>
.bg_for_modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.541);
  z-index: 10;
  transition: 0.6s;
}

.err_num {
  position: absolute;
  right: 10%;
  top: 45%;
  font-size: 13px;
  font-weight: bold;
  color: red;
  transition: 0.6s;
}
.you_name {
  padding: 15px 350px 15px 20px;
  margin-bottom: 15px;
  border: 1px solid #e1e1e1;
  background-color: #eff0f0;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.you_number {
  padding: 15px 350px 15px 20px;
  margin-bottom: 15px;
  border: 1px solid #e1e1e1;
  background-color: #eff0f0;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.btn_name_number {
  padding: 15px 163px 15px 164px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  background-color: #ca0100;
  color: white;
  cursor: pointer;
}

.btn_name_number:hover {
  transition: 0.3s;
  transform: scale(1.05, 1.05);
}

.name_number {
  position: absolute;
  top: 30%;
  left: 30%;
}
.form_name_number {
  background: white;
  width: 550px;
  height: 200px;
  padding: 50px;
  border-radius: 15px;
}
</style>
