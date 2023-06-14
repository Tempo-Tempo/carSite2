<template>
   <div  class="page_btns" v-show="this.viewsAuto > 6">
      <button :class="{inactive_btn: page <= 1}"  class="prev_page" @click="prevPage">Prev</button>
      <input type="number" :value="page" class="current_page" name="" id="">
      <button :class="{inactive_btn: viewsAuto < limitItemsPage}" class="next_page" @click="nextPage">Next</button>
   </div>
</template>

<script>
export default {
   name: 'pageNumbers',
   props: {
      page: {
         type: Number,
         required: true,
      },
      limitItemsPage: {
         type: Number,
         required: true,
      },
      viewsAuto: {
         type: Number,
         required: true,
      }
   },
   methods: {
      prevPage() {
        this.$emit('prevPage')

      },
      nextPage() {
         this.$emit('nextPage')
         
      }
   }
}
</script>

<style scoped>

.page_btns {
   margin-top: 20px;
}


.current_page {
   width: 50px;
   height: 30px;
   border-radius: 5px;
   border: none;
   background: rgb(255, 255, 255);
   padding-left: 10px;
}

.next_page {
   width: 80px;
   height: 30px;
   margin-left: 15px;
   border-radius: 5px;
   border: none;
   cursor: pointer;
   color: white;
   font-weight: bold;
   background-color: #ca0100;
}

.next_page:hover {
   opacity: 0.5;
   transition: 0.3s;
}

.prev_page:hover {
   opacity: 0.5;
   transition: 0.3s;
}
.prev_page {
   width: 80px;
   height: 30px;
   margin-right: 15px;
   border-radius: 5px;
   border: none;
   background: rgb(226, 225, 225);
   color: white;
   font-weight: bold;
   background-color: #ca0100;
   cursor: pointer;
}

.inactive_btn {
   opacity: 0.5;
   cursor: default;
}

</style>