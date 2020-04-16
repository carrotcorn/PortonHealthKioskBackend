import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.post('/clinic/appointment/create', controller.clinic.createAppointment)
  router.post('/public/clinic/find', controller.public.findClinics)
  router.get('/public/appointment/find', controller.public.findAppointments)
  router.post('/public/appointment/find', controller.public.findAppointments)
  router.post('/public/appointment/checkin', controller.public.checkinAppointment)
  router.put('/clinic/appointment/update', controller.clinic.updateAppointment)
  router.post('/clinic/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/clinic/update', controller.clinic.createClinic)
}
