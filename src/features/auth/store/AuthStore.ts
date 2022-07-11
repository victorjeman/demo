import { makeAutoObservable } from 'mobx'

import { IUser } from 'features/auth/models/authModels'
import { authAPI } from 'features/auth/api/authAPI'

export class AuthStore {
  user: IUser = { name: '' }

  constructor() {
    makeAutoObservable(this)
  }

  login = async ({ name, pass }: { name: string; pass: string }) => {
    const loggedInUser = await authAPI.login({ name, pass })
    this.setUser(loggedInUser)
  }

  resetPassword = async () => {}

  forgotPassword = async () => {}

  setUser = (user: IUser) => {
    this.user = user
  }
}
