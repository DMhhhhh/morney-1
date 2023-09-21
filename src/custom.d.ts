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