<template>
  <h1>Tabs实例</h1>
  <h2>实例1</h2>
  <Tabs v-model:selected="s">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
  import {ref} from 'vue'
  import Tabs from '../lib/Tabs.vue';
  import Tab from '../lib/Tab.vue';

  export default {
    components:{Tab,Tabs},
    setup(){
      const s = ref('导航2')
      return {s}
    }
  };
</script>