import { MainPage } from '@/presentation/pages'
import { makeRemoteLoadAllModels } from '@/main/factories/data'

import React from 'react'

export const makeMainPage: React.FC = () =>
  <MainPage loadStateModels={makeRemoteLoadAllModels()} />
