import * as yup from 'yup';

export const addTransferSchema = yup.object().shape({
  date: yup.date().required('Date is required'),
  amount: yup.number().required('Amount is required'),
  from: yup.string().required("Source From is required"),
  to: yup.string().required("Transfer to is required"),
  note: yup.string().optional(),
});