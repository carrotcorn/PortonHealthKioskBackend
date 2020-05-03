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

export function inputName (type: InputType) {
  switch (type) {
    case InputType.FIRST_NAME:
      return 'givenName'
    case InputType.LAST_NAME:
      return 'familyName'
    case InputType.BIRTHDAY:
      return 'birthday'
    case InputType.STREET_ADDRESS:
      return 'street'
    case InputType.CITY:
      return 'city'
    case InputType.PROVINCE:
      return 'province'
    case InputType.POSTAL_CODE:
      return 'postcode'
    default:
      throw Error(`invalid input type: ${type}`)
  }
}

export function inputLabel (type: InputType) {
  switch (type) {
    case InputType.FIRST_NAME:
      return 'First Name'
    case InputType.LAST_NAME:
      return 'Last Name'
    case InputType.BIRTHDAY:
      return 'Birthday'
    case InputType.STREET_ADDRESS:
      return 'Street'
    case InputType.CITY:
      return 'City'
    case InputType.PROVINCE:
      return 'Province'
    case InputType.POSTAL_CODE:
      return 'Postal Code'
    default:
      throw Error(`invalid input type: ${type}`)
  }
}

export type CheckInFormFieldQuery = mongoose.MongooseFilterQuery<Pick<ICheckInFormField, '_id' | 'inputType' | 'name' | 'label'>>

export interface ICheckInFormField extends mongoose.Document {
  inputType: InputType
  name: string
  label: string
}

export const CheckInFormField = mongoose.model<ICheckInFormField>(
  'CheckInFormField',
  new mongoose.Schema<ICheckInFormField>({
    inputType: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true }
  })
)
