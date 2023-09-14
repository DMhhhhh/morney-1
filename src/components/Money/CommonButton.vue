<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default class CommonButton extends Vue {

}
</script>

<style scoped>
button {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
}
</style>