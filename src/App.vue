<template>
  <div id="app">
    <ColorButton 
      v-for="(color, index) in colorArray" 
      :key="'color'+index"
      :color="color" 
    />
    <button @click="getGames()">Get games</button>
  </div>
</template>

<script>
import ColorButton from './components/ColorButton/ColorButton';
import { getGame } from './api/apiGame';

export default {
  name: 'App',
  components: {
    ColorButton
  },
  data() {
    return {
      colorArray: ['blue', 'blue', 'orange', 'red']
    }
  },
  methods: {
    getGames() {
      getGame();
    }
  }
}
</script>
