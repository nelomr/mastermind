<template>
  <div class="title-board container">
    <h1>Mastermind</h1>
    <div v-if="game" v-text="`#${game.reference}`"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'Title',
  computed: {
    ...mapState([
      'game'
    ])
  },
}
</script>
<style lang="scss">
  @import "./TitleBoard.scss";
</style>