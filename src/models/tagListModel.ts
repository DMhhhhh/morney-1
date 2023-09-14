const localstorageTagName = 'tagList';
type Tag = {
  id: string,
  name: string
}
type TagListModel = {
  tag: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
}
const tagListModel: TagListModel = {
  tag: [],
  fetch() {
    this.tag = JSON.parse(window.localStorage.getItem(localstorageTagName) || '[]');
    return this.tag;
  },
  create(name) {
    const names = this.tag.map(item => item.name);
    if (names.indexOf(name) >= 0) { return 'duplicated';}
    this.tag.push({id: name, name: name});
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localstorageTagName, JSON.stringify(this.tag));
  },
  update(id, name) {
    const idList = this.tag.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const nameList = this.tag.map((item => item.name));
      if (nameList.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tag.filter(item => item.id === id)[0];
        tag.name = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  }
};

export default tagListModel;