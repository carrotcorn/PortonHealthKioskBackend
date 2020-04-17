import { EggAppConfig, PowerPartial } from 'egg'

export default () => {
  const config: PowerPartial<EggAppConfig> = {}
  return {
    ...config,
    connectionString: 'mongodb://localhost/test'
  }
}
