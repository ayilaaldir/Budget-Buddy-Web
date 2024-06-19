import { RegisterSchema } from "@/lib/yup/auth";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack } from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
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
          window.location.reload();
        } else {
          console.log("Wrong username or password");
        }
      })
      .catch(error => {
        console.error('Error:', error);
    });
  };


  const handleSignUp = (values) => {
    fetch('http://141.147.151.192:8080/register_user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(values.username)}&password=${encodeURIComponent(values.password)}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          console.log("Successfully Sign Up");
          handleSignIn(values);
          navigate('/');
        } else {
          console.log(data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
    });
  };

  return (
    <Formik
      validationSchema={RegisterSchema}
      initialValues={{ 
        username: '', 
        password: '', 
        confirmPassword: '' 
      }}
      onSubmit={(values) => {
        console.log(values);
        handleSignUp(values);
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={5}>
            <FormControl isRequired
              isInvalid={!!errors.username && touched.username}
            >
              <FormLabel>
                Username
              </FormLabel>
              <Field as={Input} type="string" name="username" rounded={'lg'} />
              <FormErrorMessage>{errors.username}</FormErrorMessage>
            </FormControl>

            {!errors.username && touched.username && (
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
              Sign up with username
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  )
}