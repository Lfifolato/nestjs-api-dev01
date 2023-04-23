import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  private livros: Livro[] = [
    {
      id: '001',
      nome: 'Pokemon',
      tipo: 'Aventura',
      valor: 55.5,
    },
    {
      id: '002',
      nome: 'Naturo',
      tipo: 'Ação',
      valor: 10.5,
    },
  ];

  create(createLivroDto: CreateLivroDto) {
    return 'This action adds a new livro';
  }

  findAll() {
    return this.livros;
  }

  findOne(id: string) {
    const livro = this.livros.find((x: Livro) => x.id === id);

    if (!livro) {
      throw new HttpException(`Livro id ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return livro;
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}
