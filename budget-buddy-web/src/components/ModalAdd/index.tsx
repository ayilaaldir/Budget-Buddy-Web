import { Heading, Modal, ModalBody, ModalContent, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ModalFormIncome from "./income";
import ModalFormExpense from "./expense";
import ModalFormTransfer from "./transfer";

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
              <Tab>Income</Tab>
              <Tab>Expense</Tab>
              <Tab>Transfer</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Heading fontSize={'2xl'} pt={4} pb={8}>
                  Add Income
                </Heading>
                <ModalFormIncome onClose={onClose} />
              </TabPanel>
              <TabPanel>
                <Heading fontSize={'2xl'} pt={4} pb={8}>
                  Add Expense
                </Heading>
                <ModalFormExpense onClose={onClose} />
              </TabPanel>
              <TabPanel>
                <Heading fontSize={'2xl'} pt={4} pb={8}>
                  Add Transfer
                </Heading>
                <ModalFormTransfer onClose={onClose} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal >
  );
}