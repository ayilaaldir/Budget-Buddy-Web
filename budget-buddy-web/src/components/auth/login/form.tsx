import { LoginSchema } from "@/lib/yup/auth";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function LoginForm() {
  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <FormControl isRequired
              isInvalid={!!errors.email && touched.email}
            >
              <FormLabel>
                Email
              </FormLabel>
              <Field as={Input} type="email" name="email" rounded={'lg'} />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.password && touched.password}
            >
              <FormLabel>Password</FormLabel>
              <Field as={Input} type="password" name="password" rounded={'lg'} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              variant={"primary"}
              py={6}
            >
              Login
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
}