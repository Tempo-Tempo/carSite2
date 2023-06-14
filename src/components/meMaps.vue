<template>
  <YandexMap
    class="map"
    :settings="settings"
    @click="anyCoords"
    :coordinates="coords"
  >
    <YandexMarker :coordinates="marks" marker-id="test-marker"> </YandexMarker>
  </YandexMap>
</template>

<script>
import { loadYmap } from "vue-yandex-maps";
import { YandexMap, YandexMarker } from "vue-yandex-maps";
export default {
  components: {
    YandexMap,
    YandexMarker,
  },
  name: "meMaps",
  props: {
    handlerCity: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      coords: [52.52490434372626, 103.87414476664263],
      marks: [52.52490434372626, 103.87414476664263],
      settings: {
        apiKey: "31916e9c-7b93-48f2-b783-02f8c1978ab3",
        lang: "ru_RU",
        coordorder: "latlong",
        debug: false,
        version: "2.1",
      },
      markerIcon: {
        layout: "default#image",
        imageHref: "https://cdn-icons-png.flaticon.com/512/2776/2776063.png",
        imageSize: [40, 40],
        imageOffset: [-20, -30],
      },
      zoom: 16,
    };
  },
  methods: {
    anyCoords(e) {
      this.marks = e.get("coords");
    },
  },
  async mounted() {
    await loadYmap(this.settings);
    ymaps.geocode(`${this.handlerCity}`).then(function (res) {
      let test = res.geoObjects.get(0);
    });

    await loadYmap(this.settings);
    ymaps.geocode(`${this.handlerCity}`).then((res) => {
      let newCoords = res.geoObjects.get(0).geometry.getCoordinates();
      this.coords = newCoords;
    });
  },
  watch: {},
};
</script>

<style scoped>
.map {
  position: absolute;
  left: 46.9%;
  top: 43%;
  transform: translate(-50%, -50%);

  width: 43%;
  height: 500px;

  z-index: 9;
}
</style>
