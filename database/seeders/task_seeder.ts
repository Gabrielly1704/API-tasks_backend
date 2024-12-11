import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'

export default class extends BaseSeeder {
  async run() {
    await Task.createMany([
      {
        title: 'Estudar ReactJS',
        description: 'Estudar fundamentos de React',
        userId: 1,
      },
      {
        title: 'Estudar NodeJS',
        description: 'Estudar fundamentos de Node',
        userId: 1,
      },
      {
        title: 'Estudar Matemática',
        description: 'Estudar Matemática Básica',
        userId: 2,
      },
    ])
  }
}
