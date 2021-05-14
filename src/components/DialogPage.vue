<template>
  <h1>Dialog实例</h1>
  <h2>实例1</h2>
  <Button :onclick="handleClick">show dialog</Button>
  <Dialog v-model:visible="defaults" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>厉害的开头</strong>
    </template>
    <template v-slot:content>
      <div>厉害的第一条</div>
      <div>厉害的第二条</div>
    </template>
  </Dialog>
  <h2>示例2</h2>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
  import {ref} from 'vue';
  import Dialog from '../lib/Dialog.vue';
  import Button from '../lib/Button.vue';
  import {openDialog} from '../lib/openDialog.ts';

  export default {
    setup() {
      const defaults = ref(false);
      const handleClick = () => {
        defaults.value = !defaults.value;
      };
      const f1 = () => {
        console.log('ok');
      };
      const f2 = () => {
        console.log('cancel');
      };
      const showDialog = () => {
        openDialog({
          title: '标题',
          content: '内容',
          ok:()=>{console.log('showDialog ok')},
          cancel:()=>{console.log('shaDialog close')},
          closeOnClickOverlay: false,
        })
      };
      return {defaults, handleClick, f1, f2,showDialog};
    },
    components: {Dialog, Button}
  };
</script>