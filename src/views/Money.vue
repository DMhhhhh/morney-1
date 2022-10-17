<template>
  <Layout class-prefix="layout">
    {{ record }}
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"></NumberPad>
    <Types :type.sync="record.type"></Types>
    <Notes :notes.sync="record.notes"></Notes>
    <Tags :selectedTags.sync="record.selectedTags"
          :tags.sync="tags"></Tags>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

type Record = {
  selectedTags: string[]
  notes: string
  type: string
  amount: number
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: Record[] = [];
  record: Record = {
    selectedTags: [], notes: '', type: '-', amount: 0
  };

  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>