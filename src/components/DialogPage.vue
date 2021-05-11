<template>
  <h1>Dialog实例</h1>
  <h2>实例1</h2>
  <Button :onclick="handleClick">show dialog</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2" :close-on-click-overlay="false">
    <template v-slot:title>
      <strong>厉害的开头</strong>
    </template>
    <template v-slot:content>
      <div>厉害的第一条</div>
      <div>厉害的第二条</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import {ref} from 'vue'
  import Dialog from '../lib/Dialog.vue'
  import Button from '../lib/Button.vue';
  export default {
    setup(){
      const x = ref(false)
      const handleClick = ()=>{
        x.value = !x.value
      }
      const f1 = ()=>{
        console.log('ok')
      }
      const f2 = ()=>{
        console.log('cancel')
      }
      return {x,handleClick,f1,f2}
    },
    components:{Dialog,Button}
  }
</script>