<template>
  <div id="app">
    <TitleBoard />
    <div class="board-coantainer container">
      <ColorList />
      <MainBoard />
      <ControlsBoard />
    </div>
  </div>
</template>

<script>
import TitleBoard from '@/components/TitleBoard/TitleBoard';
import ColorList from '@/components/ColorList/ColorList';
import MainBoard from '@/components/MainBoard/MainBoard';
import ControlsBoard from '@/components/ControlsBoard/ControlsBoard';

export default {
  name: 'App',
  components: {
    TitleBoard,
    ColorList,
    MainBoard,
    ControlsBoard
  }
}
</script>
