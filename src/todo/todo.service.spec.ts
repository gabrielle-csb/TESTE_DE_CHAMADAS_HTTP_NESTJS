import { HttpService } from '@nestjs/axios'
import { Test, TestingModule } from '@nestjs/testing'
import { of } from 'rxjs'
import { ITodo } from './interfaces/todo.interface'
import { TodoService } from './todo.service'

describe('TodoService', () => {
  let todoService: TodoService
  let httpService: HttpService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn()
          }
        }
      ]
    }).compile()

    todoService = module.get<TodoService>(TodoService)
    httpService = module.get<HttpService>(HttpService)
  })

  it('should be defined', () => {
    expect(todoService).toBeDefined()
    expect(httpService).toBeDefined()
  })

  describe('getAllTodo', () => {
    it('should return a todo list', async () => {
      // Arrange, prepara as config para o teste
      const expected: ITodo[] = [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false
        }
      ]

      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
          data: expected
        })
      )

      // Act, executa o teste
      const result = await todoService.getAllTodo()

      // Assert, comparação dos vallores
      expect(result).toEqual(expected)
    })
  })
})
