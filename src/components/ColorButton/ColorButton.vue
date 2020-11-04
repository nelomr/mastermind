<template>
    <div class="color-button" :style="`background-color: ${ color }`"></div>
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