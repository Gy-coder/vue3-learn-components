<template>
  <div class="g-switch" :class="{'g-switch-checked' : value}" @click="handleClick">
    <div class="g-switch-toggle-wrapper">
      <div class="g-switch-toggle"></div>
    </div>
    <div>{{value}}</div>
  </div>
</template>


<script lang="ts">
  import {ref} from 'vue';

  export default {
    props: {
      value: {
        type: Boolean,
      }
    },
    setup(props, context) {
      const handleClick = () => {
        context.emit('update:value', !props.value);
      };
      return {handleClick};
    }

  };
</script>


<style lang="scss" scoped>
  $w: 44px;
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
      transition: margin-left 250ms;
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