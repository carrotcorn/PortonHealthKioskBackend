import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.public.index)
  router.get('/csrf', controller.public.csrf)

  router.post('/appointment/create', controller.clinic.createAppointment)
  router.get('/appointment/find', controller.public.findAppointments)
  router.post('/appointment/find', controller.public.findAppointments)
  router.post('/appointment/checkin', controller.public.checkinAppointment)
  router.put('/appointment/update', controller.clinic.updateAppointment)

  router.get('/clinic/find', controller.public.findClinics)
  router.post('/clinic/find', controller.public.findClinics)
  router.post('/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/update', controller.clinic.createClinic)

  router.get('/doctor/find', controller.public.findDoctors)
  router.post('/doctor/find', controller.public.findDoctors)
  router.post('/doctor/create', controller.clinic.createDoctor)
  router.put('/doctor/update', controller.clinic.createDoctor)

  router.post('/user/create', controller.user.createUser)
  router.get('/user/find', controller.user.findUsers)
  router.post('/user/find', controller.user.findUsers)
  router.put('/user/update', controller.user.updateUser)
  router.post('/user/login', controller.user.logIn)
  router.post('/user/logout', controller.user.logOut)
  router.get('/user/current', controller.user.currentUser)

  // Deprecated routes for compatibility purposes
  router.post('/clinic/appointment/create', controller.clinic.createAppointment)
  router.get('/public/appointment/find', controller.public.findAppointments)
  router.post('/public/appointment/find', controller.public.findAppointments)
  router.post('/public/appointment/checkin', controller.public.checkinAppointment)
  router.put('/clinic/appointment/update', controller.clinic.updateAppointment)

  router.get('/public/clinic/find', controller.public.findClinics)
  router.post('/public/clinic/find', controller.public.findClinics)
  router.post('/clinic/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/clinic/update', controller.clinic.createClinic)

  router.get('/public/doctor/find', controller.public.findDoctors)
  router.post('/public/doctor/find', controller.public.findDoctors)
  router.post('/clinic/doctor/create', controller.clinic.createDoctor)
  router.put('/clinic/doctor/update', controller.clinic.createDoctor)

  router.post('/user/account/create', controller.user.createUser)
  router.get('/user/account/find', controller.user.findUsers)
  router.post('/user/account/find', controller.user.findUsers)
  router.put('/user/account/update', controller.user.updateUser)
}
