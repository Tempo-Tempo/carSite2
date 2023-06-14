<template>
  <div class="maps_me">
    <div class="container">
      <div class="map">
        <div class="contact_map">
          <div class="call_find">
            <div class="call_red">
              <img
                class="img_call"
                width="9px"
                height="9px"
                src="@/assets/img/call_small.svg"
                alt=""
                srcset=""
              />
            </div>
            <div class="numbers">
              <div class="num_1">+7 (800) 551-94-31</div>
              <div class="num_2">+7 (800) 551-94-31</div>
            </div>
          </div>
          <div class="time_working">
            <div class="call_red">
              <img
                class="img_call"
                width="9px"
                height="9px"
                src="@/assets/img/time.svg"
                alt=""
                srcset=""
              />
            </div>
            <div class="time_text">Ежедневно с 08:00 до 21:00</div>
          </div>
          <div class="time_working">
            <div class="call_red">
              <img
                class="img_call"
                width="9px"
                height="9px"
                src="@/assets/img/location_small.svg"
                alt=""
                srcset=""
              />
            </div>
            <div class="time_text">г. Ангарск, 33 мкр., 19-20 УО</div>
          </div>
          <button class="btn_how_find">
            Как до нас добраться?
          </button>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "findMe",
  data() {
    return {
      apiKey: "31916e9c-7b93-48f2-b783-02f8c1978ab3",
    };
  },
  props: {
    handlerCity: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.map {
  position: relative;
  margin-bottom: 50px;
  height: 800px;
  z-index: 0;
}
i .how_find {
  position: absolute;
  width: 350px;
  height: 208px;
  background-color: #ffffff;
  bottom: 30%;
  right: 5%;
  border-radius: 10px;
  padding: 30px;
  z-index: 2;
  box-shadow: 0px 1px 2px black;
}

.call_find {
  position: relative;
  display: flex;
}

.call_red {
  background-color: #ca0100;
  position: relative;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.call_red:hover {
  transition: 0.3s;
  transform: scale(1.1, 1.1);
}

.numbers {
  font-size: 16px;
}

.img_call {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
}

.time_working {
  display: flex;
  margin-top: 25px;
}

.btn_how_find {
  color: white;
  background-color: #ca0100;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 25px 15px 25px;
  margin-top: 25px;
  border-radius: 10px;
  cursor: pointer;
}

.contact_map {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 1px 5px 10px grey;
}

.btn_how_find:hover {
  transition: 0.3s;
  transform: scale(1.1, 1.1);
}
</style>
