import * as yup from 'yup';

export const addExpenseSchema = yup.object().shape({
  date: yup.date().required('Date is required'),
  amount: yup.number().required('Amount is required'),
  category: yup.string().required('Category is required'),
  account: yup.string().required('Account is required'),
  note: yup.string().optional(),
});