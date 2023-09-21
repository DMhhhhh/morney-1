import tagListModel from '@/models/tagListModel';

export default {
  //tag.store
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'success') {
        alert('标签创建成功');
      } else if (message === 'duplicated') {
        alert('标签名重复，创建标签失败');
      }
    }
  },
  removeTag: (id: string) => {
    if (id) {
      return tagListModel.remove(id);
    }
  },
  updateTag: (id: string, name: string) => {
    if (id) {return tagListModel.update(id, name);} else {return 'not found';}
  },
  findTag(id: string) {
    return this.tagList.filter((tags: { id: string; }) => tags.id === id)[0];
  },
};