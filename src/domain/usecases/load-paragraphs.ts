import { ParagraphModel } from '@/domain/models'

export interface LoadParagraphs {
  loadAll: () => Promise<ParagraphModel[]>
}
