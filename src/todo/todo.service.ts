import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'
import { ITodo } from './interfaces/todo.interface'

@Injectable()
export class TodoService {
  constructor (private readonly httpService: HttpService) { }

  async getAllTodo (): Promise<ITodo[]> {
    let todos: ITodo[] = []
    const url = 'http://jsonplaceholder.typicode.com/todos'

    const { status, data } = await lastValueFrom(this.httpService.get<ITodo[]>(url))
    if (status === 200) {
      todos = data
    }

    return todos
  }
}
