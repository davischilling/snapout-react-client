import { makeLocalStorageAdapter } from '@/main/factories/infra/cache'
import { EventModel } from '@/domain/models'

export const setEventsAdapter = (events: EventModel[]): void => {
  makeLocalStorageAdapter().set('events', events)
}

export const getEventsAdapter = (): EventModel[] => {
  return makeLocalStorageAdapter().get('events')
}
