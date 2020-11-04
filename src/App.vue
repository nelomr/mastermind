<template>
  <div id="app" class="container">
    <div class="app--title">
      <h1>Mastermind</h1>
      <div></div>
    </div>
    <div class="board-coantainer">
      <ColorList />
      <MainBoard />
      <ControlsBoard />
    </div>
  </div>
</template>

<script>
import ColorList from '@/components/ColorList/ColorList';
import MainBoard from '@/components/MainBoard/MainBoard';
import ControlsBoard from '@/components/ControlsBoard/ControlsBoard';

export default {
  name: 'App',
  components: {
    ColorList,
    MainBoard,
    ControlsBoard
  }
}
</script>
