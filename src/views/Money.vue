<template>
  <Layout class-prefix="layout">
    {{ record }}
    <NumberPad :amount.sync="record.amount"></NumberPad>
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
import {Component} from 'vue-property-decorator';

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
  record: Record = {
    selectedTags: [], notes: '', type: '-', amount: 0
  };
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>