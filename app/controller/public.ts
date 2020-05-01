import { Controller } from 'egg'

export default class PublicController extends Controller {
  public async index () {
    this.ctx.status = 204
  }

  public async csrf () {
    this.ctx.body = { success: true, result: this.ctx.csrf }
  }
}
