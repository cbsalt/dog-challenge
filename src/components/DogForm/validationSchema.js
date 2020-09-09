import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  dogname: Yup.string()
    .required('Escolha um nome')
    .min(3, 'Nome é muito curto'),
  selectbreed: Yup.string().required('Selecione uma raça'),
  selectage: Yup.number()
    .required('Escolha uma idade')
    .positive()
    .integer()
    .min(1, 'Idade mínima de 1 ano')
    .max(15, 'Idade máxima de 15 anos'),
});
