import * as mongoose from 'mongoose'

export enum Province {
  Alberta = 'AB',
  BritishColumbia = 'BC',
  Manitoba = 'MB',
  NewBrunswick = 'NB',
  Newfoundland = 'NL',
  NovaScotia = 'NS',
  NorthwestTerritories = 'NT',
  Nunavut = 'NU',
  Ontario = 'ON',
  PrinceEdwardIsland = 'PE',
  Quebec = 'QC',
  Saskatchewan = 'SK',
  Yukon = 'YT'
}

export interface IAddress {
  street: string
  street2?: string
  city: string
  province?: Province
  country: string
  postcode?: string
}

export const Address = new mongoose.Schema<IAddress>({
  street: { type: String, required: true },
  street2: String,
  city: { type: String, required: true },
  province: String,
  country: { type: String, required: true },
  postcode: String
})
