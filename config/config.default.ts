import { EggAppConfig, EggAppInfo, PowerPartial, Context } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586975043194_6841'

  // add your egg config in here
  config.middleware = []

  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your special config in here
  const bizConfig = {
    onerror: {
      json (err, ctx: Context) {
        ctx.body = { success: false, error: err }
        ctx.status = 500
      }
    },
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
