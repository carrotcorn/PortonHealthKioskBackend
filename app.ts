import { Boot } from 'egg'
import * as mongoose from 'mongoose'
import seedDatabase from './app/seeder'

export default class AppBootHook extends Boot {
  configDidLoad () {
    mongoose
      .connect(this.config.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        seedDatabase(this.config)
      })
  }
}
