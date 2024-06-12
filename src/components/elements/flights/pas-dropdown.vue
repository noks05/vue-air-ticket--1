<template>
  <div class="pas">
    <h3>Количество пассажиров</h3>
    <ul v-for="item in items" :key="item.text[0]">
      <li>
        <PasDropdownItem 
        :data="item" 
        :model-value="modelValue" 
        @update:modelValue="updateValue"
        >
        </PasDropdownItem>
      </li>
    </ul>
  </div>
</template>

<script>
import PlusIcon from "@/assets/images/icons/iconsComp/PlusIcon.vue";
import MinusIcon from "@/assets/images/icons/iconsComp/MinusIcon.vue";
import PasDropdownItem from "@/components/elements/flights/pas-dropdown-item.vue";

export default {
  components: {
    PlusIcon,
    MinusIcon,
    PasDropdownItem
  },
  props:{
    modelValue: Object,
  },
  data() {
    return {
      items:[
        {
          text:[
          'Взрослые',
          '12 лет и старше'
          ],
          name: 'adults'
        },
        {
          text:[
          'Дети',
          'от 2 до 11 лет'
          ],
          name: 'childs',
        },
        {
          text:[
          'Младенцы',
          'Младше 2 лет, без места'
          ],
          name: 'babies',
        },
      ]
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
};
</script>

<style scoped>
.pas {
  position: absolute;
  top: 40px;
  right: 0;
  max-width: 330px;
  min-width: 330px;
  font-size: 16px;
  font-family: Gilroy-Medium;
  cursor: initial;
}
.pas h3 {
  margin-bottom: 1.6rem;
  font-size: 16px;
  color: #333;
}

.pas li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.pas li:not(:last-child) {
  margin-bottom: 8px;
}

@media (max-width: 576px) {
  .pas h3{
    font-size: 17px;
    margin-bottom: 1.3rem;
  }
  .pas ul{
    margin-bottom: 1rem;
  }
  .pas__left{
   gap: 0;
  }
}
</style>
