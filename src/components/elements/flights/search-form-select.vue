<template>
  <v-select class="search-form-select" :value="value" :options="options">
    <template #option="{ label, imgName }">
      <div class="select-option">
        <img
          :src="'/src/assets/images/icons/' + imgName + '.jpg'"
          :alt="imgName"
          width="20"
          height="14"
        />
        <span>{{ label }}</span>
      </div>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'SearchFormSelect',
  props: {
    value: {
      type: [String, Number, Object],
      default: () => null, 
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data(){
    return{
        default: this.default
    }
  }
};
</script>

<style></style>
