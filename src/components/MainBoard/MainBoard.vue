<template>
    <div class="main-board">
      <RowBoard 
        v-for="(row, index) in defaultConfig.max_guesses"
        :key="'row'+index"
        :indexRow="index"
        :current="currentGuess"
        :reset="reset"
      />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import RowBoard from '@/components/RowBoard/RowBoard';

export default {
  name: 'MainBoard',
  props: ['reset'],
  components: {
    RowBoard
  },
  computed: {
    ...mapState({
      defaultConfig: state => state.defaultConfig,
      currentGuess: state => state.currentGuess
    })
  },
  methods: {
    checkRow(index) {
      return this.currentGuess == index;
    }
  }
}
</script>

<style lang="scss">
  @import "./MainBoard.scss";
</style>