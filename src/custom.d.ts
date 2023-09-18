type RecordItem = {
  selectedTags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: Date
}
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
  remove: (id: string) => void
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: TagListModel['remove'];
  updateTag: TagListModel['update'];
  findTag: (id: string) => Tag | undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}