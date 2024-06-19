import { addIncomeSchema } from "@/lib/yup/income";
import { useToast, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Select, Stack } from "@chakra-ui/react";
import { Field, Formik } from "formik";

interface SelectPropsNum {
  value: number;
  label: string;
}

interface SelectPropsStr {
  value: string;
  label: string;
}

const user_id = localStorage.getItem('user_id');

const categories: SelectPropsNum[] = [
  { value: 1, label: "Groceries" },
  { value: 2, label: "Entertainment" },
  { value: 3, label: "Utilities" },
  { value: 4, label: "Transportation" },
  { value: 5, label: "Salary" },
];

const inout: SelectPropsStr[] = [
  { value: "in", label: "Income" },
  { value: "out", label: "Expenses" },
];

const addTransaction = (values, toast, onClose, user_id) => {
  fetch('http://141.147.151.192:8080/add_transaction.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `category_id=${encodeURIComponent(values.category)}&user_id=${encodeURIComponent(user_id)}&amount=${encodeURIComponent(values.amount)}&transaction_date=${encodeURIComponent(values.date)}&description=${encodeURIComponent(values.note)}&in_out=${encodeURIComponent(values.inout)}`,
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      toast({
        title: "Successfully added",
        description: "Your transaction has been successfully added.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      onClose();
      window.location.reload();
    } else {
      console.log("Error adding transaction");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
};

export default function ModalAddTransaction({ onClose }: { onClose: () => void }) {
  const toast = useToast();

  return (
    <Formik
      validationSchema={addIncomeSchema}
      initialValues={{
        date: '',
        amount: '',
        category: '',
        inout: '',
        note: '',
      }}
      onSubmit={(values) => {
        addTransaction(values, toast, onClose, user_id);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>

            <FormControl isRequired
              isInvalid={!!errors.date && touched.date}
            >
              <FormLabel>Date</FormLabel>
              <Field as={Input} type="date" name="date" rounded={'lg'} />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.amount && touched.amount}
            >
              <FormLabel>Amount</FormLabel>
              <InputGroup>
                <InputLeftElement>Rp</InputLeftElement>
                <Field as={Input} type="number" name="amount" rounded={'lg'} ps={9} />
              </InputGroup>
              <FormErrorMessage>{errors.amount}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.category && touched.category}
            >
              <FormLabel>Category</FormLabel>
              <Field as={Select} name="category" rounded={"lg"}>
                <option value="" disabled>Select Category</option>
                {categories.map((item, index) => (
                  <option key={index} value={Number(item.value)}>{item.label}</option>
                ))}
              </Field>
              <FormErrorMessage>{errors.category}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.inout && touched.inout}
            >
              <FormLabel>Income or Expense</FormLabel>
              <Field as={Select} name="inout" rounded={"lg"}>
                <option value="" disabled>Select Income or Expenses</option>
                {inout.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))}
              </Field>
              <FormErrorMessage>{errors.inout}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.note && touched.note}>
              <FormLabel>Note</FormLabel>
              <Field as={Input} name="note" rounded={"lg"} />
              <FormErrorMessage>{errors.note}</FormErrorMessage>
            </FormControl>

            <Flex justify={"end"} align={"center"} gap={3} pt={8}>
              <Button variant="ghost" colorScheme="red" onClick={onClose}>
                Close
              </Button>
              <Button type="submit" colorScheme="blue" w={'fit-content'} px={8} rounded={'lg'}>
                Submit
              </Button>
            </Flex>
          </Stack>
        </form>
      )}
    </Formik>
  )
}