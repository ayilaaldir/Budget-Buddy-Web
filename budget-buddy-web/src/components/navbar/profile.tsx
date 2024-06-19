import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuList, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ username: '' ,user_id: ''});
  const navigate = useNavigate();

  useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');

    if (user_id && username) {
      setUserData({ username, user_id});
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/auth/login');
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  if (!isLoggedIn) {
    return (
      <Button
        variant={'outline'}
        fontSize={'sm'}
        cursor={'pointer'}
        rounded={'lg'}
        colorScheme='blue'
        onClick={handleLogin}
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
        Hi {userData.username}
      </MenuButton>
      <MenuList p={0} rounded={'lg'}>
        <Box bg={'blue.200'} p={5} pb={8} roundedTop={'lg'} />
        <Flex align={'center'} direction={'column'} gap={3} px={2}>
          <Avatar mt={-6} name={userData.username} bg={'blue.500'} size={'lg'} border={'4px'} color={"white"} />
          <Stack spacing={1} w={'full'} textAlign={'center'}>
            <Text fontWeight={'medium'}>{userData.username}</Text>
            <Text fontSize={'sm'} color={"gray.500"}>User ID: {userData.user_id}</Text>
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
