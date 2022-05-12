import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'app_postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'database',
      entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
      synchronize: false,
      logging: true

    }),
    TodoModule
  ]
})
export class AppModule { }
