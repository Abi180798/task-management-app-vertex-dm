import * as Yup from 'yup'

export const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Minimal 2 character!')
    .max(50, 'Maximal 225 character!')
    .required('Required'),
  dueDate: Yup.string(),
  label: Yup.string().required('Required'),
});