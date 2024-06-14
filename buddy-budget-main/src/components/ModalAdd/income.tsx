import { addIncomeSchema } from "@/lib/yup/income";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Select, Stack } from "@chakra-ui/react";
import { Field, Formik } from "formik";

interface SelectProps {
  value: string;
  label: string;
}

const categories: SelectProps[] = [
  { value: "allowance", label: "Allowance" },
  { value: "salary", label: "Salary" },
  { value: "petty_cash", label: "Petty Cash" },
  { value: "bonus", label: "Bonus" },
  { value: "other", label: "Other" },
];

const accounts: SelectProps[] = [
  { value: "cash", label: "Cash" },
  { value: "card", label: "Card" },
  { value: "account", label: "Account" }
];

export default function ModalFormIncome({ onClose }: { onClose: () => void }) {
  return (
    <Formik
      validationSchema={addIncomeSchema}
      initialValues={{
        date: undefined,
        amount: undefined,
        account: "",
        category: "",
        note: undefined,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired
              isInvalid={!!errors.date && touched.date}
            >
              <FormLabel>
                Date
              </FormLabel>
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
                  <option key={index} value={item.value}>{item.label}</option>
                ))}
              </Field>
              <FormErrorMessage>{errors.category}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.account && touched.account}
            >
              <FormLabel>Account</FormLabel>
              <Field as={Select} name="account" rounded={"lg"}>
                <option value="" disabled>Select Account</option>
                {accounts.map((item, index) => (
                  <option key={index} value={item.value}>{item.label}</option>
                ))}
              </Field>
              <FormErrorMessage>{errors.account}</FormErrorMessage>
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