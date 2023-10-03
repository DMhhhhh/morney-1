import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/creatId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
      return this.recordList;
    },
    createRecord(state, record: RecordItem) {
      const record2 = clone(record);
      record2.createdAt = new Date();
      state.recordList?.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },

    //tag
    fetchTag(state): Tag[] {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
      return state.tagList;
    },
    createTag(state, name: string): string {
      const names = state.tagList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        alert('标签名重复，创建标签失败');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id: id, name: name});
      store.commit('saveTag');
      alert('标签创建成功');
      return 'success';
    },
    removeTag(state, id: string) {
      if (id) {
        const idList = state.tagList.map(item => item.id);
        const index = idList.indexOf(id);
        state.tagList.splice(index, 1);
        store.commit('saveTag');
        return true;
      }
    },
    updateTag(state, payload: { id: string, name: string }): string {
      const {id, name} = payload;
      const idList = state.tagList.map(item => item.id);
      if (idList.indexOf(id) >= 0) {
        const nameList = state.tagList.map((item => item.name));
        if (nameList.indexOf(name) >= 0) {
          return 'duplicated';
        } else {
          const tag = state.tagList.filter(item => item.id === id)[0];
          tag.name = name;
          store.commit('saveTag');
          return 'success';
        }
      } else {
        return 'not found';
      }
    },
    findTag(state, id: string): Tag {
      return state.tagList.filter((tags: { id: string; }) => tags.id === id)[0];
    },
    saveTag(state): void {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    }
  },
  actions: {},
  modules: {}
});

export default store;
