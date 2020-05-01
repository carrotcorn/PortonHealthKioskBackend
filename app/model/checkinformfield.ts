import * as mongoose from 'mongoose'

export interface ICheckInFormField {
  inputType: string
  name: string
  label: string
}

export const CheckInFormField = new mongoose.Schema<ICheckInFormField>({
  inputType: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true }
})
