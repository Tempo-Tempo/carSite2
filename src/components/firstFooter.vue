<template>
  <div class="footer">
    <div class="line_border">a</div>
    <div class="container">
      <div class="header_footer">
        <div class="title_header_footer">Каталог авто</div>
        <div class="title_header_footer">Авто с пробегом</div>
        <div class="title_header_footer">Кредит и рассрочка</div>
        <div class="title_header_footer">Спецпредложения</div>
        <div class="title_header_footer">Такси в кредит</div>
      </div>
      <div class="main_footers">
        <div class="main_footer_left">
          <div class="title_main_footer_left">
            <div class="subtitle_main_footer_left">
              <span class="border_red">Ката</span>лог авто
            </div>
            <span class="text_footer more">Подробнее</span>
            <span class="text_footer map_site">Карта сайта</span>
          </div>
          <div class="catalog_auto">
            <div class="text_footer">Kia</div>
            <div class="text_footer">Hyundai</div>
            <div class="text_footer">Skoda</div>
            <div class="text_footer">Volkswagen</div>
            <div class="text_footer">Toyota</div>
            <div class="text_footer">Brilliance</div>
            <div class="text_footer">Kia</div>
            <div class="text_footer">Hyundai</div>
            <div class="text_footer">Skoda</div>
            <div class="text_footer">Volkswagen</div>
            <div class="text_footer">Toyota</div>
            <div class="text_footer">Brilliance</div>
            <div class="text_footer">Kia</div>
            <div class="text_footer">Hyundai</div>
            <div class="text_footer">Skoda</div>
            <div class="text_footer">Volkswagen</div>
            <div class="text_footer">Toyota</div>
            <div class="text_footer">Brilliance</div>
            <div class="text_footer">Kia</div>
            <div class="text_footer">Hyundai</div>
            <div class="text_footer">Skoda</div>
            <div class="text_footer">Volkswagen</div>
            <div class="text_footer">Toyota</div>
            <div class="text_footer">Brilliance</div>
            <div class="text_footer">Kia</div>
            <div class="text_footer">Hyundai</div>
            <div class="text_footer">Skoda</div>
            <div class="text_footer">Volkswagen</div>
            <div class="text_footer">Toyota</div>
            <div class="text_footer">Brilliance</div>
            <div class="text_footer">Kia</div>
            <div class="text_footer">Hyundai</div>
            <div class="text_footer">Skoda</div>
            <div class="text_footer">Volkswagen</div>
            <div class="text_footer">Toyota</div>
          </div>
        </div>

        <div class="main_footer_right">
          <div class="title_main_footer_right">
            <div class="subtitle_credit_footer_right">
              <span class="border_red">Кред</span>ит и рассрочка
            </div>

            <div class="text_footer_right_credit">
              <div class="text_footer">Экспресс-кредит</div>
              <div class="text_footer">Семейный автомобиль</div>
              <div class="text_footer">Первый автомобиль</div>
              <div class="text_footer">Работникам медицины</div>
              <div class="text_footer">Рассрочка</div>
              <div class="text_footer">Trade-in</div>
            </div>
          </div>

          <div class="contact_find_right">
            <div class="subtitle_contact_footer_right">
              <span class="border_red">Кред</span>ит и рассрочка
            </div>
            <div class="how_find_footer">
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
                  <div class="num_1 text_footer text_decoration_none">
                    +7 (800) 551-94-31
                  </div>
                  <div class="num_2 text_footer text_decoration_none">
                    +7 (800) 551-94-31
                  </div>
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
                <div class="time_text text_footer text_decoration_none">
                  Ежедневно с 08:00 до 21:00
                </div>
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
                <div class="time_text text_footer text_decoration_none">
                  г. Ангарск, 33 мкр., 19-20 УО <br />
                  <span class="scheme"><u> Схема проезда </u></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "firstFooter",
};
</script>

<style>
.footer {
  background-color: #1b1b1b;
  margin: -80px 0px 0px 0px;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  overflow-y: hidden;
}

.compliter {
  list-style-type: none;
  padding: 0px;
  transition: 0.3s;
}

.windowCompliter {
  position: absolute;
  font-size: 16px;
  font-weight: normal;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  width: 281px;
  max-height: 250px;
  background-color: #595d60;
  top: 40%;
  border: none;
  transition: 0.5s;
  overflow: hidden;
}

.line_border {
  position: absolute;
  width: 100%;
  top: 15%;
  color: #1b1b1b;
  border-bottom: 1px solid #737373;
}

.header_footer {
  display: flex;
  position: relative;
  color: white;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-between;
  padding: 40px 0px 40px 0px;
  text-transform: uppercase;
  margin-bottom: 70px;
}

.title_header_footer {
  border-bottom: 1px solid #1b1b1b;
  padding-bottom: 5px;
  cursor: pointer;
}

.title_header_footer:hover {
  transition: 0.3s;
  border-bottom: 1px solid white;
}

.cityes {
  padding-bottom: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 0px black;
  margin-right: 15px;
  cursor: pointer;
}

.cityes:hover {
  transform: scale(1.02, 1.02);
  transition: 0.3s;
}

.map_site {
  position: absolute;
  top: 0%;
  right: 9.2%;
}

.main_footer_left {
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  width: 60%;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 50px;
}

.title_main_footer_left {
  margin-bottom: 60px;
}

.title_main_footer_left .text_footer {
  text-decoration: underline;
  text-transform: none;
  font-weight: normal;
}

.more {
  position: absolute;
  left: 20%;
}

.catalog_auto {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 16px;
  max-height: 205px;
  font-weight: normal;
  justify-content: space-between;
}

.text_footer {
  color: #737373;
  text-decoration: underline;
  margin-bottom: 10px;
  text-transform: none;
  font-size: 16px;
  cursor: pointer;
}

.text_footer:hover {
  opacity: 0.5;
}

.time_text {
  color: #737373;
  text-decoration: underline;
  margin-bottom: 10px;
  text-transform: none;
  font-size: 16px;
}

.title_main_footer_left {
  display: flex;
  justify-content: space-between;
}

.subtitle_main_footer_left .text_footer {
  margin-left: 25px;
}
.border_red {
  padding-bottom: 10px;
  border-bottom: 2px solid #ca0100;
}

.main_footers {
  display: flex;
}

.main_footer_right {
  display: flex;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 40%;
  margin-left: 100px;
}

.subtitle_credit_footer_right {
  margin-bottom: 55px;
}

.text_footer_right_credit {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 16px;
  max-height: 205px;
  font-weight: normal;
}

.subtitle_contact_footer_right {
  margin-left: 100px;
}

.how_find_footer {
  margin-left: 100px;
  margin-top: 55px;
}

.text_decoration_none {
  text-decoration: none;
  font-weight: normal;
}

.scheme {
  color: #ca0100;
  cursor: pointer;
}

.scheme:hover {
  transition: 0.3s;
  opacity: 0.7;
  color: #737373;
}

.specify_location {
  font-size: 16px;
  font-weight: normal;
  padding: 10px 0px 10px 15px;
  border-radius: 5px;
  width: 280px;
  background-color: #595d60;
  cursor: pointer;
  position: relative;
  margin-top: 20px;
  outline: none;
  color: white;
  font-weight: bold;
}

.specify_location::after {
  position: absolute;
  content: "";
  background: url(@/assets/img/Vector_white.svg);
  width: 11px;
  height: 6px;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}

.u_location_now:hover .specify_location::after {
  transition: 0.3s;
  transform: translateY(-50%) rotate(180deg);
}
</style>
