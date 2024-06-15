import StatisticsExpense from "@/components/statistics-test/expense";
import StatisticsIncometest from "@/components/statistics-test/income";
import MainLayout from "@/layouts/MainLayout";
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function StatisticsPagetest() {
  return (
    <MainLayout>
      <Flex w={'full'} p={6} align={'center'} justify={'center'}>
        <Tabs variant="enclosed" minW={"4xl"} isFitted>
          <TabList>
            <Tab>Income</Tab>
            <Tab>Expense</Tab>
          </TabList>

          <TabPanels>
            <TabPanel px={0}>
              <StatisticsIncometest/>
            </TabPanel>
            <TabPanel px={0}>
              <StatisticsExpense />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </MainLayout>
  )
}