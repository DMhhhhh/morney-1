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
  }
};

export default tagListModel;