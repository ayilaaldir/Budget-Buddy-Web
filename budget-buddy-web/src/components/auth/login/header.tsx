import { Heading, Stack, Text } from "@chakra-ui/react";

export default function LoginHeader() {
  return (
    <Stack align={'center'} pb={8}>
      <Heading fontSize={'2xl'}>
        Sign in to your account
      </Heading>
      <Text fontSize={'lg'} fontWeight={'semibold'}>
        Enter your email
      </Text>
    </Stack>
  )
}