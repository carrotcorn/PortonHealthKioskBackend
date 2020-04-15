import { Service, Context } from 'egg'
import * as mongoose from 'mongoose'

export default class DataService extends Service {
  constructor (ctx: Context) {
    super(ctx)
    mongoose.connect(this.config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  }
}
