import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.tagList = tagListModel.fetch();

window.createTag = (name) => {
  if (name) {
    const message = tagListModel.create(name);
    if (message === 'success') {
      alert('标签创建成功');
    } else if (message === 'duplicated') {
      alert('标签名重复，创建标签失败');
    }
  }
};
window.removeTag = (id) => {
  if (id) {
    return tagListModel.remove(id);
  }
};
window.updateTag = (id, name) => {
  if (id) {
    return tagListModel.update(id, name);
  }
};
window.findTag = (id) => {
  return window.tagList.filter(tags => tags.id === id)[0];
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');