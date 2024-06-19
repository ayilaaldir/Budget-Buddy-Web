import { Heading, Stack, Text } from "@chakra-ui/react";

export default function RegisterHeader() {
  return (
    <Stack align={'center'} pb={8}>
      <Heading fontSize={'2xl'}>
        Create an account
      </Heading>
      <Text fontSize={'lg'} fontWeight={'semibold'}>
        Enter your username to sign up for this app
      </Text>
    </Stack>
  )
}