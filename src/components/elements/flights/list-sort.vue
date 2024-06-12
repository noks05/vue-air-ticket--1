<template>
  <div class="list">
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
  max-width: 250px;
  min-width: 250px;
  padding-inline: 1.6rem;
  border-top-left-radius: 7px;
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
  margin-right: 8px;
  opacity: 1;
}
input[type="radio"]:checked ~ .text {
  color: var(--primary_bg);
}
li:not(:last-child) {
  margin-bottom: 10px;
}
</style>
<style>

.svg-mark path{
  stroke: var(--primary_bg);
}

</style>