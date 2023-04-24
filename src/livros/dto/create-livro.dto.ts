import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DtoMensagem } from 'src/core/Dto/dto.mensagem';
import { DtoTypes } from 'src/core/Dto/dtoType';

export class CreateLivroDto {
  @IsString({ message: DtoMensagem('nome', DtoTypes.IsString) })
  @IsNotEmpty({ message: DtoMensagem('nome', DtoTypes.IsNotEmpty) })
  readonly nome: string;

  @IsString()
  @IsNotEmpty({ message: 'campo deve ser informado' })
  readonly tipo: string;

  @IsNumber()
  @IsNotEmpty({ message: 'campo deve ser informado' })
  readonly valor: number;
}
