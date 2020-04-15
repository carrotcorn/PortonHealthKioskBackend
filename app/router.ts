import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  router.post('/public/appointment/create', controller.public.createAppointment)
}
