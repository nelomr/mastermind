<template>
  <div 
    :style="`background-color: ${ colorDefined };`"
    class="peg-item"
  />
</template>
<script>
export default {
  name: 'PegsList',
  props: {
    color: {
      type: String,
      default: 'lightgray'
    }
  },
  data() {
    return {
      colorDefined: this.color,
    }
  }
}
</script>