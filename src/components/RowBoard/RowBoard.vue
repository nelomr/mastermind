<template>
  <div class="row-board" :class="{'is-current': indexRow === row}">
    <div class="row-board--index" v-text="setIndexRow" />
    <div class="row-board--guesses">
      <ColorButton 
        v-for="(color, index) in numSlots"
        :key="'color'+index"
        :isGuessButton="true"
        :index="index"
        :indexRow="indexRow"
      />
    </div>
    <PegsList 
      :numSlots="numSlots"
      :indexRow="indexRow"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ColorButton from '@/components/ColorButton/ColorButton';
import PegsList from '@/components/PegsList/PegsList';

export default {
  name: 'RowBoard',
  props: {
    indexRow: {
      type: Number,
      default: 0
    }
  },
  components: {
    ColorButton,
    PegsList
  },
  computed: {
    ...mapState({
      numSlots: state => state.defaultConfig.num_slots,
      row: 'row'
    }),
    setIndexRow() {
      return this.indexRow < 9 ? `0${this.indexRow+1}`: this.indexRow+1
    }
  }
}
</script>
<style lang="scss">
  @import "./RowBoard.scss";
</style>