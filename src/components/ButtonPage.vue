<template>
  <div>
    <h1>Button样例</h1>
    <h2>实例1</h2>
    <Button :onclick="handleClick">厉害了</Button>
    <Button theme="button">厉害了</Button>
    <Button theme="text">厉害了</Button>
    <Button theme="link">厉害了</Button>
    <h2>实例2</h2>
    <div>
      <div>
        <Button size="big">大大大</Button>
        <Button>普普通</Button>
        <Button size="small">小小小</Button>
      </div>
      <div>
        <Button theme="link" size="big">大大大</Button>
        <Button theme="link">普普通</Button>
        <Button size="small" theme="link">小小小</Button>
      </div>
      <div>
        <Button size="big" theme="text">大大大</Button>
        <Button theme="text">普普通</Button>
        <Button size="small" theme="text">小小小</Button>
      </div>
    </div>
    <h2>实例3</h2>
    <div>
      <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
        </div>
        <div>
          <Button theme="link" level="main">主要链接按钮</Button>
          <Button theme="link">普通链接按钮</Button>
          <Button theme="link" level="danger">危险链接按钮</Button>
        </div>
        <div>
          <Button theme="text" level="main">主要文字按钮</Button>
          <Button theme="text">普通文字按钮</Button>
          <Button theme="text" level="danger">危险文字按钮</Button>
        </div>
      </div>
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
        console.log('厉害了被点击了')
      }
      return {handleClick}
    }
  }
</script>