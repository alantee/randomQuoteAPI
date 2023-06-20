import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './quotes/quote.entity';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './quotes.db',
      entities: [Quote],
      synchronize: true,
    }),
    QuotesModule,
  ],
})
export class AppModule {}
