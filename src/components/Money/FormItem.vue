<template>
  <label class="formItem">
    <span class="name">
      {{ this.fieldName }}
    </span>
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
  @Prop({required: true}) fieldName?: string;

  onInput(e: Event) {
    const notes = (e.target as HTMLInputElement).value;
    this.$emit('update:notes', notes);
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>