import { SectionModel } from '@/domain/models'

export interface LoadSections {
  loadAll: () => Promise<SectionModel[]>
}
