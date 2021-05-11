<template>
  <div>
    <Button @click="handleClick" @focus="handleClick" @mouseover="handleClick">厉害了</Button>
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