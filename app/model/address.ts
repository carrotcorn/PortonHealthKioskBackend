import * as mongoose from 'mongoose'

export interface IAddress {
  street: string
  street2?: string
  city: string
  province?: string
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
