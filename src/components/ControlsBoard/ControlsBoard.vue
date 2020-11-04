<template>
    <div class="controls-board">
        <div class="controls-board--butons">
            <button class="controls-board--check">check</button>
            <button class="controls-board--reset">reset</button>
        </div>
        <button @click="newGame()" class="controls-board--buton">New game</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'ControlsBoard',
    methods: {
    ...mapActions({
      newGame: 'createGame'
    })
  }
}
</script>