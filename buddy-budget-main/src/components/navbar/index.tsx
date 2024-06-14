import { Button, Flex, Icon } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import ProfileMenu from "@/components/navbar/profile";

const Unauthenticated = () => (
  <Button colorScheme="blue" size={'sm'}>
    Sign In
  </Button>
);

export default function Navbar({
  isOpen, onOpen, onClose
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {

  const isAuthenticated = false;

  return (
    <Flex
      w={'full'}
      justify={'space-between'}
      align={'center'}
      px={5} py={3}
      bg={'white'}
      borderBottom={'1px'}
      borderColor={'gray.100'}
      pos={'sticky'}
      top={0}
      zIndex={999}
    >
      <Button variant={'ghost'} onClick={isOpen ? onClose : onOpen}>
        <Icon as={LuMenu} boxSize={6} />
      </Button>
      <Flex>
        {isAuthenticated
          ? <Unauthenticated />
          : <ProfileMenu />
        }
      </Flex>
    </Flex>
  );
}
