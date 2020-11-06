<template>
  <div class="controls-board">
    <div 
      v-if="game && status == 'running'"
      class="controls-board--buttons"
    >
      <button 
        @click="sentCheckGuesses()"
        class="controls-board--check secondary-button"
        :disabled="!enableCheck"
      >
        <IconCheck />
      </button>
      <button 
        @click="resetRow()"
        class="controls-board--reset secondary-button"
        :disabled="codeLength == 0"
      >
        <IconRefresh />
      </button>
    </div>

    <button 
      @click.prevent="createGame(), reset()"
      class="controls-board--button primary-button"
    >
      New game
    </button>

    <div 
      v-if="manageStatus"
      :class="{'is-won': status === 'won'}"
      class="controls-board--status">
        <div class="controls-board--status-title" v-text="manageTextStatus"></div>
        <div class="controls-board--status-text" v-text="'Solution'"></div>
        <div
          v-for="(code, index) in game.secret_code"
          :key="'color'+index"
          :style="`background-color: ${ code };`"
          class="controls-board--code"
        />
    </div>
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
      ...mapState([
        'code',
        'game',
        'status'
      ]),
      manageStatus() {
        return this.status === 'won' || this.status === 'lost'
      },
      manageTextStatus() {
        return this.status === 'won' ? 'You win': (this.status === 'lost') ? 'You lose': '';
      },
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
    ...mapActions([
      'createGame',
      'sentCheckGuesses',
      'resetCode'
    ]),
    reset() {
      EventBus.$emit('reset');
    },
    resetRow() {
      EventBus.$emit('resetRow');
      this.resetCode();
    }
  }
}
</script>
<style lang="scss">
  @import "./ControlsBoard.scss";
</style>