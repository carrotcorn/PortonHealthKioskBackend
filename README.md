# porton-health-kiosk-backend

Backend for Porton Health Kiosk

## API Endpoints

    get /csrf

    post /appointment/create
    get /appointment/find
    post /appointment/find
    post /appointment/checkin
    put /appointment/update

    get /clinic/find
    post /clinic/find
    post /clinic/create
    put /clinic/update

    get /doctor/find
    post /doctor/find
    post /doctor/create
    put /doctor/update

    post /user/create
    get /user/find
    post /user/find
    put /user/update
    post /user/login
    post /user/logout
    get /user/current

## How to create the first user

Call /user/create with key: 'd88b8076-3c3f-41cf-9fc3-ca3e923c009a' in the request body.
For example:

    {"username":"example","password":"********","key":"d88b8076-3c3f-41cf-9fc3-ca3e923c009a"}

## Data Models

### Notes

- Any fields ending with '?' are optional
- Appointment.checkedIn should be undefined if the patient is not checked in, or the check in time if the patient is checked in

### Address

    street: string
    street2?: string
    city: string
    province?: string
    country: string
    postcode?: string

### Appointment

    patientId: string
    clinicId: string
    doctorId: string
    time: {
      start: Date
      end: Date
    }
    checkedIn?: Date

### CheckInFormField

    inputType: string
    name: string
    label: string

### Clinic

    name: string
    phone: string
    email?: string
    address: IAddress
    ownerId: string
    formFields: ICheckInFormField[]

### Doctor

    doctorname: string
    phone: string
    email: string

### Patient

    familyName: string
    givenName: string
    age: Number
    address: IAddress
    phone: string
    email?: string
    healthId?: string
    insurance?: {
      company: string
      policyNumber: string
    }

### User

    username: string
    password: string
    roles?: string[]
    disabled?: boolean

## How to call

Make requests to those API endpoints, it will tell you what data is needed.

Some endpoints require that you're logged in and your account has a specific role.

1. Add reference to the client script (assuming that the api server is running at http://localhost:7001/)

        <script src="http://localhost:7001/public/client.js"></script>

2. Make an instance of the client

        const backend = new Backend('http://localhost:7001')

3. Send requests and use the result

        await backend.post('/user/login', {
          username: 'example',
          password: 'password'
        })

        const user = await backend.get('/user/current').result
    
        console.log(user)

### Notes for manual requests

If a request body is attached, specify its type in the request header. For example: content-type: application/json

If expecting a json response, add header accept: application/json

## Authentication

### Login

post /user/login with user credentials, the browser will remember the login session.

Example login request:

    post /user/login
    accept: application/json
    content-type: application/json
    x-csrf-token: 68jP4JZdL7ByskPSO0EXbEG4
    {
      username: 'example',
      password: 'password'
    }

### CSRF

If you don't have a CSRF token, you can get it by sending a request to get /csrf.

    > GET /csrf HTTP/1.1
    < HTTP/1.1 200 OK
    {"success":true,"result":"68jP4JZdL7ByskPSO0EXbEG4"}

All requests other than GET requests must attach CSRF token to prevent CSRF attacks.

The CSRF token can be attached as x-csrf-token header, _csrf in the request body, or in the url query.

Example valid requests:

    put /user/account/update
    x-csrf-token: 68jP4JZdL7ByskPSO0EXbEG4
    {
      conditions: { username: 'example' },
      doc: { password: 'password' }
    }

    put /user/account/update
    {
      conditions: { username: 'example' },
      doc: { password: 'password' }
      _csrf: '68jP4JZdL7ByskPSO0EXbEG4'
    }

    put /user/account/update?_csrf=68jP4JZdL7ByskPSO0EXbEG4
    {
      conditions: { username: 'example' },
      doc: { password: 'password' }
    }

### Testing

If you use tools like postman to test the API, save the cookie from post /user/login, then attach it to the header of subsequent requests.

    Cookie: EGG_SESS=ExampleCookie; csrfToken=68jP4JZdL7ByskPSO0EXbEG4

To bypass authentication (super user mode), add key: 'd88b8076-3c3f-41cf-9fc3-ca3e923c009a' to the request body.

    put /user/account/update
    {
      conditions: { username: 'example' },
      doc: { password: 'password' },
      key: 'd88b8076-3c3f-41cf-9fc3-ca3e923c009a'
    }

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- Use `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
