<template>
  <div>
    <layout>
      <div class="tags">
        <router-link class="tag"
                     v-for="tag in tags" :key="tag.id"
                     :to="`/labels/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icon name="right"></Icon>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <CommonButton class="createTag" @click.native="createTag">新建标签</CommonButton>
      </div>
    </layout>
  </div>
</template>

<script lang="ts">
import CommonButton from '@/components/Money/CommonButton.vue';
import Component, {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/TagHelper';

@Component({
  components: {CommonButton},
  computed: {
    tags() {
      return this.$store.state.tagList;
    }
  }
})
export default class Labels extends mixins(TagHelper) {
  created() {
    this.$store.commit('fetchTag');
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}

.createTag {
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>