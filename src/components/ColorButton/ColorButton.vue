<template>
  <div 
    @click="manageEvent(index)"
    class="color-button"
    :class="{'is-option-color': !isGuessButton, 'is-white': colorDefined === 'white'}"
    :style="`background-color: ${ colorDefined }; color: ${ colorDefined };`"
  >
  </div>
</template>

<script>
import EventBus from '@/modules/event-bus';
import { mapState, mapActions } from 'vuex';

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
    indexRow: {
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
      'currentColor',
      'guessRowColors',
      'row',
      'status'
    ])
  },
  created() {
    EventBus.$on('reset', () => {
      this.reset();
    });
    EventBus.$on('resetRow', () => {
      this.resetRow();
    });
  },
  methods: {
    ...mapActions([
      'addColorToCheck',
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
      if(this.row == this.indexRow && this.status == 'running') {
        this.currentColor != null && this.addColorToCheck({color: this.currentColor, indexArray: index});
        this.colorDefined = this.currentColor;
      }
    },
    reset() {
      Object.assign(this.$data,this.$options.data.call(this));
    },
    resetRow() {
      (this.row === this.indexRow) && Object.assign(this.$data,this.$options.data.call(this));
    }
  }
}
</script>
<style lang="scss">
  @import "./ColorButton.scss";
</style>