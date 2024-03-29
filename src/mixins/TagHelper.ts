import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag(): void {
    const name = window.prompt('请输入标签名');
    if (!name) {
      window.alert('标签名不能为空');
    } else {
      this.$store.commit('createTag', name);
    }
  }
}