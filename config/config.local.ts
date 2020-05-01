import { EggAppConfig, PowerPartial } from 'egg'
import { env } from 'process'

export default () => {
  const config: PowerPartial<EggAppConfig> = {}
  config.security = {
    domainWhiteList: ['*']
  }
  return {
    ...config,
    connectionString: env.EGG_SERVER_DB_URI || 'mongodb://localhost/test'
  }
}
