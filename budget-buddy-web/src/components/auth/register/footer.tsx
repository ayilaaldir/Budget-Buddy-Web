import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

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

export default function RegisterFooter() {
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
