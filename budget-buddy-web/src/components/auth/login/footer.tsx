import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate here

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
    <Text color={'gray.500'}>or</Text>
    <Box h={'1px'} bg={'gray.100'} w={'full'} />
  </Flex>
)

export default function LoginFooter() {
  const navigate = useNavigate();

  const handleUseWithoutAccount = () => {
    navigate('/');
  };

  return (
    <>
      <FooterDivider />
      <Stack spacing={4}>
        <Button
          w={'full'}
          py={6}
          rounded={'lg'}
          fontWeight={'bold'}
          onClick={handleUseWithoutAccount}
        >
          Use without account
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
