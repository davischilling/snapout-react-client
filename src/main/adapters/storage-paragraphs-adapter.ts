import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { ParagraphModel } from '@/domain/models'

export const setParagraphsAdapter = (paragraphs: ParagraphModel[]): void => {
  makeLocalStorageAdapter().set('paragraphs', paragraphs)
}

export const getParagraphsAdapter = (): ParagraphModel[] => {
  return makeLocalStorageAdapter().get('paragraphs')
}
