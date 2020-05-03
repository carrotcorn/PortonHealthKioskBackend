import { Province } from '../model/address'

export const patients = [
  {
    familyName: 'Pelletier',
    givenName: 'Lucas',
    birthday: new Date(2001, 2, 17),
    address: {
      street: '8291 Bay Ave',
      city: 'Trenton',
      province: Province.NewBrunswick,
      country: 'Canada',
      postcode: 'J2M 8C2'
    },
    phone: '189 711 3966',
    healthId: '1111 111 111'
  },
  {
    familyName: 'Gauthier',
    givenName: 'Isabella',
    birthday: new Date(2002, 4, 8),
    address: {
      street: '8496 York St',
      city: 'Havelock',
      province: Province.NovaScotia,
      country: 'Canada',
      postcode: 'U5V 8H2'
    },
    phone: '585 078 4116',
    healthId: '2222 222 222'
  },
  {
    familyName: 'Wong',
    givenName: 'Liam',
    birthday: new Date(2003, 6, 17),
    address: {
      street: '7649 Balmoral St',
      city: 'Westport',
      province: Province.PrinceEdwardIsland,
      country: 'Canada',
      postcode: 'F3S 8Q9'
    },
    phone: '397 686 9764',
    healthId: '3333 333 333'
  },
  {
    familyName: 'Claire',
    givenName: 'Benjamin',
    birthday: new Date(2004, 0, 21),
    address: {
      street: '2750 Maple Ave',
      city: 'Cadillac',
      province: Province.Yukon,
      country: 'Canada',
      postcode: 'R4P 0B0'
    },
    phone: '583 061 7239',
    healthId: '4444 444 444'
  },
  {
    familyName: 'Abraham',
    givenName: 'Xavier',
    birthday: new Date(2005, 8, 13),
    address: {
      street: '3055 Concession Road',
      city: 'Stirling',
      province: Province.NovaScotia,
      country: 'Canada',
      postcode: 'Q0J 1K6'
    },
    phone: '333 229 4593',
    healthId: '5555 555 555'
  },
  {
    familyName: 'Mitchell',
    givenName: 'Hannah',
    birthday: new Date(2006, 6, 12),
    address: {
      street: '6306 Lake of Bays Road',
      city: 'Radisson',
      province: Province.Newfoundland,
      country: 'Canada',
      postcode: 'V8U 9R9'
    },
    phone: '905 027 6457',
    healthId: '6666 666 666'
  }
]
