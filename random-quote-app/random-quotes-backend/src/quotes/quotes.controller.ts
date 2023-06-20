import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.entity';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get('random')
  async getRandomQuote() {
    return this.quotesService.getRandomQuote();
  }

  @Get()
  async getAll(): Promise<Quote[]> {
    return this.quotesService.getAllQuotes();
  }

  @Get('/:character')
  async getByCharacter(@Param('character') character: string): Promise<Quote[]> {
    return this.quotesService.getQuotesByCharacter(character);
  }
}