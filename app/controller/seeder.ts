import { Controller } from 'egg'
import SeederService from '../service/seeder'

export default class SeederController extends Controller {
  private seederService: SeederService = this.service.seeder

  public async seedDatabase () {
    const result = await this.seederService.seedDatabase()
    this.ctx.body = { success: true, result }
  }
}
