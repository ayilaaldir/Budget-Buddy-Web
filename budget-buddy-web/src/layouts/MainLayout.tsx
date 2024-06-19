import ModalAdd from "@/components/addtransaction";
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import { Box, Button, Flex, Icon, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

export default function MainLayout({
  children
}: {
  children: Readonly<React.ReactNode>
}) {
  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: false
  });

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Flex w={'full'} minH={'100dvh'}>
      <Sidebar isOpen={isOpen} />

      <Flex bg={'gray.50'} flex={1} direction={'column'}>
        <Navbar onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        {children}
      </Flex>

      <ModalAdd isOpen={showModal} onClose={() => setShowModal(false)} />

      <Box pos={'fixed'} bottom={5} right={5} zIndex={999}>
        <Button
          p={3}
          colorScheme="blue"
          rounded={'full'}
          h={"fit-content"}
          w={"fit-content"}
          onClick={() => setShowModal(true)}
        >
          <Icon as={BsPlus} boxSize={8} />
        </Button>
      </Box>
    </Flex>
  )
}