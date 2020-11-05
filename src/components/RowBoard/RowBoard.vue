<template>
  <div class="row-board" :class="{'is-current': indexRow === currentGuess}">
    <div class="row-board--index" v-text="setIndexRow" />
    <div class="row-board--guesses">
      <ColorButton 
        v-for="(color, index) in defaultConfig.num_slots"
        :key="'color'+index"
        :isGuessButton="true"
        :index="index"
        :indexRow="indexRow"
      />
    </div>
    <PegsList 
      :numSlots="defaultConfig.num_slots"
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
      defaultConfig: state => state.defaultConfig,
      currentGuess: state => state.currentGuess,
      code: state => state.code
    }),
    setIndexRow() {
      return this.indexRow <9 ? `0${this.indexRow+1}`: this.indexRow+1
    }
  }
}
</script>
<style lang="scss">
  @import "./RowBoard.scss";
</style>