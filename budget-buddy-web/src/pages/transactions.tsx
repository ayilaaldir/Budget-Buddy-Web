import TransactionsCalendar from "@/components/transactions/calendar";
import TransactionsMonthly from "@/components/transactions/monthly";
import MainLayout from "@/layouts/MainLayout";
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function TransactionsPage() {
  return (
    <MainLayout>
      <Flex p={6} w={'full'}>
        <Box w={'full'} h={'full'} bg={'white'} p={6} rounded={"lg"}>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Calendar</Tab>
              <Tab>Monthly</Tab>
            </TabList>
            <TabPanels>
              <TabPanel py={8}>
                <TransactionsCalendar />
              </TabPanel>
              <TabPanel py={8}>
                <TransactionsMonthly />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </MainLayout >
  )
}