import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.entity';

describe('QuotesController', () => {
  let controller: QuotesController;
  let service: QuotesService;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [
        QuotesService,
        { provide: getRepositoryToken(Quote), useValue: mockRepository },
      ],
    }).compile();

    controller = module.get<QuotesController>(QuotesController);
    service = module.get<QuotesService>(QuotesService);
  });


  describe('getRandom', () => {
    it('should return a random quote', async () => {
      const result: Quote = {quote_id: 1, quote: "I'm not superstitious, but I am a little stitious.", character: "Michael"};
      jest.spyOn(service, 'getRandomQuote').mockImplementation(() => Promise.resolve(result));

      expect(await controller.getRandomQuote()).toBe(result);
    });
  });

  describe('getByCharacter', () => {
    it('should return quotes from a specific character', async () => {
      const characterName: string = 'Michael';
      const result: Quote[] = [
        {quote_id: 1, quote: "I'm not superstitious, but I am a little stitious.", character: "Michael"},
        {quote_id: 2, quote: "I declare bankruptcy!", character: "Michael"}
      ];
      jest.spyOn(service, 'getQuotesByCharacter').mockImplementation(() => Promise.resolve(result));

      expect(await controller.getByCharacter(characterName)).toBe(result);
    });
  });

  describe('getAll', () => {
    it('should return all quotes', async () => {
      const result: Quote[] = [
        {quote_id: 1, quote: "I'm not superstitious, but I am a little stitious.", character: "Michael"},
        {quote_id: 2, quote: "I declare bankruptcy!", character: "Michael"},
        {quote_id: 3, quote: "Bears, beets, Battlestar Galactica.", character: "Jim"}
      ];
      jest.spyOn(service, 'getAllQuotes').mockImplementation(() => Promise.resolve(result));

      expect(await controller.getAll()).toBe(result);
    });
  });
});

