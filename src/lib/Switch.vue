<template>
  <div class="g-switch" :class="{'g-switch-checked' : value}" @click="handleClick">
    <div class="g-switch-toggle-wrapper">
      <div class="g-switch-toggle"></div>
    </div>
  </div>
</template>


<script lang="ts">
  import {ref} from 'vue';

  export default {
    setup() {
      const value = ref<boolean>(false);
      const handleClick = () => {
        value.value = !value.value
      }
      return {value,handleClick}
    }

  };
</script>


<style lang="scss" scoped>
  $w: 60px;
  .g-switch {
    height: $w / 2;
    width: $w;
    background: #C0CCDA;
    border-radius: 999px;
    cursor: pointer;

    &.g-switch-checked {
      background: #20A0FF;

      > .g-switch-toggle-wrapper {
        margin-left: 50%;
      }
    }

    > .g-switch-toggle-wrapper {
      height: 100%;
      width: $w / 2;
      padding: $w / 25;
      transition: .2s;
      margin-left: 0;

      > .g-switch-toggle {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: white;
      }
    }
  }
</style>