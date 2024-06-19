import { useNavigate } from "react-router-dom";
import { LoginSchema } from "@/lib/yup/auth";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function LoginForm() {
  const navigate = useNavigate();
  
  const handleSignIn = (values) => {
    fetch('http://141.147.151.192:8080/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(values.username)}&password=${encodeURIComponent(values.password)}`,
    })
      .then(response => response.json())
      .then(dataLogin => {
        if (dataLogin.status === 'success') {
          console.log("Successfully Logged In");
          localStorage.setItem('user_id', dataLogin.user_id);
          localStorage.setItem('username', dataLogin.username);
          navigate('/');
        } else {
          console.log("Wrong username or password");
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
      onSubmit={(values, { setSubmitting }) => {
        handleSignIn(values);
        setSubmitting(false);
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
