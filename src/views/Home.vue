<template>
  <div>
   <TopNav />
    <div class="banner">
      <h1>UI</h1>
      <h2>一个厉害的UI</h2>
      <p class="actions">
        <a href="">github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import TopNav from '../components/TopNav.vue';
  export default {
    components:{
      TopNav
    }
  }
</script>


<style lang="scss" scoped>
  .topNav{border: 1px solid red;}
</style>