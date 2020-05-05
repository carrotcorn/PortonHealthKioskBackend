import { Controller } from 'egg'
import UserService from '../service/user'
import { authenticated } from '../util'

export default class UserController extends Controller {
  private userService: UserService = this.service.user

  @authenticated('admin')
  public async findUsers () {
    const result = await this.userService.findUsers(this.ctx.request.body.conditions)
    this.ctx.body = { success: true, result }
  }

  @authenticated('admin')
  public async createUser () {
    const result = await this.userService.createUser(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  @authenticated('admin')
  public async updateUser () {
    const result = await this.userService.updateUser(this.ctx.request.body.conditions, this.ctx.request.body.doc)
    this.ctx.body = { success: true, result }
  }

  public async logIn () {
    const result = await this.userService.logIn(this.ctx.request.body)
    this.ctx.body = { success: true, result }
  }

  @authenticated()
  public async logOut () {
    const result = await this.userService.logOut()
    this.ctx.body = { success: true, result }
  }

  @authenticated()
  public async currentUser () {
    const result = await this.userService.currentUser()
    this.ctx.body = { success: true, result }
  }
}
