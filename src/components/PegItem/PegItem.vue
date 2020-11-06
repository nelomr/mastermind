<template>
  <div 
    :class="{'is-white': newColor === pegsColorOption}"
    :style="`background-color: ${ newColor };`"
    class="peg-item"
  >

  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'PegsItem',
  props: {
    color: {
      type: String,
      default: 'lightgray'
    }
  },
  data() {
    return {
      currentColor: this.color
    }
  },
  computed: {
    ...mapState({
      pegsColorOption: state => state.pegsColorOption.partial
    }),
    newColor() {
      return this.color;
    }
  }
}
</script>
<style lang="scss">
  @import "./PegItem.scss";
</style>