<template>
  <div class="list">
    <h3>{{listTitle}}</h3>
    <ul>
      <li v-for="item in listData" :key="item.name">
       <label>
         <input 
         class="visually-hidden"
         type="checkbox" 
         :name="item.name" 
         :id="item.name" 
         :checked="item.state === 'checked'"
         :disabled="item.state === 'disabled'"
         @click="item.state === 'checked' ? item.state = 'enabled': item.state='checked'"
         >
         <span class="mark">
          <CheckIcon/>
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
    listTitle: String,
    listData: Array,
  },
};
</script>

<style scoped>
div.list {
  position: absolute;
  top: 40px;
  right: 50%;
  transform: translateX(50%);
  max-width: 230px;
  padding-block: 2.2rem;
}
.list h3 {
  margin-bottom: 1.4rem;
  font-size: 16px;
  line-height: 100%;
  color: #333;
}
.list label {
  margin-bottom: 0;
  cursor: initial;
}
.mark {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  border-radius: 3px;
  border: 2px solid #797979;
  background-color: transparent;
  cursor: pointer;
}
.text{
  cursor: pointer;
}
input[type="checkbox"]:checked+.mark {
  border-color: var(--primary_bg);
  background-color: var(--primary_bg);
  cursor: pointer;
}
input[type="checkbox"]:checked ~ .text {
  color: var(--primary_bg);
  cursor: pointer;
}
input[type="checkbox"]:disabled+.mark {
  background-color: #F5F5F5;
  border-color: #F5F5F5;
  pointer-events: none;
  cursor: none;
}
input[type="checkbox"]:disabled+.text {
  color: #F5F5F5;
  pointer-events: none;
  cursor: none;
}

label{
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-family: Gilroy-Medium;
  cursor: pointer;
}
ul {
  margin-bottom: 0;
}
li:not(:last-child) {
  margin-bottom: 4px;
}
</style>
