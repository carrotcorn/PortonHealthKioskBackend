import * as mongoose from 'mongoose'

export type AppointmentQuery = mongoose.MongooseFilterQuery<Pick<IAppointment, '_id' | 'patientId' | 'clinicId' | 'doctorId' | 'time' | 'checkedIn'>>

export interface IAppointment extends mongoose.Document {
  patientId: string
  clinicId: string
  doctorId: string
  time: {
    start: Date
    end: Date
  }
  checkedIn?: Date
}

export const Appointment = mongoose.model<IAppointment>('Appointment', new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  clinicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Clinic', required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  time: {
    type: new mongoose.Schema({
      start: { type: Date, required: true },
      end: { type: Date, required: true }
    }),
    required: true
  },
  checkedIn: Date
}))
