<template>
  <label class="notes">
    <span class="name">备注</span>
    <input :value="notes"
           @input="onInput"
           type="text"
           :placeholder="this.placeholder">
  </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop(String) readonly notes!: string;
  @Prop() placeholder?: string;

  onInput(e: Event) {
    const notes = (e.target as HTMLInputElement).value;
    this.$emit('update:notes', notes);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>