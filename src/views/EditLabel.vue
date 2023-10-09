<template>
  <Layout>
    <div class="navBar">
      <Icon @click.native="goBack" class="leftIcon" name="left"></Icon>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem
        placeholder="请输入标签名" fieldName="标签名" :notes="currentTag.name" @update:notes="updateTag">
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

@Component({
  components: {FormItem, CommonButton},
})
export default class EditItem extends Vue {
  get currentTag() {
    return this.$store.state.currentTag;
    // 尝试getter写法会不会缓存
  }

  created() {
    this.$store.commit('fetchTag')
    this.$store.commit('setCurrentTag', this.$route.params.id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  }

  updateTag(name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag', {id: this.currentTag.id, name});//搞不懂这个name如何获取的
    }
  }

  remove() {
    if (this.currentTag) {
      this.$store.commit('removeTag', this.currentTag.id);
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