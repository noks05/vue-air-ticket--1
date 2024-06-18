<template>
  <div class="list">
    <h3>Сортировка</h3>
    <ul>
      <li v-for="item in listData.items" :key="item.id">
       <label>
         <input 
         class="visually-hidden"
         type="radio" 
         :name="listData.name" 
         :id="item.id" 
         :checked="item.checked"
         @click="item.checked = true"
         >
         <span class="mark">
          <CheckIcon class="svg-mark"/>
         </span>
         <span class="text">{{ item.text }}</span>
       </label>
      </li>
    </ul>
  </div>
</template>

<script>
import  CheckIcon  from '@/assets/images/icons/iconsComp/CheckIcon.vue';

export default {
  components:{
    CheckIcon
  },
  props:{
    listData: {
      name: String,
      items:Array
    },
  },
};
</script>

<style scoped>
.list {
  position: absolute;
  top: 40px;
  right: 0;
  max-width: 214px;
  min-width: 214px;
  padding-inline: 1.6rem;
  border-top-left-radius: 7px;
}
.list h3{
  display: none;
  margin-bottom: 1.6rem;
  margin-left: 0.6rem;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  font-family: Gilroy-Medium !important;
  color: #333;
}
label{
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s, filter 0.2s;
}
label:hover{
  color: var(--primary_bg);
}
label:active{
 filter: brightness(0.3);
}

.mark {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 0;
  background-color: transparent;
  opacity: 0;
  transition: width 0.2s, opacity 0.2s,margin-right 0.2s;
}
.text{
  font-size: 14px;
  font-weight: 300;
  line-height: 100%;
}
input[type="radio"]:checked+.mark {
  width: 16px;
  margin-inline: 7px;
  opacity: 1; 
}
input[type="radio"]:checked ~ .text {
  color: var(--primary_bg);
}
li:not(:last-child) {
  margin-bottom: 10px;
}

@media (max-width:576px) {
  .list h3{
    display: block;
  }
  .text{
    font-size: 12px;
  }
  label{
    margin-bottom: 0;
  }
}
</style>
<style>

.svg-mark path{
  stroke: var(--primary_bg);
}

</style>