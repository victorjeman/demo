import { makeAutoObservable } from 'mobx'

export class ListingStore {
  listings: [] = []

  constructor() {
    makeAutoObservable(this)
  }
}
