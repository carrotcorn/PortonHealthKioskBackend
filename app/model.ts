import * as mongoose from 'mongoose'

export interface IAppointment extends mongoose.Document {
  familyName: string
  givenName: string
  age: Number
  time: Date
}

export const Appointment = mongoose.model<IAppointment>('Appointment', new mongoose.Schema({
  familyName: { type: String, required: true },
  givenName: { type: String, required: true },
  age: { type: Number, required: true },
  time: { type: Date, required: true }
}))
