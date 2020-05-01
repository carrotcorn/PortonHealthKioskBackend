import * as mongoose from 'mongoose'
import { IAddress, Address } from './address'

export interface IAppointment extends mongoose.Document {
  familyName: string
  givenName: string
  age: Number
  time: {
    start: Date,
    end: Date
  }
  address: IAddress
  phone: string
  email?: string
  insurance?: {
    company: string,
    policyNumber: string
  },
  clinicId: string,
  checkedIn?: Date
}

export const Appointment = mongoose.model<IAppointment>('Appointment', new mongoose.Schema({
  familyName: { type: String, required: true },
  givenName: { type: String, required: true },
  age: { type: Number, required: true },
  time: {
    type: new mongoose.Schema({
      start: { type: Date, required: true },
      end: { type: Date, required: true }
    }),
    required: true
  },
  address: { type: Address, required: true },
  phone: { type: String, required: true },
  email: String,
  healthId: String,
  insurance: new mongoose.Schema({
    company: { type: String, required: true },
    policyNumber: { type: String, required: true }
  }),
  clinicId: { type: mongoose.Schema.Types.ObjectId, required: true },
  checkedIn: Date
}))
