<template>
    <div class="main-board">
      <RowBoard />
    </div>
</template>

<script>
import RowBoard from '@/components/RowBoard/RowBoard';

export default {
  name: 'MainBoard',
  components: {
    RowBoard
  }
}
</script>

<style lang="scss">
  @import "./MainBoard.scss";
</style>