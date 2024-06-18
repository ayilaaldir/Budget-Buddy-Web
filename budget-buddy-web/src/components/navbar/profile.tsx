import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuList, Stack, Text } from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillKeyFill } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

export default function ProfileMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize as logged out
  const navigate = useNavigate(); // Initialize the navigate function
  const username = "John Doe";
  const email = "johndoe@gmail.com";

  const handleLogout = () => {
    setIsLoggedIn(false); // Update state on logout
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Update state on login
    navigate('/auth/login'); // Navigate to the login page
  };

  if (!isLoggedIn) {
    return (
      <Button
        variant={'outline'}
        fontSize={'sm'}
        cursor={'pointer'}
        rounded={'lg'}
        colorScheme='blue'
        onClick={handleLogin} // Navigate to login page on click
      >
        Sign In
      </Button>
    );
  }

  return (
    <Menu>
      <MenuButton as={Button}
        variant={'outline'}
        fontSize={'sm'}
        cursor={'pointer'}
        rounded={'lg'}
        colorScheme='blue'
      >
        Hai {username}
      </MenuButton>
      <MenuList p={0} rounded={'lg'}>
        <Box bg={'blue.200'} p={5} pb={8} roundedTop={'lg'} />
        <Flex align={'center'} direction={'column'} gap={3} px={2}>
          <Avatar mt={-6} name={username} bg={'blue.500'} size={'lg'} border={'4px'} color={"white"} />
          <Stack spacing={1} w={'full'} textAlign={'center'}>
            <Text fontWeight={'medium'}>{username}</Text>
            <Text fontSize={'sm'} color={"gray.500"}>{email}</Text>
          </Stack>
          <Stack w={'full'} my={2} spacing={1}>
            <Button
              onClick={handleLogout}
              colorScheme="red"
              bg={'red.500'}
              size={'sm'}
              w={'full'}
            >
              Log out
            </Button>
          </Stack>
        </Flex>
      </MenuList>
    </Menu>
  );
}
