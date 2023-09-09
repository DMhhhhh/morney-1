<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        placeholder="请输入标签名" field-name="标签名">
      </FormItem>
    </div>
    <div class="button-wrapper">
      <CommonButton>删除标签</CommonButton>
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