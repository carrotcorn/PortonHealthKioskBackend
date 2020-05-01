import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.get('/', controller.public.index)
  router.get('/csrf', controller.public.csrf)

  router.post('/appointment/create', controller.appointment.createAppointment)
  router.get('/appointment/find', controller.appointment.findAppointments)
  router.post('/appointment/find', controller.appointment.findAppointments)
  router.post('/appointment/checkin', controller.appointment.checkinAppointment)
  router.put('/appointment/update', controller.appointment.updateAppointment)

  router.get('/clinic/find', controller.clinic.findClinics)
  router.post('/clinic/find', controller.clinic.findClinics)
  router.post('/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/update', controller.clinic.updateClinic)

  router.get('/doctor/find', controller.doctor.findDoctors)
  router.post('/doctor/find', controller.doctor.findDoctors)
  router.post('/doctor/create', controller.doctor.createDoctor)
  router.put('/doctor/update', controller.doctor.updateDoctor)

  router.get('/patient/find', controller.patient.findPatients)
  router.post('/patient/find', controller.patient.findPatients)
  router.post('/patient/create', controller.patient.createPatient)
  router.put('/patient/update', controller.patient.updatePatient)

  router.post('/user/create', controller.user.createUser)
  router.get('/user/find', controller.user.findUsers)
  router.post('/user/find', controller.user.findUsers)
  router.put('/user/update', controller.user.updateUser)
  router.post('/user/login', controller.user.logIn)
  router.post('/user/logout', controller.user.logOut)
  router.get('/user/current', controller.user.currentUser)

  // Deprecated routes for compatibility purposes
  router.post('/clinic/appointment/create', controller.appointment.createAppointment)
  router.get('/public/appointment/find', controller.appointment.findAppointments)
  router.post('/public/appointment/find', controller.appointment.findAppointments)
  router.post('/public/appointment/checkin', controller.appointment.checkinAppointment)
  router.put('/clinic/appointment/update', controller.appointment.updateAppointment)

  router.get('/public/clinic/find', controller.clinic.findClinics)
  router.post('/public/clinic/find', controller.clinic.findClinics)
  router.post('/clinic/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/clinic/update', controller.clinic.createClinic)

  router.get('/public/doctor/find', controller.doctor.findDoctors)
  router.post('/public/doctor/find', controller.doctor.findDoctors)
  router.post('/clinic/doctor/create', controller.doctor.createDoctor)
  router.put('/clinic/doctor/update', controller.doctor.createDoctor)

  router.post('/user/account/create', controller.user.createUser)
  router.get('/user/account/find', controller.user.findUsers)
  router.post('/user/account/find', controller.user.findUsers)
  router.put('/user/account/update', controller.user.updateUser)
}
