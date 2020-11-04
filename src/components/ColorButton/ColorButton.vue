<template>
  <div 
    @click="manageEvent(index)"
    class="color-button"
    :class="{'is-option-color': !isGuessButton}"
    :style="`background-color: ${ colorDefined }; color: ${ colorDefined };`"
  >
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'ColorButton',
  props: {
    color: {
      type: String,
      default: 'lightgray'
    },
    index: {
      type: Number,
      default: 0
    },
    isGuessButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      colorDefined: this.color,
    }
  },
  computed: {
    ...mapState([
      'currentColor'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentColor'
    ]),
    manageEvent(index) {
      this.isGuessButton ? this.setColor(index) : this.getColor(index);
    },
    getColor(index) {
      this.setCurrentColor(this.color);
      this.$emit('clicked', index);
    },
    setColor(index) {
      this.colorDefined = this.currentColor;
      this.$emit('clicked', index);
    }
  }
}
</script>
<style lang="scss">
  @import "./ColorButton.scss";
</style>