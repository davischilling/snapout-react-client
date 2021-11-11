import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { SectionModel } from '@/domain/models'

export const setSectionsAdapter = (sections: SectionModel[]): void => {
  makeLocalStorageAdapter().set('sections', sections)
}

export const getSectionsAdapter = (): SectionModel[] => {
  return makeLocalStorageAdapter().get('sections')
}
