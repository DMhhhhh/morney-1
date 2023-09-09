<template>
  <Layout class-prefix="layout">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :type.sync="record.type"></Types>
    <FormItem :notes.sync="record.notes"
              placeholder="请输入备注"></FormItem>
    <Tags :selectedTags.sync="record.selectedTags"
          :tags.sync="tags"></Tags>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {FormItem, Tags, Types, NumberPad}
})
export default class Money extends Vue {
  tags = tagList.map(item => item.name);
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    selectedTags: [], notes: '', type: '-', amount: 0//amount值会受numberPad内ok函数修改
  };

  saveRecord() {
    const record2 = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
