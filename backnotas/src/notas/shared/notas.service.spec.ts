import { Test, TestingModule } from '@nestjs/testing';
import { NotasService } from './notas.service';

describe('NotasService', () => {
  let provider: NotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotasService],
    }).compile();

    provider = module.get<NotasService>(NotasService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
