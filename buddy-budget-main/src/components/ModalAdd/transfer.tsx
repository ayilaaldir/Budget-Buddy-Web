import { addTransferSchema } from "@/lib/yup/transfer";
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { Field, Formik } from "formik";

export default function ModalFormTransfer({ onClose }: { onClose: () => void }) {
  return (
    <Formik
      validationSchema={addTransferSchema}
      initialValues={{
        date: undefined,
        amount: undefined,
        from: undefined,
        to: undefined,
        note: undefined
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
              isInvalid={!!errors.from && touched.from}
            >
              <FormLabel>
                From
              </FormLabel>
              <Field as={Input} name="from" rounded={'lg'} />
              <FormErrorMessage>{errors.from}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.to && touched.to}
            >
              <FormLabel>
                To
              </FormLabel>
              <Field as={Input} name="to" rounded={'lg'} />
              <FormErrorMessage>{errors.to}</FormErrorMessage>
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