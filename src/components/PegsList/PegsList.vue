<template>
  <div class="row-board--pegs">
    <div 
      v-for="(pegs, index) in numSlots" 
      :key="'pegs'+index"
      :style="`background-color: ${ colorDefined };`"
      class="peg-item"
    />
  </div>
</template>
<script>
export default {
  name: 'PegsList',
  props: {
    color: {
      type: String,
      default: 'lightgray'
    },
    numSlots: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      colorDefined: this.color,
    }
  }
}
</script>
<style lang="scss">
  @import "./PegsList.scss";
</style>