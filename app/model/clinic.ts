import * as mongoose from 'mongoose'
import { ICheckInFormField, CheckInFormField } from './checkinformfield'
import { IAddress, Address } from './address'

export interface IClinic extends mongoose.Document {
  name: string
  phone: string
  email?: string
  address: IAddress
  ownerId: string
  formFields: ICheckInFormField[]
}

export const Clinic = mongoose.model<IClinic>('Clinic', new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  address: { type: Address, required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  formFields: [CheckInFormField]
}))
