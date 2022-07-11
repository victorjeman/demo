import { makeAutoObservable } from 'mobx'

export class AccountStore {
  activity: [] = []

  user: {} = {}

  notifications: any = {
    news: {
      sms: false,
      email: false,
    },
    discount: {
      sms: false,
      email: false,
    },
    messages: {
      sms: false,
      email: false,
    },
    newListing: {
      sms: false,
      email: false,
    },
    priceChange: {
      sms: false,
      email: false,
    },
  }

  constructor() {
    makeAutoObservable(this)
  }
}
