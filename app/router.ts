import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.public.index)
  router.get('/csrf', controller.public.csrf)

  router.post('/clinic/appointment/create', controller.clinic.createAppointment)
  router.get('/public/appointment/find', controller.public.findAppointments)
  router.post('/public/appointment/find', controller.public.findAppointments)
  router.post('/public/appointment/checkin', controller.public.checkinAppointment)
  router.put('/clinic/appointment/update', controller.clinic.updateAppointment)

  router.get('/public/clinic/find', controller.public.findClinics)
  router.post('/public/clinic/find', controller.public.findClinics)
  router.post('/clinic/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/clinic/update', controller.clinic.createClinic)

  router.post('/user/account/create', controller.user.createUser)
  router.get('/user/account/find', controller.user.findUsers)
  router.post('/user/account/find', controller.user.findUsers)
  router.put('/user/account/update', controller.user.updateUser)
  router.post('/user/login', controller.user.logIn)
  router.post('/user/logout', controller.user.logOut)
  router.get('/user/current', controller.user.currentUser)
}
