<template>
  <div class="row-board--pegs">
    <PegItem 
      v-for="(color, index) in pegsColors" 
      :key="'pegs'+index"
      :color="color"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import PegItem from '@/components/PegItem/PegItem'
export default {
  name: 'PegsList',
  components: {
    PegItem
  },
  props: {
    numSlots: {
      type: Number,
      default: 0
    },
    indexRow: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      rowsPegs: state => state.rowsPegs,
      pegsColorDefault: state => state.pegsColorOption.default
    }),
    pegsColors() {
        return this.rowsPegs.length > 0 && this.rowsPegs[this.indexRow] 
          ? this.rowsPegs[this.indexRow] : this.defaultColorsArray;
    },
    defaultColorsArray() {
      let array = [];
      for (let index = 0; index < this.numSlots; index+=1) {
        array.push(this.pegsColorDefault);
      }
      return array;
    }
  }
}
</script>
<style lang="scss">
  @import "./PegsList.scss";
</style>