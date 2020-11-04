<template>
  <div class="row-board">
    <div class="row-board--index" v-text="setIndexRow" />
    <div class="row-board--guesses">
      <ColorButton 
        v-for="(color, index) in defaultConfig.num_slots"
        :key="'color'+index"
        @clicked="onClickButton"
        :isGuessButton="true"
        :index="index"
      />
    </div>
    <PegsList :numSlots="defaultConfig.num_slots" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ColorButton from '@/components/ColorButton/ColorButton';
import PegsList from '@/components/PegsList/PegsList';

export default {
  name: 'RowBoard',
  props: {
    index: {
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
      game: state => state.game,
      defaultConfig: state => state.defaultConfig
    }),
    setIndexRow() {
      return this.index <9 ? `0${this.index+1}`: this.index+1
    }
  },
  methods: {
    onClickButton(value) {
      console.log(value)
    }
  }
}
</script>