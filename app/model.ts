import * as mongoose from 'mongoose'

export interface IAddress {
  street: string,
  street2?: string,
  city: string,
  province?: string,
  country: string,
  postcode?: string
}

export const Address = new mongoose.Schema({
  street: { type: String, required: true },
  street2: String,
  city: { type: String, required: true },
  province: String,
  country: { type: String, required: true },
  postcode: String
})

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

export interface IClinic extends mongoose.Document {
  name: string
  phone: string
  email?: string
  address: IAddress
  ownerId: string
}

export const Clinic = mongoose.model<IClinic>('Clinic', new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  address: { type: Address, required: true },
  ownerId: { type: mongoose.Schema.Types.ObjectId, required: true }
}))
