# porton-health-kiosk-backend

Backend for Porton Health Kiosk

## API Endpoints

    post /clinic/appointment/create
    get /public/appointment/find
    post /public/appointment/find
    post /public/appointment/checkin
    put /clinic/appointment/update

    get /public/clinic/find
    post /public/clinic/find
    post /clinic/clinic/create
    put /clinic/clinic/update

    post /user/account/create
    get /user/account/find
    post /user/account/find
    put /user/account/update
    post /user/login
    post /user/logout

## How to call

Make requests to those API endpoints, it will tell you what data is needed.

Some endpoints require that you're logged in and your account has a specific role.

If you use tools like postman to test the API, save the cookie from post /user/login, then attach it to the header of subsequent requests.

    Cookie: EGG_SESS=ExampleCookie

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
