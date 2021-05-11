<template>
  <div>
    <Button>厉害了</Button>
    <Button theme="button">厉害了</Button>
    <Button theme="text">厉害了</Button>
    <Button theme="link">厉害了</Button>
  </div>
</template>


<script lang="ts">
  import Button from '../lib/Button.vue'
  export default {
    components:{
      Button
    },
    setup(){
      const handleClick = ()=>{
        console.log('hi')
      }
      return {handleClick}
    }
  }
</script>