import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.post('/public/appointment/create', controller.public.createAppointment)
  router.post('/public/clinic/find', controller.public.findClinics)
  router.get('/clinic/appointment/find', controller.clinic.findAppointments)
  router.post('/clinic/appointment/find', controller.clinic.findAppointments)
  router.put('/clinic/appointment/update', controller.clinic.updateAppointment)
  router.post('/clinic/clinic/create', controller.clinic.createClinic)
  router.put('/clinic/clinic/update', controller.clinic.createClinic)
}
