<template>
  <div class="path">
    <ul>
      <li>
        <h3 class="path-title">{{ path.title }}</h3>

        <div class="path__row" v-for="(arr, i) in path.pathData" :key="i">
          <div class="sub-title" v-if="i === 0">
            {{ path.pointStartTitle }} - {{ path.pointEndTitle }}
          </div>
          <div class="sub-title" v-if="i === 1">
            {{ path.pointEndTitle }} - {{ path.pointStartTitle }}
          </div>

          <div class="path__point-wrap">
            <div class="path__point" v-for="(obj, index) in arr"
            :key="index">
              <span class="name-slider text"> {{ obj.title }} </span>
              <Slider
                v-model="obj.rangeValue"
                range
                :step="(1 / 12).toFixed(1)"
                :min="1"
                :max="24"
              />
              <span class="time text">
                <span> c {{ obj.from }} </span>
                <span>
                  до {{ obj.to
                  }}<span v-if="i === 1">, {{ obj.day }}</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </li>

      <li v-for="(it, i) in listData.otherSliders" :key="i">  
        
        <div class="path__point">
          <h3 class="path-title_l">{{ it.title }}</h3>
            <Slider v-model="it.rangeValue" range :step="1 / 12" :min="1" :max="24" />
            <span class="time text">
              <span> c {{ it.from }} ч</span>
              <span> до {{ it.to }} ч</span>
            </span>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Slider from "primevue/slider";

export default {
  components: {
    Slider,
  },
  props: {
    listData: Array,
  },
  data() {
    return {
      path: this.listData.departureAndArrival,
      pathData: this.listData.departureAndArrival.pathData,
    };
  },
};
</script>

<style scoped>
.path {
  position: absolute;
  top: 40px;
  right: 50%;
  transform: translateX(50%);
  max-width: 325px;
  min-width: 325px;
}
.path h3 {
  margin-bottom: 1.6rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: #333;
}
.path__row:not(:last-child){
  margin-bottom: 24px;
}
.sub-title {
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #797979;
}
.name-slider {
  margin-bottom: 1.1rem;
}
.text {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
  color: #797979;
}
.time {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.path ul,
.path__point-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<style>
.p-slider {
  position: relative;
  height: 3px;
  margin-bottom: 1.4rem;
  background-color: #797979;
}
.p-slider-range {
  height: 3px;
  background-color: var(--primary_bg);
}
.p-slider-handle {
  top: 50%;
  height: 16px;
  width: 16px;
  border-radius: 100%;
  background-color: var(--primary_bg);
  transform: translate(-50%,-50%);
  cursor: grab;
}


@media (max-width: 576px) { 
  .path .path-title_l{
    font-size: 14px!important;
font-weight: 400!important;
font-family: Gilroy-Regular!important;
  }  
  .path .path-title{
font-weight: 500!important;
font-family: Gilroy-Medium !important;
  } 
  .sub-title{
font-size: 12px;
  }  
  .path .p-slider{
margin-bottom: 1.1rem ;
  } 
  .path__point-wrap{
    gap: 10px;
  }
  .path__row:not(:last-child){
    margin-bottom: 19px;
  }
}
</style>
