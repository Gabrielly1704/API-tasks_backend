import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        name: 'Monica Gabrielly Santos',
        email: 'monicagabrielly@gmail.com',
        password: 'secret',
      },
      {
        name: 'Benjamin Lucca Gomes',
        email: 'benjaminlucca@gmail.com',
        password: 'secret',
      },
    ])
  }
}
