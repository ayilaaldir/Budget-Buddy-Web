import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Textarea } from "@chakra-ui/react";

interface DataProps {
  date: string;
  title: string;
  content: string;
}

interface DetailNoteProps {
  isOpen: boolean;
  onClose: () => void;
  data: DataProps;
}

export default function DetailNote({ isOpen, onClose, data }: DetailNoteProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detail Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl isReadOnly>
              <FormLabel>Date</FormLabel>
              <Input value={data.date} />
            </FormControl>

            <FormControl isReadOnly>
              <FormLabel>Title</FormLabel>
              <Input value={data.title} />
            </FormControl>

            <FormControl isReadOnly>
              <FormLabel>Note</FormLabel>
              <Textarea value={data.content} />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='red' px={8} onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}