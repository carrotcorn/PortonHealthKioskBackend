import * as mongoose from 'mongoose'

export enum InputType {
  FIRST_NAME = 'FIRST_NAME',
  LAST_NAME = 'LAST_NAME',
  BIRTHDAY = 'BIRTHDAY',
  STREET_ADDRESS = 'STREET_ADDRESS',
  CITY = 'CITY',
  PROVINCE = 'PROVINCE',
  POSTAL_CODE = 'POSTAL_CODE'
}

export interface ICheckInFormField {
  inputType: InputType
  name: string
  label: string
}

export const CheckInFormField = new mongoose.Schema<ICheckInFormField>({
  inputType: { type: String, required: true },
  name: { type: String, required: true },
  label: { type: String, required: true }
})
