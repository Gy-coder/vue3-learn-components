<template>
  <h1>Dialog实例</h1>
  <h2>实例1</h2>
  <Button :onclick="handleClick">show dialog</Button>
  <Dialog :visible="x"/>
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
      return {x,handleClick}
    },
    components:{Dialog,Button}
  }
</script>