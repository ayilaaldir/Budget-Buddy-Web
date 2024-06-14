import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuList, Stack, Text } from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillKeyFill } from 'react-icons/bs';


export default function ProfileMenu() {
  const username = "John Doe";
  const email = "johndoe@gmail.com";

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
        <Box
          bg={'blue.200'}
          p={5} pb={8}
          roundedTop={'lg'}
        />
        <Flex
          align={'center'}
          direction={'column'}
          gap={3}
          px={2}
        >
          <Avatar
            mt={-6}
            name={username}
            bg={'blue.500'}
            size={'lg'}
            border={'4px'}
            color={"white"}
          />

          <Stack spacing={1} w={'full'} textAlign={'center'}>
            <Text fontWeight={'medium'}>
              {username}
            </Text>
            <Text fontSize={'sm'} color={"gray.500"}>
              {email}
            </Text>
          </Stack>
          <Flex gap={3}>
            <Button
              colorScheme='blue'
              bg={'blue.300'}
              rounded={'full'}
              w={'fit-content'}
              h={'fit-content'}
              p={3}
            >
              <Icon as={BsFillKeyFill} />
            </Button>
            <Button
              colorScheme='blue'
              bg={'blue.300'}
              rounded={'full'}
              w={'fit-content'}
              h={'fit-content'}
              p={3}
            >
              <Icon as={AiFillSetting} />
            </Button>
          </Flex>

          <Stack w={'full'} my={2} spacing={1}>
            <Button
              colorScheme="red"
              bg={'red.500'}
              size={'sm'}
              w={'full'}
            >
              Keluar
            </Button>
          </Stack>
        </Flex>
      </MenuList>
    </Menu>
  )
}