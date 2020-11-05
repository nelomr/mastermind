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
      game: state => state.game,
      row: state => state.row,
      pegsArray: state => state.pegsColors
    }),
    pegsColors() {
      //console.log(this.indexRow, this.row, this.pegsArray);
      if(this.indexRow == (this.row - 1)) {
        return this.pegsArray.length > 0 ? this.pegsArray : this.defaultColorsArray;
      }
      return this.defaultColorsArray;
    },
    defaultColorsArray() {
      let array = [];
      for (let index = 0; index < this.numSlots; index+=1) {
        array.push('gray');
      }
      return array;
    }
  }
}
</script>
<style lang="scss">
  @import "./PegsList.scss";
</style>