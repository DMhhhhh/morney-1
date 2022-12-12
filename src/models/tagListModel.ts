const localstorageTagName = 'tagList';
type TagListModel = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localstorageTagName) || '[]');
    return this.data;
  },
  create(name) {
    if (this.data.indexOf(name) >= 0) { return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localstorageTagName, JSON.stringify(this.data));
  }
};

export default tagListModel;