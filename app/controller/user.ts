import { Controller } from 'egg'
import UserService from '../service/user'

export default class UserController extends Controller {
  private userService: UserService = this.service.user

  public async findUsers () {
    const result = await this.userService.findUsers(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }

  public async createUser () {
    const result = await this.userService.createUser(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  public async updateUser () {
    const result = await this.userService.updateUser(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async logIn () {
    const result = await this.userService.logIn(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }
}
