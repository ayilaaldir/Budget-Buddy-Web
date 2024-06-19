import { Heading, Modal, ModalBody, ModalContent, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ModalAddTransaction from "./add-transaction";

export default function ModalAdd({
  isOpen, onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      size={'4xl'}
    >
      <ModalOverlay />
      <ModalContent pt={3}>
        <ModalBody>
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab>Financial Activity</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Heading fontSize={'2xl'} pt={4} pb={8}>
                  Add your income or expense
                </Heading>
                <ModalAddTransaction onClose={onClose} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal >
  );
}