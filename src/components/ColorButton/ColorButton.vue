<template>
    <div class="color-button" :class="`is-${ color }`"></div>
</template>

<script>
export default {
    name: 'ColorButton',
    props: {
        color: {
            type: String,
            default: 'red'
        }
    }
}
</script>
<style lang="scss">
  @import "./ColorButton.scss";
</style>