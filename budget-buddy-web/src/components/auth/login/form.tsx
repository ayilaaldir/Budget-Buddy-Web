import { LoginSchema } from "@/lib/yup/auth";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack} from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function LoginForm() {
  
  const handleSignIn = (values) => {
    fetch('http://141.147.151.192:8080/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(values.username)}&password=${encodeURIComponent(values.password)}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          console.log("Masuk")
        } else {
          console.log("MANA ADA")
        }
      })
      .catch(error => {
        console.error('Error:', error);
    });
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialValues={{ 
        username: '', 
        password: '' 
      }}
      onSubmit={(values) => {
        console.log(values);
        handleSignIn(values);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>

            <FormControl isRequired
              isInvalid={!!errors.username && touched.username}
            >
              <FormLabel>
                Username
              </FormLabel>
              <Field as={Input} type="string" name="username" rounded={'lg'} />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired
              isInvalid={!!errors.password && touched.password}
            >
              <FormLabel>Password</FormLabel>
              <Field as={Input} type="password" name="password" rounded={'lg'} />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Button type="submit" variant={"primary"} py={6}>
              Login
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
}