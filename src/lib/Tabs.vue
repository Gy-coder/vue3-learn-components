<template>
  <div class="g-tabs">
    <div class="g-tabs-nav" ref="container">
      <div class="g-tabs-nav-item"
           :class="{selected: t === selected}"
           @click="handleClick(t)"
           :ref="el=>{if(t === selected) selectedItem = el}"
           v-for="(t,index) in titles" :key="index">{{ t }}
      </div>
      <div class="g-tabs-nav-item-indicator" ref="indicator"></div>
    </div>
    <div class="g-tabs-content">
      <component class="g-tabs-content-item"
                 :class="{selected: c.props.title === selected}"
                 v-for="(c,index) in defaults"
                 :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import {onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = ()=>{
      const {width, left: left2} = selectedItem.value.getBoundingClientRect();
      const {left:left1} = container.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    }
    onMounted(x)
    onUpdated(x)
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs的子组件必须是Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const handleClick = (title) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, handleClick, selectedItem, indicator, container};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.g-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms ease;
      }
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>