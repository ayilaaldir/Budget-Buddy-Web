import StatisticsExpense from "@/components/statistics/expense";
import StatisticsIncome from "@/components/statistics/income";
import MainLayout from "@/layouts/MainLayout";
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function StatisticsPage() {
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
              <StatisticsIncome />
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