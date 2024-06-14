import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Textarea } from "@chakra-ui/react";

interface CreateNoteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateNote({ isOpen, onClose }: CreateNoteProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" placeholder='Date' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Title' />
            </FormControl>
            <FormControl>
              <FormLabel>Note</FormLabel>
              <Textarea placeholder='Note' />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter gap={3}>
          <Button variant={"ghost"} colorScheme='red' onClick={onClose}>Close</Button>
          <Button colorScheme='blue' px={8}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}