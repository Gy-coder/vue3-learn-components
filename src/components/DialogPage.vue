<template>
  <h1>Dialog实例</h1>
  <h2>实例1</h2>
  <Button :onclick="handleClick">show dialog</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2"/>
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

      }
      const f2 = ()=>{
        console.log('cancel')
      }
      return {x,handleClick,f1,f2}
    },
    components:{Dialog,Button}
  }
</script>