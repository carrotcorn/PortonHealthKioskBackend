import { COLLINGWOOD, SUNRISE } from './users'
import { InputType } from '../model/checkinformfield'

export const clinics = [
  {
    name: 'Collingwood Medical Clinic',
    phone: '(604) 435-3388',
    address: {
      street: '3150 E 54th Avenue',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postcode: 'V5S 1Z1'
    },
    ownerId: COLLINGWOOD, // replaced with clinic admin's db id by seeder
    formFields: [
      {
        inputType: InputType.LAST_NAME,
        name: 'familyName',
        label: 'Last Name'
      },
      {
        inputType: InputType.BIRTHDAY,
        name: 'birthday',
        label: 'Date of Birth'
      }
    ]
  },
  {
    name: 'Sunrise Medical Clinic',
    phone: '(604) 253-3166',
    address: {
      street: '2280 E Hastings Street',
      city: 'Vancouver',
      province: 'BC',
      country: 'Canada',
      postcode: 'V5L 1V4'
    },
    ownerId: SUNRISE,
    formFields: [
      {
        inputType: InputType.LAST_NAME,
        name: 'familyName',
        label: 'Last Name'
      },
      {
        inputType: InputType.BIRTHDAY,
        name: 'birthday',
        label: 'Date of Birth'
      }
    ]
  }
]
