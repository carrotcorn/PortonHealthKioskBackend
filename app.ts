import { Boot } from 'egg'
import * as mongoose from 'mongoose'

export default class AppBootHook extends Boot {
  configDidLoad () {
    mongoose.connect(this.config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  }
}
