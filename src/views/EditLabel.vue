<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        placeholder="请输入标签名" fieldName="标签名" :notes="tag.name" @update:notes="updateTag">
      </FormItem>
    </div>
    <div class="button-wrapper">
      <CommonButton @click.native="remove">删除标签</CommonButton>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import CommonButton from '@/components/Money/CommonButton.vue';

@Component({
  components: {FormItem, CommonButton}
})
export default class EditItem extends Vue {
  tag?: { id: string, name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    tagListModel.fetch;
    const tags = tagListModel.tag;
    const tag = tags.filter(tags => tags.id === id)[0];
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      tagListModel.update(this.tag.id, name);
    }
  }

  remove() {
    tagListModel.remove(this.tag.id);
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {

  }

  > .leftIcon {
    width: 18px;
    height: 18px;
  }

  > .rightIcon {
    width: 18px;
    height: 18px;
  }
}

.form-wrapper {
  background: white;
  margin-top: 8px;
}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 28px;
}
</style>