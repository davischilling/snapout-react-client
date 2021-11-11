import { EventModel } from '@/domain/models'

export interface LoadEvents {
  loadAll: () => Promise<EventModel[]>
}
