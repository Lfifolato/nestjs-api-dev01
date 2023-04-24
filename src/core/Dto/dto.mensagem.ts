export const DtoMensagem = (campo: string, error: number) => {
  if (error == 1) {
    return `${campo} || deve ser informado`;
  }
  if (error == 2) {
    return `${campo} || deve ser do tipo String`;
  }
};
