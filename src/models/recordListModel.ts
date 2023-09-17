const localstorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],

  clone(data: RecordItem[] | RecordItem) {
    this.data = JSON.parse(JSON.stringify(data));
    return this.data;
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]') as RecordItem[];
  },
  // create() {
  //
  // }
  save() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.data));
  },
  // update() {
  //
  // }
};

export default recordListModel;