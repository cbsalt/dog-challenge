import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  dogname: Yup.string()
    .required('Escolha um nome')
    .min(3, 'Nome é muito curto'),
  selectbreed: Yup.string().required('Selecione uma raça'),
  selectcolor: Yup.string().required('Selecione a cor'),
  selectgender: Yup.string().required('Selecione o sexo'),
  selectage: Yup.number()
    .required('Escolha uma idade')
    .positive('Digite um número válido')
    .integer('Digite um número válido')
    .min(1, 'Idade mínima de 1 ano')
    .max(15, `Idade máxima de ${15} anos`),
});
