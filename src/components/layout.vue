<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'layout'
};
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
    border: 1px solid blue;
  }
</style>