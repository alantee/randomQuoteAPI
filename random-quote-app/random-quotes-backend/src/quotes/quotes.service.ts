import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  async getRandomQuote(): Promise<Quote> {
    const count = await this.quotesRepository.count();
    const randomIndex = Math.floor(Math.random() * count);
    const [quote] = await this.quotesRepository.find({
      skip: randomIndex,
      take: 1,
    });
    return quote;
  }

  async getAllQuotes(): Promise<Quote[]> {
    return this.quotesRepository.find();
  }

  async getQuotesByCharacter(character: string): Promise<Quote[]> {
    return this.quotesRepository.find({ 
      where: { 
        character: character 
      } 
    });
  }

}
