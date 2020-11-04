<template>
  <div class="color-list" :class="{'is-loaded': loaded }">
    <ColorButton 
      v-for="(color, index) in listColors" 
      :key="'color'+index"
      @clicked="onClickButton"
      :color="color"
      :index="index"
      :class="{'is-selected': indexSelected == index }"
    />
  </div>
</template>
<script>
import ColorButton from '@/components/ColorButton/ColorButton';
import { mapState } from 'vuex';

export default {
    name: 'ColorList',
    components: {
      ColorButton
    },
    data() {
      return {
        indexSelected: null
      }
    },
    computed: {
      ...mapState([
        'listColors',
        'loaded'
      ])
    },
    methods: {
      onClickButton(value) {
        this.indexSelected = value;
      }
    }
}
</script>
<style lang="scss">
  @import "./ColorList.scss";
</style>