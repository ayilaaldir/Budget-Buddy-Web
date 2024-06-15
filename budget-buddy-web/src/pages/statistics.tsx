import StatisticsComponent from "@/components/statistics/financial-activity";
import MainLayout from "@/layouts/MainLayout";
import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function StatisticsPage() {
  return (
    <MainLayout>
      <Flex w={'full'} p={6} align={'center'} justify={'center'}>
        <Tabs variant="enclosed" minW={"4xl"} isFitted>
          <TabList>
            <Tab>Financial Activity</Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <StatisticsComponent/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </MainLayout>
  )
}