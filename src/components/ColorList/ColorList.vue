<template>
    <div class="color-list">
        <ColorButton 
            v-for="(color, index) in listColors" 
            :key="'color'+index"
            :color="color" 
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
            prueba: null
        }
    },
    computed: {
        ...mapState([
           'listColors'
        ])
    },
    updated() {
        this.prueba = 'update'
    }
}
</script>
<style lang="scss">
  @import "./ColorList.scss";
</style>