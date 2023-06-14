<template>
  <div class="special_header">
    <div class="special_offers_title"><slot name="speciTitle"></slot></div>
    <div class="arrow_rec">
      <button @click="prev" class="arrow_rec_left special_arrow_left">
        <img src="@/assets/icon/arrow_small_left.svg" alt="" />
      </button>
      <button @click="next" class="arrow_rec_right special_arrow_right">
        <img src="@/assets/icon/arrow_small.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "arrowsAndTitle",
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style>
.special_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.special_offers_title {
  font-size: 40px;
  font-weight: bold;
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
</style>
