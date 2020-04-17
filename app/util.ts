import { User, IUser } from './model'
import { BaseContextClass, Context, EggAppConfig } from 'egg'

export function authenticated (role?: string) {
  return function (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...any) => Promise<any>>) {
    console.log(target, propertyKey, descriptor)
    if (!(target instanceof BaseContextClass)) {
      throw new ReferenceError('Decorator used at wrong place')
    }
    const method = descriptor.value
    descriptor.value = async function (...args) {
      const ctx: Context = (this as any).ctx
      const config: EggAppConfig = (this as any).config
      const user: IUser = ctx.session?.user
      if (ctx.request.body?.key === config.key) {
        return method!.call(this, ...args)
      }
      if (!user) {
        throw new ReferenceError('Not logged in')
      }
      const result = await User.findById(user._id).exec()
      if (role && !result?.roles?.includes(role)) {
        throw new ReferenceError(`Access denied. Require ${role} role.`)
      }
      return method!.call(this, ...args)
    }
  }
}
