<template>
  <Layout>
    <div class="navBar">
      <Icon @click.native="goBack" class="leftIcon" name="left"></Icon>
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
import FormItem from '@/components/Money/FormItem.vue';
import CommonButton from '@/components/Money/CommonButton.vue';
import store from '@/store/index2';

@Component({
  components: {FormItem, CommonButton}
})
export default class EditItem extends Vue {
  tag?: { id: string, name: string } = {id: '', name: ''};

  created() {
    this.tag = store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.tag) {
      store.updateTag(this.tag.id, name);//搞不懂这个name如何获取的
    }
  }

  remove() {
    if (this.tag) {
      store.removeTag(this.tag.id);
      this.$router.back();
    } else {
      window.alert('删除失败');
    }
  }

  goBack() {
    this.$router.back();
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