import * as yup from 'yup';

export const addIncomeSchema = yup.object().shape({
  user_id: yup.number().required('User ID is required'),
  date: yup.date().required('Date is required'),
  amount: yup.number().required('Amount is required'),
  category: yup.number().required('Category is required'),
  inout: yup.string().required("Put if its Income or Outcome"),
  note: yup.string().required('Note is required')
});