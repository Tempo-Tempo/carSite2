<template>
  <div class="rec">
    <div class="container">
      <arrows-and-title @next="next" @prev="prev">
        <template #speciTitle> Блог </template>
      </arrows-and-title>
      <span class="red">Все статьи</span>
      <div class="blog_items">
        <div
          class="blog_item"
          v-for="blogItem in blogItems"
          :key="blogItem.id"
          :style="blogSlide"
        >
          <img class="img_test" src="@/assets/img/test_skoda.svg" alt="" />
          <div class="title_blog">{{ printDate }}</div>
          <div class="text_blog">
            {{ blogItem.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "meBlog",
  data() {
    return {
      blogSlide: {
        transform: "translateX(-0px)",
      },
      currentPos: 0,
    };
  },
  props: {
    printDate: {
      type: String,
      required: true,
    },
    blogItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    next() {
      this.currentPos += 385;
      if (this.currentPos > 770) {
        this.currentPos = 0;
      }
      this.blogSlide.transform = `translateX(-${this.currentPos}px)`;
    },
    prev() {
      this.currentPos -= 385;
      if (this.currentPos < 0) {
        this.currentPos = 770;
      }
      this.blogSlide.transform = `translateX(-${this.currentPos}px)`;
    },
  },
  
};
</script>

<style scoped>
.rec .container .blog_items {
  display: flex;
  width: 100%;
  margin-bottom: 100px;
  overflow: hidden;
}

.blog_item {
  margin-top: 50px;
  width: 20%;
  margin-right: 85px;
  transition: 0.6s;
}

.title_blog {
  color: #adadb0;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 15px;
  margin-top: 15px;
}

.text_blog {
  font-size: 16px;
  font-weight: bold;
}
.rec .red {
  position: absolute;
  top: 2%;
  left: 15%;
  font-weight: normal;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
