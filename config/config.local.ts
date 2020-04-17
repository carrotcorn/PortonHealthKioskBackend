import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {}
  config.security = {
    domainWhiteList: ['*']
  }
  return {
    ...config,
    connectionString: 'mongodb://localhost/test'
  }
}
