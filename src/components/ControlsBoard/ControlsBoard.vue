<template>
  <div class="controls-board">
    <div v-if="game" class="controls-board--butons">
      <button @click="sentCheckGuesses()" class="controls-board--check secondary-button" :disabled="!enableCheck"><IconCheck /></button>
      <button @click="resetRow()" class="controls-board--reset secondary-button" :disabled="codeLength == 0"><IconRefresh /></button>
    </div>
    <button @click.prevent="newGame(), reset()" class="controls-board--buton primary-button">New game</button>
  </div>
</template>

<script>
import EventBus from '@/modules/event-bus';
import { mapState, mapActions } from 'vuex';
import IconCheck from '@/components/icons/IconCheck';
import IconRefresh from '@/components/icons/IconRefresh';

export default {
    name: 'ControlsBoard',
    components: {
      IconCheck,
      IconRefresh
    },
    computed: {
      ...mapState({
        code: state => state.code,
        game: state => state.game
      }),
      numberSlots() {
        return this.game.num_slots;
      },
      codeLength() {
        return this.code.length;
      },
      enableCheck() {
        let checkUndefineds = this.code.filter(color => typeof color === 'undefined').length;
        return (checkUndefineds == 0 && this.codeLength == 4);
      }
    },
    methods: {
    ...mapActions({
      newGame: 'createGame',
      sentCheckGuesses: 'sentCheckGuesses',
      resetCode: 'resetCode'
    }),
    reset() {
      EventBus.$emit('reset');
    },
    resetRow() {
      EventBus.$emit('resetRow');
      this.resetCode();
    },
  }
}
</script>
<style lang="scss">
  @import "./ControlsBoard.scss";
</style>