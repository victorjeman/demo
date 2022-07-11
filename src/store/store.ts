import { createContext, useContext } from 'react'

import { AuthStore } from 'features/auth/store/AuthStore'

const store = {
  actorStore: new AuthStore(),
}

export const useStore = () => {
  return useContext(createContext(store))
}
