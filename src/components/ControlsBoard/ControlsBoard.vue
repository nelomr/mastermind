<template>
  <div class="controls-board">
    <div v-if="game" class="controls-board--butons">
      <button class="controls-board--check secondary-button" disabled><IconCheck /></button>
      <button class="controls-board--reset secondary-button" disabled><IconRefresh /></button>
    </div>
    <button @click="newGame()" class="controls-board--buton primary-button">New game</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';
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
        ckeckColors: state => state.ckeckColors,
        game: state => state.game
      }),
      numberSlots() {
        return this.game.num_slots;
      }
    },
    methods: {
    ...mapActions({
      newGame: 'createGame'
    })
  }
}
</script>
<style lang="scss">
  @import "./ControlsBoard.scss";
</style>