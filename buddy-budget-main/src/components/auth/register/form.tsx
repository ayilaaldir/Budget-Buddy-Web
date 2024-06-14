import { RegisterSchema } from "@/lib/yup/auth";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function RegisterForm() {
  return (
    <Formik
      validationSchema={RegisterSchema}
      initialValues={{ email: '', password: '', confirmPassword: '' }}
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

            {!errors.email && touched.email && (
              <>
                <FormControl isRequired
                  isInvalid={!!errors.password && touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Field as={Input} type="password" name="password" rounded={'lg'} />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isRequired
                  isInvalid={!!errors.confirmPassword && touched.confirmPassword}
                >
                  <FormLabel>Retype Password</FormLabel>
                  <Field as={Input} type="password" name="confirmPassword" rounded={'lg'} />
                  <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                </FormControl>
              </>
            )}
            <Button
              type="submit"
              variant={"primary"}
              py={6}
            >
              Sign up with email
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
}