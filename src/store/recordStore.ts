import clone from '@/lib/clone';

const localstorageKeyName = 'recordList';

const recordStore = {
  //record.store
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localstorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  createRecord(record: RecordItem) {
    const record2 = clone(record);
    record2.createdAt = new Date();
    this.recordList?.push(record2);
    this.saveRecords();
  },
  saveRecords() {
    window.localStorage.setItem(localstorageKeyName, JSON.stringify(this.recordList));
  },
};
recordStore.fetchRecords();
export default recordStore;