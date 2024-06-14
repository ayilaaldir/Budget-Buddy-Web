import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const FooterDivider = () => (
  <Flex
    py={5}
    gap={3}
    w={'full'}
    justify={'space-between'}
    align={'center'}
    whiteSpace={'nowrap'}
  >
    <Box h={'1px'} bg={'gray.100'} w={'full'} />
    <Text color={'gray.500'}>or continue with</Text>
    <Box h={'1px'} bg={'gray.100'} w={'full'} />
  </Flex>
)

export default function LoginFooter() {
  return (
    <>
      <FooterDivider />
      <Stack spacing={4}>
        <Button
          w={'full'}
          py={6}
          rounded={'lg'}
          justifyContent={'space-between'}
          fontWeight={'bold'}
        >
          <Icon as={FcGoogle} boxSize={6} />
          Google
          <Icon as={FcGoogle} visibility={"hidden"} />
        </Button>

        <Button
          w={'full'}
          py={6}
          rounded={'lg'}
          fontWeight={'bold'}
        >
          I don't want to use account
        </Button>
        <Text textAlign={'center'} color={'gray.500'}>
          Don't have an account? {' '}
          <Link to={'/auth/register'}>
            <Text as={'span'}
              color={'black'}
              cursor={'pointer'}
            >
              Sign Up
            </Text>
          </Link>
        </Text>

        <Text textAlign={'center'} color={'gray.500'} px={5}>
          By clicking continue, you agree to our {' '}
          <Text as={'span'} color={'black'} cursor={'pointer'}>Terms of Service</Text> {' '}
          and {' '}
          <Text as={'span'} color={'black'} cursor={'pointer'}>Privacy Policy</Text>
        </Text>
      </Stack>
    </>
  )
}