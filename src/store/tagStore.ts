import createId from '@/lib/creatId';

const localstorageTagName = 'tagList';

const tagStore = {
  //tag.store
  tagList: [] as Tag[],
  fetchTag() {
    this.tagList = JSON.parse(window.localStorage.getItem(localstorageTagName) || '[]');
    return this.tagList;
  },
  createTag(name: string) {
    const names = this.tagList.map((item: { name: any; }) => item.name);
    if (names.indexOf(name) >= 0) {
      alert('标签名重复，创建标签失败');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id: id, name: name});
    this.saveTag();
    alert('标签创建成功');
    return 'success';
  },
  removeTag(id: string) {
    if (id) {
      const idList = this.tagList.map(item => item.id);
      const index = idList.indexOf(id);
      this.tagList.splice(index, 1);
      this.saveTag();
    }
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const nameList = this.tagList.map((item => item.name));
      if (nameList.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTag();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  findTag(id: string) {
    return this.tagList.filter((tags: { id: string; }) => tags.id === id)[0];
  },
  saveTag() {
    window.localStorage.setItem(localstorageTagName, JSON.stringify(this.tagList));
  }
};
tagStore.fetchTag();
export default tagStore;