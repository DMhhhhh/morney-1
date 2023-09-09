<template>
  <Layout>
    <Icon name="left"></Icon>
    <span>编辑标签</span>
    <Notes
      placeholder="请输入标签名"></Notes>
    <CommonButton>删除标签</CommonButton>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import CommonButton from '@/components/Money/CommonButton.vue';

@Component({
  components: {CommonButton, Notes: FormItem}
})
export default class EditItem extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch;
    const tags = tagListModel.tag;
    const tag = tags.find(tags => tags.id === id);
    if (tag) {
      console.log(id);
    } else {
      this.$router.replace('/404');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>