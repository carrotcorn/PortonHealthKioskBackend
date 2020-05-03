import * as mongoose from 'mongoose'
import { IAddress, Address } from './address'

export type PatientQuery = mongoose.MongooseFilterQuery<
  Pick<
    IPatient,
    | '_id'
    | 'familyName'
    | 'givenName'
    | 'birthday'
    | 'address'
    | 'phone'
    | 'email'
    | 'healthId'
    | 'insurance'
  >
>

export interface IPatient extends mongoose.Document {
  familyName: string
  givenName: string
  birthday: Date
  address: IAddress
  phone: string
  email?: string
  healthId?: string
  insurance?: {
    company: string
    policyNumber: string
  }
}

export const Patient = mongoose.model<IPatient>(
  'Patient',
  new mongoose.Schema({
    familyName: { type: String, required: true },
    givenName: { type: String, required: true },
    birthday: { type: Date, required: true },
    address: { type: Address, required: true },
    phone: { type: String, required: true },
    email: String,
    healthId: String,
    insurance: new mongoose.Schema({
      company: { type: String, required: true },
      policyNumber: { type: String, required: true }
    })
  })
)
