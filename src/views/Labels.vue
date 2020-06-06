<template>
  <div class="nav-wrapper">
    <div class="content">
      <p>Labels.vue</p>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Labels',
  };
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    border: 1px solid red;
    height: 99.7vh;
    display: flex;
    flex-direction: column;
  }

  .content{
    border:1px solid blue;
    flex-grow: 1;
    overflow:auto;
  }
</style>