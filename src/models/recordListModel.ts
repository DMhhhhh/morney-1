import clone from '@/lib/clone';

const localstorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],

  fetch() {
    return JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]') as RecordItem[];
  },
  create(record: RecordItem) {
    const record2 = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
    this.save();
  },
  save() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.data));
  },
};

export default recordListModel;