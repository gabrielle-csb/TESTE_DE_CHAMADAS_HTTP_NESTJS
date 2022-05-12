import { Controller, Get } from '@nestjs/common'
import { ITodo } from './interfaces/todo.interface'
import { TodoService } from './todo.service'

@Controller('api/v1/todo')
export class TodoController {
  constructor (private readonly todoService: TodoService) {}

  @Get()
  async index (): Promise<ITodo[]> {
    return this.todoService.getAllTodo()
  }
}
