import { Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
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
  const navigate = useNavigate(); // Initialize the navigate function

  const handleUseWithoutAccount = () => {
    navigate('/'); // Navigate back to the home page
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
          onClick={handleUseWithoutAccount} // Add onClick event here
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
