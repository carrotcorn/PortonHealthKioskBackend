import * as mongoose from 'mongoose'
import { IAddress, Address } from './address'

export type PatientQuery = mongoose.MongooseFilterQuery<Pick<IPatient, '_id' | 'familyName' | 'givenName' | 'age' | 'address' | 'phone' | 'email' | 'healthId' | 'insurance'>>

export interface IPatient extends mongoose.Document {
  familyName: string
  givenName: string
  age: Number
  address: IAddress
  phone: string
  email?: string
  healthId?: string
  insurance?: {
    company: string
    policyNumber: string
  }
}

export const Patient = mongoose.model<IPatient>('Patient', new mongoose.Schema({
  familyName: { type: String, required: true },
  givenName: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: Address, required: true },
  phone: { type: String, required: true },
  email: String,
  healthId: String,
  insurance: new mongoose.Schema({
    company: { type: String, required: true },
    policyNumber: { type: String, required: true }
  })
}))
