import * as mongoose from 'mongoose'

export type DoctorQuery = mongoose.MongooseFilterQuery<Pick<IDoctor, 'phone' | 'email' | '_id' | 'doctorname'>>

export interface IDoctor extends mongoose.Document {
  doctorname: string
  phone: string
  email: string
}

export const Doctor = mongoose.model<IDoctor>('Doctor', new mongoose.Schema({
  doctorname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true }
}))
