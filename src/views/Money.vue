<template>
  <Layout class-prefix="layout">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :type.sync="record.type"></Types>
    <div class="form-wrapper">
      <FormItem :notes.sync="record.notes"
                placeholder="请输入备注" fieldName="备注"></FormItem>
    </div>
    <Tags :selectedTags.sync="record.selectedTags"></Tags>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {FormItem, Tags, Types, NumberPad},
  computed: {
    recordList() {
      return this.$store.state.recordList;
    }
  }
})
export default class Money extends Vue {
  record: RecordItem = {
    selectedTags: [], notes: '', type: '-', amount: 0//amount值会受numberPad内ok函数修改
  };

  created(): void {
    this.$store.commit('fetchRecords');
  }

  saveRecord(): void {
    this.$store.commit('createRecord(this.record)');
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.form-wrapper {
  padding: 12px 0;
}
</style>
